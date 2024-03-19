import MovieItem from "../MovieItem/MovieItem"
import css from "../MovieList/MovieList.module.css"

export default function MovieList ({movies}) {
  return (
    <ul className={css.list}> 
        {movies.map((movie) => {
            return (
              <li key={movie.id}>
                  <MovieItem movie={movie}/>
              </li>
            )
        })}
    </ul>
  )
}
