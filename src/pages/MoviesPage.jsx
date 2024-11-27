import { useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMovie } from "../tmdbApi";
function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const searchRes = await searchMovie(e.target[0].value);
    setSearchedMovies(searchRes);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {searchedMovies && <MovieList movies={searchedMovies} />}
    </div>
  );
}
export default MoviesPage;
