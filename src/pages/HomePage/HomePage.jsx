import { useEffect, useState } from "react"
import { getTrendingMovieList } from "../../kinoteka-api"
import MovieList from "../../components/MovieList/MovieList";
import Carousel from "../../components/Carousel/Carousel";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getTrendingList() {
            try{
                setLoading(true)
                const trendingMovies = await getTrendingMovieList()
                setMovies(trendingMovies)
            }
            catch(error){
                setError(true);
            }
            finally {
                setLoading(false)
            }
        }
        getTrendingList()
    }, [])

    return (
        <div className={css.container}>
            {movies.length > 0 && <Carousel movies={movies}/>}
            {loading && <Loader/>}
            {error && <p>Oops, please reload this page</p>}
            {movies.length > 0 && <MovieList movies={movies}/>}
        </div>
    )
}
