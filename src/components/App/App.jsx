import { useState, useEffect } from "react";
import { fetchedPictures } from "../services/unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [query, setQuery] = useState("");
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setError(false);
        setLoading(true);
        const results = await fetchedPictures(query, page);
        setPictures((prev) => (page === 1 ? results : [...prev, ...results]));
      } catch {
        toast.error("Server is not responding!");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch(query);
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar query={query} onSubmit={handleSetQuery} />

      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}

      {loading && <Loader />}

      {pictures.length > 0 && (
        <ImageGallery images={pictures} onImageClick={openModal} />
      )}

      {pictures.length > 0 && <LoadMoreBtn setPage={setPage} />}

      {modalOpen && selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}
