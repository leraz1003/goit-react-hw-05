import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      const data = await fetchCastById(movieId);
      if (data && data.cast) {
        setActors(data.cast);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <>
      <ul className={s.castList}>
        {actors.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            {actor.profile_path ? (
              <img
                className={s.actorImage}
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                width="150"
              />
            ) : (
              <div className={s.placeholderImage}></div>
            )}
            <h3 className={s.actorName}>{actor.name}</h3>
            <p className={s.actorCharacter}> Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
