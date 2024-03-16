import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
//   const location = useLocation();
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        {movie.original_title} 
      </Link>
    </div>
  );
}


// useLocation, state={location}