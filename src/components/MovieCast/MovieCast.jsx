import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

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

  console.log("author", actors);
  return (
    <>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.name}
              width="150"
            />
            <h3>{actor.name}</h3>
            <p> Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
