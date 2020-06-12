import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      isLogin: false,
      userImgurl:'',
      username:'',
      videoList: []
    },
    mutations: {
      getUserInfo (state,userInfo) {
        state.userImgurl = userInfo.userImgurl;
        state.username = userInfo.username;
      },
      getvideoList(state, videoList){
        state.videoList = videoList
      }
    },
    plugins: [createPersistedState()]
  })