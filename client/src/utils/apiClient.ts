import aspida from '@aspida/axios';
import axios from 'axios';
import api from '../api/$api';

export const apiClient = api(aspida(axios.create({ baseURL: 'https://api.your-horse-racing-service.com/', withCredentials: true })));
