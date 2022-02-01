import axios from 'axios';

export default axios.create({
  baseURL:`https://www.artmutualrural.org.ar:8182/api/`
  //baseURL: `http://www.binarianet.com:8181/api/`,
  //baseURL:`https://www.artmutualrural.org.ar:8181/api/`//`https://localhost:44332/api`//`http://192.168.0.156:8181/api/`//`http://www.binarianet.com:8181/api/`//
});

