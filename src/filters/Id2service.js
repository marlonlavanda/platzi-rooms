/* eslint-disable */
import store from '../store.js';

const id2service = {};
const { services } = store.state;

id2service.install = function id2s(Vue) {
  Vue.filter('id-to-service', (value) => {
    if(services[val]){
      return services[val].name;
    }
    return val;
  })
}

export default id2service;