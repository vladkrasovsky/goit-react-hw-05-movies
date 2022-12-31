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

const api = {
  getTrendings,
};

export default api;
