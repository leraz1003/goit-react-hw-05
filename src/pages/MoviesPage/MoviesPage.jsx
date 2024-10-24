import { useEffect } from "react";
import { useState } from "react";
import { fetchSearchMovie } from "../../services/api";
import { Field, Form, Formik } from "formik";
import s from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      const data = await fetchSearchMovie(query);
      setSearchMovie(data.results);
    };
    getMovies();
  }, [query]);

  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.query });
    actions.resetForm();
  };

  return (
    <>
      <div className={s.searchContainer}>
        <Formik initialValues={{ query: query }} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field name="query" className={s.searchField} />
            <button type="submit" className={s.submitButton}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <ul className={s.list}>
        <MovieList movies={searchMovie} />
      </ul>
    </>
  );
};

export default MoviesPage;
