import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div className={s.home}>
      <h1>Trending Movies</h1>
      {
        <ul>
          <MovieList movies={movies} />
        </ul>
      }
    </div>
  );
};

export default HomePage;
