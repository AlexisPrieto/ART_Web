import axios from 'axios';

export default axios.create({
  baseURL:`http://artmutualrural.com:8181/api/`//`https://localhost:44332/api`//`http://192.168.0.156:8181/api/`//
});