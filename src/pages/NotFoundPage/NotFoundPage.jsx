import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>This page is not found</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
    