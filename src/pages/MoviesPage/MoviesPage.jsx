import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState, createRef } from "react";
import { getMovies, getTrendingMovies } from "../../tmdp-api";

export default function MoviesPage() {
    // <Link to="/movies">{MovieList}</Link>;
    const inputRef = createRef();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getMovies(search);
                setMovies(data.results);
            } catch (error) {}
        }
        fetchMovies();
    }, [search]);

    return (
        <div>
            <input ref={inputRef}></input>
            <button
                onClick={() => {
                    console.log(inputRef.current.value);
                    setSearch(inputRef.current.value);
                }}
            >
                Search
            </button>
            {movies.length > 0 && <MovieList movies={movies}></MovieList>}
            {/* <MovieList movies={movies}></MovieList> */}
        </div>
    );
}
