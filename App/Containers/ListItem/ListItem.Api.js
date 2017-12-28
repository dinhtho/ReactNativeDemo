import apisauce from 'apisauce'

const create = (baseURL = 'http://axcro.api.web.beesightsoft.com/api/') => {

  //Example rest
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  const getList = (username, password) => api.get('categories/categories/all/');

  return {
    getList
  }
};

export default {
  create
}
