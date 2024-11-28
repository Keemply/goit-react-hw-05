import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTg3NjI4MWUyN2E0MDg4MzM5NjZiODdhMjdhYTY5ZSIsIm5iZiI6MTczMjcyMTM0Mi44MTg5NTU0LCJzdWIiOiI2NzQ3MzhhM2I1MjUwODlkZGY5YjY4NDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rzrw8nsvXEceBJFIGI0iVr686_ca-ZqWKHQjo7dKjak";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const getTrendMovies = async () => {
  const result = await axios("/trending/movie/day?language=en-US'");

  return result.data;
};
export const getMovieDetails = async (id) => {
  const result = await axios(`/movie/${id}`);
  return result.data;
};
export const getMovieCredits = async (id) => {
  const result = await axios(`/movie/${id}/credits`);
  return result.data;
};
export const getMovieReviews = async (id) => {
  const result = await axios(`/movie/${id}/reviews`);
  return result.data;
};
export const searchMovie = async (searchQ) => {
  const result = await axios("/search/movie", {
    params: {
      query: searchQ,
    },
  });
  return result.data;
};
