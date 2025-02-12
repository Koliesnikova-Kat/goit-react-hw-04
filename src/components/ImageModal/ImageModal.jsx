import Modal from "react-modal";
import s from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, image, description }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image} alt={description} className={s.img} />
    </Modal>
  );
}
