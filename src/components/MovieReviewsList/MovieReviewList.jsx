import MovieReviewItem from "../MovieReviewItem/MovieReviewItem"
import css from "./MovieReviewList.module.css"

export default function MovieReviewList({reviews}) {
  return (
    <ul className={css.list}>
        {reviews.map((review) => {
            return (
                <li key={review.id}>
                    <MovieReviewItem review={review}/>
                </li>
            )
        })}
    </ul>
  )
}
