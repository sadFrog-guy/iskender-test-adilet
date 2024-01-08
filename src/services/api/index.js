import axios from 'axios';

const baseURL = 'https://app.moore22.store' || process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL });

export default api;
