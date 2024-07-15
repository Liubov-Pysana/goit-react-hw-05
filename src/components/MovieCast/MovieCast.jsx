import { useOutletContext } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
    const { cast } = useOutletContext();

    if (!cast) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h4>Cast</h4>
            <ul className={css.castList}>
                {cast.map((actor) => (
                    <li className={css.castListItem} key={actor.cast_id}>
                        {/* {actor.name} */}

                        <img src={"https://image.tmdb.org/t/p/w92" + actor.profile_path} alt={actor.name} />
                        <div>
                            {" "}
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
