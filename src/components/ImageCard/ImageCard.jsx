import s from "./ImageCard.module.css";

export default function ImageCard({ image, urls, description, onClick }) {
  return (
    <div className={s.el} onClick={() => onClick(image)}>
      <img src={urls.small} alt={description} className={s.img} />
    </div>
  );
}
