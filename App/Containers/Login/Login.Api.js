import apisauce from 'apisauce'

const create = (baseURL = 'http://link/api/') => {

  //Example rest
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  const login = (email, password) => api.post('/auth/signIn', { email: email, password: password, device_platform: 'android' });

  return {
    login
  }
};

export default {
  create
}
