import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import { getTrendMovies } from "./tmdbApi";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  const [trendMovies, setTrendMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    async function wrapper() {
      const movies = await getTrendMovies();
      setTrendMovies(movies);
    }
    wrapper();
  }, [location]);

  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route
            path="/"
            element={<HomePage trendMovies={trendMovies} location={location} />}
          />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
