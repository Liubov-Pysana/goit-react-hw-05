import clsx from "clsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import css from "../App/App.module.css";
import Navigation from "../Navigation/Navigation";

import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={css.container}>
            <h1>Routingin React</h1>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/movies" element={<MoviesPage />}></Route>
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
                <Route path="/NotFoundPage" element={<NotFoundPage />}></Route>
            </Routes>

            <footer>
                <h5>I love React</h5>
            </footer>
        </div>
    );
}

export default App;
