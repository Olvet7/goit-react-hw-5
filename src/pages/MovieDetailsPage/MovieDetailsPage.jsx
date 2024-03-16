import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDetailsFromId} from '../../kinoteka-api'
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true)
        setError(false)
        const detailFromId = await getDetailsFromId (movieId);
        setMovie(detailFromId)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getMovieDetails()
  }, [movieId]);

  return (
    <div>
      {error && <p>Ops!</p>}
      {loading && <p>Loading...</p>}
      <p>Details about movie</p>
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
}
