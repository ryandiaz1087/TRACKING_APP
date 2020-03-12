import axios from 'axios';
import isNil from 'lodash/isNil';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  // every 8 hours the base URL from ngrok will change so
  // restart ngrok anytime you go over 8 hours meaning
  // restart ngrok every single time you sit down to work on the app
  baseURL: 'http://159f47fe.ngrok.io/api/v1',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (!isNil(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;