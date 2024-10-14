import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import { Suspense, useEffect, useState } from "react";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;
  return (
    <div className={s.movieDetailsContainer}>
      <Link to={location.state?.from ?? "/"} className={s.backLink}>
        ← Go back
      </Link>
      <div className={s.movieDetails}>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={s.movieInfo}>
          <h1 className={s.title}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </h1>
          <p className={s.score}>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p className={s.overview}>{movie.overview}</p>
          <h2>Genres</h2>
          <p className={s.genres}>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className={s.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<h2>Second suspense</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
