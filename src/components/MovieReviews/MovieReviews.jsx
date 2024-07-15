export default function MovieReviews({ reviews }) {
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    );
}
