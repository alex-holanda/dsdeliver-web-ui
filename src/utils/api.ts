import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alex-dsdeliver-api.herokuapp.com'
});

export default api;
