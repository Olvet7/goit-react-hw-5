import { NavLink } from "react-router-dom";
import css from './/Navigation.module.css'
import clsx from "clsx";

const makeActiveClass = ({isActive}) => {
  return clsx(css.link, isActive && css.isActive)
}

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeActiveClass}>Home</NavLink>
      <NavLink to="/movies" className={makeActiveClass}>Movies</NavLink>
    </nav>
  );
}
