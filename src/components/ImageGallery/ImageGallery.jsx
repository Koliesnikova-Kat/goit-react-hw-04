import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.el}>
            <ImageCard
              img={image.urls.small}
              description={image.description}
              onClick={onImageClick}
              image={image.urls.regular}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
