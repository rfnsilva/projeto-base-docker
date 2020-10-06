import axios from 'axios';

export default axios.create({
  baseURL: 'http://172.29.0.3:3333',
  headers:{ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
});
