// import axios from 'axios';

<<<<<<< HEAD
// export default class LoginApi {
//   async login(username, password) {
//     try {
//       const { data } = await axios.post('http://191.52.55.47:19004/auth', {
//         username,
//         password,
//       });
//       return Promise.resolve(data);
//     } catch (error) {
//       return Promise.error(error);
//     }
//   }
// }
=======
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
>>>>>>> 57f27751e9a547bdd3ade80b0d925e2783d94d97
