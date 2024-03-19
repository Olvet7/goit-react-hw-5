import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import css from "./MovieDetails.module.css";

export default function MovieDetails({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  console.log({ movie });
  return (
    <div className={css.container}>
      <button>
        <FaRegArrowAltCircleLeft />
        Go Back
      </button>
      <div className={css.info}>
        <div>
          <img
            src={`${baseUrl}${movie.backdrop_path}`}
            alt="Poster of Film"
            className={css.img}
          />
        </div>
        <div className={css.infoBlock}>
          <h2>{movie.title}</h2>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Ganres:</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
