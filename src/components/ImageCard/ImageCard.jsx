import s from "./ImageCard.module.css";

export default function ImageCard({ img, description, onClick, image }) {
  return (
    <div className={s.el}>
      <img
        src={img}
        alt={description}
        className={s.img}
        onClick={() => onClick(image)}
      />
    </div>
  );
}
