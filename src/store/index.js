import {
  createStore
} from 'vuex'

import axios from "axios";

export default createStore({
  state: {
    areas: [],
    coaches: [],
    temp: [],
    tokenId: JSON.parse(localStorage.getItem('checkLogin')),
    linkTo: '/coaches',
    status: '',
    checkCoach: '',
    request : []
  },
  getters: {
    setTokenId: (state) => {
      return state.tokenId;
    },
    setLinkTo: (state) => {
      if (state.tokenId != null && state.tokenId != '') {
        state.linkTo = '/register'
      } else {
        state.linkTo = { path : '/auth',query : { redirect : 'register'}}
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
    setDataRequest(state, request) {
      state.request = request;
    },
    getResultPost(state, status) {
      console.log(status);
      state.status = status;
    },
    setCheckCoach(state, check) {
      state.checkCoach = check;
    }
  },
  actions: {
    getDefaultData(state) {
      axios
        .get("https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches.json")
        .then((res) => {
          state.commit('setDefaultData', res.data);
          state.commit('setCheckCoach', Object.keys(res.data));
          state.commit('setTempData', res.data)
        }).catch(err => console.log(err));
    },
    getDataRequest(state){
      let userId = state.state.tokenId.localId
      axios
        .get(`https://coaches-project-8d77f-default-rtdb.firebaseio.com/request/${userId}.json`)
        .then((res) => {
          state.commit('setDataRequest', res.data)
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
    handlePostDataCoach(state, payLoad) {
      axios.put(payLoad.url, payLoad.data).then((res) => {
        console.log('POST CORRECTED');
        state.commit('getResultPost', res.data);
      }).catch(err => {
        console.log('POST FAILSE');
        state.commit('getResultPost', err.message)
      })
    },
    handlePostDataRequest(state, payLoad) {
      // console.log(state,payload.url);
      axios.post(payLoad.url, payLoad.data).then((res) => {
        console.log('POST REQUESTS CORRECTED');
        console.log(res);
      }).catch(err => {
        console.log('POST REQUESTS FAILSE');
        console.log(err);
      })
    }
  },

})