import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
    const { movieId } = useParams();

    return (
        // <Route path="/movies/:movieId/cast" element={<div>MovieCast</div>}></Route>
        // <Route path="/movies/:movieId/reviews" element={<div>MovieReviews</div>}></Route>
        <>
            <div>Movie Details - {movieId}</div>
            <button>
                <NavLink to="HomePage">Go back</NavLink>
            </button>
            <ul>
                <li>
                    <NavLink to="MovieCast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="MovieReviews">Reviews</NavLink>
                </li>
            </ul>
            {/* <Route path={`${path}/cast`} component={MovieCast} />
            <Route path={`${path}/reviews`} component={MovieReviews} /> */}
        </>
    );
}
