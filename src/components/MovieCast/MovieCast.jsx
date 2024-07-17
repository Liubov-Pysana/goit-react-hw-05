import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../tmdp-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetchCast() {
            try {
                const creditsData = await getMovieCredits(movieId);
                setCast(creditsData.cast);
            } catch (error) {
                console.error("Error fetching cast details:", error);
            }
        }
        fetchCast();
    }, [movieId]);

    if (!cast.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h4>Cast</h4>
            <ul className={css.castList}>
                {cast.map((actor) => (
                    <li className={css.castListItem} key={actor.cast_id}>
                        <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} alt={actor.name} />
                        <div>
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
