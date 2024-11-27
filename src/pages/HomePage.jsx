import MovieList from "../components/MovieList/MovieList";

function HomePage({ trendMovies }) {
  return (
    <div>
      <h1>Trending today</h1>
      {trendMovies && <MovieList movies={trendMovies} />}
      {!trendMovies && <p>Loading...</p>}
    </div>
  );
}
export default HomePage;
