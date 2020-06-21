import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:3000';
// axios.interceptors.request.use(
//   config => {
//     const token = sessionStorage.getItem('token')
//     if (token ) { 
//       config.headers.authorization = token;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });
// axios.interceptors.response.use(
//   response => {
//     if(response.state ==200){
//       response = response.data;
//     }
//     return response;
//   }
// )
Vue.use(ElementUI);

Vue.use(VideoPlayer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
