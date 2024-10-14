import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  // const baseUrl = "https://image.tmdb.org/t/p/";
  // const fileSize = "original";

  // const location = useLocation();
  // console.log(location);
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
