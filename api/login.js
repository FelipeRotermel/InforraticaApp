import axios from 'axios';

export default class LoginApi {
  async login(username, password) {
    alert('oioi')
    try {
      const { data } = await axios.post('http://191.52.55.47:19003/auth', {
        username,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
