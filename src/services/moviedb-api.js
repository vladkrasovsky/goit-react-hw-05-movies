import axios from 'axios';
import { moviedb as config } from '../constants';

axios.defaults.baseURL = config.BASE_URL;

const params = {
  params: {
    api_key: config.API_KEY,
    language: config.LANGUAGE,
    include_adult: config.INCLUDE_ADULT,
  },
};

async function getTrendings(page = 1) {
  const urlAXIOS = `trending/movie/day?page=${page}`;
  const { data } = await axios.get(urlAXIOS, params);

  const normalizedResults = data.results.map(({ id, title }) => ({
    id,
    title,
  }));

  data.results = normalizedResults;
  return data;
}

async function getMovieDetails(movieId) {
  const urlAXIOS = `movie/${movieId}`;

  const { data } = await axios.get(urlAXIOS, params);
  const { original_title, overview, vote_average, genres, poster_path } = data;

  return {
    original_title,
    overview,
    vote_average: vote_average.toFixed(1),
    genres,
    poster_path: poster_path
      ? config.POSTER_BASE_URL + poster_path
      : config.POSTER_PLACEHOLDER_URL,
  };
}

const api = {
  getTrendings,
  getMovieDetails,
};

export default api;
