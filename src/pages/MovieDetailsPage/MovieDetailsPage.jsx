import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { getDetailsFromId } from "../../kinoteka-api";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const makeActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const detailFromId = await getDetailsFromId(movieId);
        setMovie(detailFromId);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current}><FaRegArrowAltCircleLeft /> Go Back</Link>
      {/* <Link to={backLinkRef}>
        <FaRegArrowAltCircleLeft />
        Go Back
      </Link> */}
      {error && <NotFoundPage />}
      {loading && <Loader />}
      {movie && <MovieDetails movie={movie} />}

      <div>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <NavLink to="cast" className={makeActiveClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={makeActiveClass}>
              Rewiews
            </NavLink>
          </li>
        </ul>
      </div>
      
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
