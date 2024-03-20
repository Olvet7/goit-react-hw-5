import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <Link to="/">Back to home</Link>
      <p>This page is not found</p>
      <img src="/img/not_found_page.jpg" alt="Oops, not found!" style={{width: 300}}/>
    </div>
  );
}
    