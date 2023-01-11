import axios from 'axios';


const fetchDataApi = (query, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '29304756-51da1fab5abbfa991ea2eaa1b';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${query}`)
    .then(response => response.data);
};

export default fetchDataApi;
