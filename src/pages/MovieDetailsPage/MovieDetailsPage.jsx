  import { useState, useEffect } from "react";
  import { useParams, Outlet } from "react-router-dom";
  import {getDetailsFromId} from '../../kinoteka-api'
  import MovieDetails from "../../components/MovieDetails/MovieDetails";
  import { NavLink } from "react-router-dom";
  import clsx from "clsx";
  import css from "./MovieDetailsPage"

  const makeActiveClass = ({isActive}) => {
    return clsx(css.link, isActive && css.isActive)
  }

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
        {movie && <MovieDetails movie={movie} />}
        <div>
        <h3>Additional information:</h3>
          <ul>
            <li><NavLink to="cast" className={makeActiveClass}>Cast</NavLink></li>
            <li><NavLink to="reviews" className={makeActiveClass}>Rewiews</NavLink></li>
          </ul>
        </div>
        <Outlet/>
      </div>
    );
  }
