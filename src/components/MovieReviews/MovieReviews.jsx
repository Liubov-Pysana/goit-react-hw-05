import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../tmdp-api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviewsData = await getMovieReviews(movieId);
                setReviews(reviewsData.results);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }
        fetchReviews();
    }, [movieId]);

    if (!reviews.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.reviewsContainer}>
            <h4>Reviews</h4>
            <ul className={css.reviewsList}>
                {!reviews.length && <div>We don't have any reviews for this movie</div>}
                {reviews.map((review) => (
                    <li className={css.reviewItem} key={review.id}>
                        <p className={css.reviewContent}>{review.content}</p>
                        <p className={css.reviewAuthor}>- {review.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
