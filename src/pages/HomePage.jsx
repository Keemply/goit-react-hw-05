import MovieList from "../components/MovieList/MovieList";

function HomePage({ trendMovies, location }) {
  return (
    <div>
      <h1>Trending today</h1>
      {trendMovies && <MovieList movies={trendMovies} location={location} />}
      {!trendMovies && <p>Loading...</p>}
    </div>
  );
}
export default HomePage;
