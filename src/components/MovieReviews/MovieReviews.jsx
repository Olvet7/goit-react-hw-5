import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsFromMovie } from "../../kinoteka-api";
import MovieReviewList from "../MovieReviewsList/MovieReviewList";

export default function MovieReviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getReviews(){
            try {
                setError(false);
                setLoading(true);
                const reviewsList = await getReviewsFromMovie(movieId);
                setReviews(reviewsList)
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
                setError(false);
            }
        }
        getReviews();
    }, [movieId])

  return (
    <div>   
      {loading && <p>Loading...</p>}
      {error && <p>Oops! Reload this page, please</p>}
      {reviews.length === 0 && !error && !loading && <p>No reviews yet...</p>}
      {<MovieReviewList reviews={reviews}/>}
    </div>
  )
}
