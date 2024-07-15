import { useOutletContext } from "react-router-dom";

export default function MovieReviews() {
    const { reviews } = useOutletContext();

    if (!reviews) {
        return <div>Loading...</div>;
    }
    // We don't have any reviews for this movie
    return (
        <div>
            <h4>Reviews</h4>
            <ul>
                {!reviews.length && <div>We don't have any reviews for this movie</div>}
                {reviews.map((review) => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    );
}
