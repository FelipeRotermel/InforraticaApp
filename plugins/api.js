import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://191.52.55.243:19003/`,
  // baseURL: "https://inforratica-django.1.us-1.fl0.io/",
  //baseURL: "https://silver-spoon-vj57479jgvp2x59q-8000.app.github.dev/" //GithubCodespace
});

export default api;