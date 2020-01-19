import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const client = axios.create({
  baseURL: 'https://reqres.in/api',
});

client.interceptors.request.use(
  config => {
    return AsyncStorage.getItem('userData')
      .then(value => {
        if (value) {
          // config.headers.Authorization = `Bearer ${value}`;
        }

        return Promise.resolve(config);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  error => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error response', error.response);
    if (error.response.status === 401) {
      console.log('TOKEN EXPIRED');
    }
    return Promise.reject(error);
  }
);

export default client;

export const endpoints = {
  login: '/login',
  users: '/users',
};
