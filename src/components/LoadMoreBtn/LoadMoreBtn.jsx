import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ setPage }) {
  return (
    <>
      <button
        className={s.button}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load more
      </button>
    </>
  );
}
