// App.jsx
import clsx from "clsx";
import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import css from "../App/App.module.css";
import Navigation from "../Navigation/Navigation";

// Lazy load the page components
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

// Import the nested components directly
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={css.container}>
            <h1>Routing in React</h1>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <footer>
                <h5>I love React</h5>
            </footer>
        </div>
    );
}

export default App;
