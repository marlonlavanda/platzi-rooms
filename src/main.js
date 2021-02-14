import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwVxP2GVM_ew3cQkQaKcbvLDXx03ykQhI',
  authDomain: 'platzi-rooms-9303f.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-9303f-default-rtdb.firebaseio.com',
  projectId: 'platzi-rooms-9303f',
  storageBucket: 'platzi-rooms-9303f.appspot.com',
  messagingSenderId: '664746470302',
  appId: '1:664746470302:web:64bd0279231b1f57c2048f',
  measurementId: 'G-Q4RJK5FH95',
};
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('FETCH_USER', { id: store.state.authId });
  },
}).$mount('#app');
