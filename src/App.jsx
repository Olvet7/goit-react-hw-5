import { Suspense, lazy  } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import HomePage from "./pages/HomePage/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))

export default function App() {
  return (
    <>
      <Navigation />
    <Suspense fallback="<p>LOADING PAGE...</p>">
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} /> 
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>
    </>
  );
}
