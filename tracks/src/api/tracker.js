import axios from 'axios';

export default axios.create({
  // every 8 hours the base URL from ngrok will change so
  // restart ngrok anytime you go over 8 hours meaning
  // restart ngrok every single time you sit down to work on the app
  baseURL: 'http://0610ffa9.ngrok.io/api/v1',
});