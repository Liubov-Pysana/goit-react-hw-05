import { useEffect, useState, useRef } from "react";
import { NavLink, useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import { getMovieById, getMovieCredits, getMovieReviews } from "../../tmdp-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const prevLocationRef = useRef(location.state?.from ?? "/movies");

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const movieData = await getMovieById(movieId);
                setMovie(movieData);

                const creditsData = await getMovieCredits(movieId);
                setCast(creditsData.cast);

                const reviewsData = await getMovieReviews(movieId);
                setReviews(reviewsData.results);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <button className={css.goBackButton} onClick={() => navigate(prevLocationRef.current)}>
                Go back
            </button>
            <div>
                <h4>Movie Details - {movie.title}</h4>
            </div>
            <div className={css.container}>
                <img
                    className={css.img}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className={css.overview}>
                    <h5>Overview</h5>
                    <p className={css.text}>{movie.overview}</p>
                    <h5>Release Date</h5>
                    <p>{movie.release_date}</p>
                    <h5>Genres</h5>
                    <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                    <h5>Rating</h5>
                    <p>{movie.vote_average}</p>
                </div>
            </div>
            <h4>Additional information</h4>
            <ul>
                <li>
                    <NavLink to="cast" state={{ cast }}>
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reviews" state={{ reviews }}>
                        Reviews
                    </NavLink>
                </li>
            </ul>

            <Outlet context={{ cast, reviews }} />
        </>
    );
}
