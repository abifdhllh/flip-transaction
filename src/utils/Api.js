import axios from 'axios';

// Initiate Base URL
const api = axios.create({
  baseURL: 'https://nextar.flip.id',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 10000,
});

// API Request List
export const apiGetTransactionList = (params) => api.get('/frontend-test', {params});
