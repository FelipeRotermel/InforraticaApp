import axios from 'axios';
import { userState } from '../recoil/atoms/auth';
import { getRecoil } from 'recoil-nexus';

const { MY_IP } = process.env;

const api = axios.create({
  // baseURL: `http://191.52.55.47:19003/`, 
  baseURL: "http://inforratica-django.1.us-1.fl0.io",
  headers: {
    'Content-Type': 'application/json',
  },
  //baseURL: "https://silver-spoon-vj57479jgvp2x59q-8000.app.github.dev/" //GithubCodespace
  // gitcopilot, 
});

api.interceptors.request.use((req) => {
  const currentUserState = getRecoil(userState);
  if (currentUserState.access != null) {
    req.headers.authorization = `Bearer ${currentUserState.access}`;
  }
  return req;
});

export default api;