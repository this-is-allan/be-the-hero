import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketseat-be-the-hero.herokuapp.com/',
});

export default api;