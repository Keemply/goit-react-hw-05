import { Link } from "react-router-dom";
function MovieList({ movies }) {
  return (
    <ul>
      {movies.results.map((movie) => {
        console.log("MovieList:", movie);
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default MovieList;
