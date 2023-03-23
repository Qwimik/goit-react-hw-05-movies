import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3217ae06898d6f0a1d4d89e84bb85582';

axios.defaults.baseURL = BASE_URL;

export const searchMovieId = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const searchTrending = async () => {
  const res = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
  return res.data;
};
