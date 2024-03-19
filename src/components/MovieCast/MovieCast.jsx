import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastFromMovie } from "../../kinoteka-api";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const cast = await getCastFromMovie(movieId);
        setCastList(cast);
        console.log(castList.length);
      } catch (error) {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>   
      {loading && <p>Loading...</p>}
      {error && <p>Oops! Reload this page, please</p>}
      <MovieCastList castList={castList} />
    </div>
  );
}
