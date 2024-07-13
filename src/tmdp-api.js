import axios from "axios";
// import MovieList from "./components/MovieList/MovieList";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
//axios.defaults.headers.common["Authorization"] = "Bearer cacbd44e0a90a01a6c0853d0ccb68158";

const options = {
    headers: {
        // Замість api_read_access_token вставте свій токен
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZDQ0ZTBhOTBhMDFhNmMwODUzZDBjY2I2ODE1OCIsIm5iZiI6MTcyMDgyNTQ0Ny4yNTA4NTEsInN1YiI6IjY2OGQzNmFiOTRiMTFmZjNhNGRjM2VmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvn1plLjcxizgdJ18hOBjJVXxZxOZTOhSPBKvUkmzXs",
    },
};

export const getMovies = async (query) => {
    const response = await axios.get(`/search/movie`, {
        params: {
            query,
            include_adult: false,
            language: "en-US",
            page: 1,
        },
        ...options,
    });
    return response.data;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
};

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day`, options);
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data;
};

// axios
//     .get(url, options)
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
