import {
  createStore
} from 'vuex'

import axios from "axios";

export default createStore({
  state: {
    areas: [],
    coaches: [],
    temp: [],
    tokenId: localStorage.getItem('checkLogin'),
    linkTo: '/coaches',
    status: ''
  },
  getters: {
    setTokenId: (state) => {
      return state.tokenId;
    },
    setLinkTo: (state) => {
      if (state.tokenId != null && state.tokenId != '') {
        state.linkTo = '/register'
      } else {
        state.linkTo = '/auth'
      }
      return state.linkTo;
    }
  },
  mutations: {
    setDefaultData(state, coaches) {
      state.coaches = coaches;
    },
    setTempData(state, temp) {
      state.temp = temp;
    },
    getResultPost(state, status) {
      state.status = status;
    }
  },
  actions: {
    getDefaultData(state) {
      axios
        .get("https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches.json")
        .then((res) => {
          state.commit('setDefaultData', res.data)
          state.commit('setTempData', Object.values(res.data))
        }).catch(err => console.log(err));
    },
    getDatafilter(store, listFilter) {
      let temp = Object.values(store.state.temp).filter((item) => {
        let check;
        listFilter.listFilter.forEach(elm => {
          if (item.areas.indexOf(elm) != -1) {
            check = true
          }
        })
        return check;
      })
      store.state.coaches = temp;
    },
    handlePostData(state, payLoad) {
      // console.log(state,payload.url);
      axios.post(payLoad.url, payLoad.data).then((res) => {
        console.log('POST CORRECTED');
        state.commit('getResultPost', res.data);
      }).catch(err => {
        console.log('POST FAILSE');
        state.commit('getResultPost', err.message)
      })
    }
  },

})