import axios from 'axios';
import {RNToasty} from 'react-native-toasty';

// Initiate Base URL
const api = axios.create({
  baseURL: 'https://nextar.flip.id',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 1000,
});

// API Request List
export const apiGetTransactionList = (params) =>
  api.get('/frontend-test', {params}).catch((error) => {
    if (!error.status) {
      RNToasty.Error({title: 'Koneksi Error. Mohon cek kembali koneksimu.'});
    }
    return {status: 400};
  });
