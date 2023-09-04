import axios from 'axios';

const API_KEY = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

export function searchGif(queryKey, limit, offset) {
  return axios
    .get(
      `${BASE_URL}?api_key=${API_KEY}&q=${queryKey}&limit=${limit}&offset=${offset}`
    )
    .then((res) => res.data);
}
