import api from '../plugins/api';

export default class LoginApi {
  async login(email, password) {
    console.log('login2');
    try {
      const { data } = await api.post('/token/', {
        email,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
