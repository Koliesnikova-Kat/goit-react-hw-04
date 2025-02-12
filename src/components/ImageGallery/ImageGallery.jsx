import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <>
      <ul className={s.gallery}>
        {items.map(({ item, id, urls, description }) => (
          <li key={id} className={s.el}>
            <ImageCard
              urls={urls}
              description={description}
              onClick={onImageClick}
              image={item}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
