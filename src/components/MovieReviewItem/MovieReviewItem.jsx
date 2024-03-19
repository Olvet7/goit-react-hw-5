import css from "./MovieReviewItem.module.css";

export default function MovieReviewItem ({review}) {
  return (
    <div className={css.item}>
        <h3 className={css.author}>{review.author}</h3>
        <p className={css.text}>{review.content}</p>
    </div>
  )
}
