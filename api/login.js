import axios from 'axios';

export default class LoginApi {
  async login(username, password) {
    try {
      const { data } = await axios.post('http://191.52.55.47:19004/auth', {
        username,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
