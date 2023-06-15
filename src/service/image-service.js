import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  params: {
    orientation: 'landscape',
    per_page: 15,
  },
});

const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
instance.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

export const getImages = async (query, page) => {
  const { data } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
};
