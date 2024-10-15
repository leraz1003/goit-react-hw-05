import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};
export default MovieList;
