import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviewsById(movieId);
      if (data && data.results) {
        setReviews(data.results);
      }
    };
    getReviews();
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <ul className={s.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id || review.author} className={s.reviewItem}>
              <h3 className={s.reviewAuthor}>{review.author}</h3>
              <p className={s.reviewContent}>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;
