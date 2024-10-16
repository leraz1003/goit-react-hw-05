import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQyNjlmNjczODZiOTFlYjJjMWFmNjg5MDg1MGI5ZCIsIm5iZiI6MTcyODkwOTgyOS4wNzE0OTYsInN1YiI6IjY3MGQwZmI5ZDVmOTNhM2RhMGJiYjgxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z17_ZGHfAZpTxn8fplNZiS08ALznhAQxHEGl89-5cNY",
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );

    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchMoviesById = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchReviewsById = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, options);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchCastById = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, options);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchSearchMovie = async (name) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};
