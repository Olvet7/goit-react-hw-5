import MovieCastActor from "../MovieCastActor/MovieCastActor";
import css from "./MovieCastList.module.css";

export default function MovieCastList({ castList }) {
  return (
    <div>
      <ul className={css.list}>
        {castList.map((actor) => {
          return (
            <li key={actor.id}>
              <MovieCastActor actor={actor} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
