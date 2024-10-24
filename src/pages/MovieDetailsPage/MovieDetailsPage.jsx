import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import { Suspense, useEffect, useRef, useState } from "react";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { FadeLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.infoLink, isActive && s.active);
  };

  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  if (!movie)
    return (
      <div className={s.loaderContainer}>
        <FadeLoader color="#f0db4f" />
      </div>
    );
  return (
    <div className={s.movieDetailsContainer}>
      <Link to={backLink.current} className={s.backLink}>
        ← Go back
      </Link>
      <div className={s.movieDetails}>
        <div className={s.posterWrap}>
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={s.movieInfo}>
          <h1 className={s.title}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </h1>
          <p className={s.score}>
            User Score: {(movie.vote_average * 10).toFixed(2)}%
          </p>
          <h2>Overview</h2>
          <p className={s.overview}>{movie.overview}</p>
          <h2>Genres</h2>
          <p className={s.genres}>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className={s.additionalInfo}>
        <h3 className={s.infoTitle}>Additional information</h3>
        <ul className={s.infoList}>
          <li className={s.infoItem}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li className={s.infoItem}>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense
        fallback={
          <div className={s.loaderContainerWrap}>
            <FadeLoader color="#f0db4f" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
