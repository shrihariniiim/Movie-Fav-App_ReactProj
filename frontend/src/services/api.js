const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  // OMDb has NO "popular" movies
  
  const response = await fetch(
    `${BASE_URL}?s=avengers&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};
