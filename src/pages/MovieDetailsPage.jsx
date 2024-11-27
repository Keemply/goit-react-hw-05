import { Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../tmdbApi";
function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const movieDetails = getMovieDetails(movieId);
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
