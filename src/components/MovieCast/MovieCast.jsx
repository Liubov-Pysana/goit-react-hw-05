export default function MovieCast({ cast }) {
    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.cast_id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
}
