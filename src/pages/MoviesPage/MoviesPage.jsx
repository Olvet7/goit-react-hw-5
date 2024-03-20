
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import {getSearchedMovie} from '../../kinoteka-api';
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviePage.module.css"
import Loader from "../../components/Loader/Loader";

export default function MoviesPage () {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params] = useSearchParams();
  const queryParam = params.get("query") ?? "";

  useEffect(() => {
    if (queryParam === "") {
      return;
    }
    const getFilteredMovies = async () => {
      try {
        setError(false)
        setLoading(true)
        const movieList = await getSearchedMovie(queryParam);
        setFilteredMovies(movieList);
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getFilteredMovies();
  }, [queryParam]);

  const memoisedMovie = useMemo(() => {
    return filteredMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(queryParam.toLowerCase())
    })
  }, [filteredMovies, queryParam])

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <p>Oops, please reload this page</p>}
      <SearchBar />
      {filteredMovies.length > 0 && <MovieList movies={memoisedMovie}/>}
    </div>
  )
}
