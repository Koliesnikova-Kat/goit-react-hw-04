import Modal from "react-modal";
import s from "./ImageModal.module.css";

export default function ImageModal({
  isOpen,
  onClose,
  url,
  description,
  username,
  likes,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.wrapper}>
        <img src={url} alt={description} className={s.img} />
        <p>Author: {username}</p>
        <p>Likes: {likes}</p>
      </div>
    </Modal>
  );
}
