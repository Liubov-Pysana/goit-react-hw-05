import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <header>
            <nav className={css.nav}>
                <NavLink to="/" className={makeNavLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={makeNavLinkClass}>
                    Movies
                </NavLink>

                {/* <NavLink to="/movies/:movieId" className={makeNavLinkClass}>
                    MovieDetailsPage
                </NavLink>
                <NavLink to="/movies/:movieId/cast" className={makeNavLinkClass}>
                    MovieCast
                </NavLink>
                <NavLink to="/movies/:movieId/reviews" className={makeNavLinkClass}>
                    MovieReviews
                </NavLink>

                <NavLink to="/NotFoundPage" className={makeNavLinkClass}>
                    NotFoundPage
                </NavLink> */}
            </nav>
        </header>
    );
}
