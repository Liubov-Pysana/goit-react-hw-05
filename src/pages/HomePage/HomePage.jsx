import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdp-api";

export default function HomePage() {
    // <Link to="/movies">{MovieList}</Link>;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (error) {}
        }
        fetchMovies();
    }, []);

    return (
        <div>
            <h3>Trending today</h3>
            <MovieList movies={movies}></MovieList>
        </div>
    );
}
