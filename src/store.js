import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      userImgurl:'',
      username:'',
    },
    mutations: {
      getUserInfo (state,userInfo) {
        state.userImgurl = userInfo.userImgurl;
        state.username = userInfo.username;
      }
    }
  })