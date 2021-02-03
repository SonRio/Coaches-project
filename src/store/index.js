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
    request: [],
    checkLogin: true,
    loading : true
  },
  getters: {
    getTokenId: (state) => {
      return state.tokenId;
    },
    getLinkTo: (state) => {
      if (state.tokenId != null && state.tokenId != '') {
        state.linkTo = '/register'
      } else {
        state.linkTo = {
          path: '/auth',
          query: {
            redirect: 'register'
          }
        }
      }
      return state.linkTo;
    },
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
    setResultPost(state, status) {
      state.status = status;
    },
    setCheckLogin(state, checkLogin) {
      state.checkLogin = checkLogin;
    },
    setTokenId(state, tokenId) {
      state.tokenId = tokenId;
    },
    setLoading(state,loading) {
      return state.loading = loading;
    }
  },
  actions: {
    // GET DATA COACHES DEFAUT FROM API
    getDefaultData(state) {
      axios
        .get("https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches.json")
        .then((res) => {
          state.commit('setDefaultData', res.data);
          state.commit('setTempData', res.data)
        }).catch(err => console.log(err));
    },
    // GET DATA REQUEST FOR MEM FROM API
    getDataRequest(state) {
      let userId = state.state.tokenId.localId
      axios
        .get(`https://coaches-project-8d77f-default-rtdb.firebaseio.com/request/${userId}.json`)
        .then((res) => {
          state.commit('setDataRequest', res.data)
        }).catch(err => console.log(err));
    },
    // GET DATA TEMP TO SS WITH FILTER
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
    // HANDLE REGISTER COACH
    handlePostDataCoach(state, payLoad) {
      axios.put(payLoad.url, payLoad.data).then((res) => {
        console.log('POST CORRECTED');
        state.commit('setResultPost', res.data);
      }).catch(err => {
        console.log('POST FAILSE');
        state.commit('setResultPost', err.message)
      })
    },
    // HANDLE POST REQUEST FROM USER
    handlePostDataRequest(state, payLoad) {
      axios.post(payLoad.url, payLoad.data).then((res) => {
        console.log('POST REQUESTS CORRECTED');
        console.log(res);
      }).catch(err => {
        console.log('POST REQUESTS FAILSE');
        console.log(err);
      })
    },
    // HANDLE SIGN FOR USER
    handleSignUp(state, payLoad) {
      axios.post(payLoad.url, payLoad.data).then(res => {
        console.log('SignUp CORRECTED');
        localStorage.setItem("userId", JSON.stringify(res.data));
      }).catch(err => console.log(err))
    },
    // HANDLE LOGIN FOR MEM
    handleLogin(state, payLoad) {
      axios.post(payLoad.url, payLoad.data).then(res => {
        console.log("LOGIN CORRECTED");
        let checkLogin = {
          idToken: res.data.idToken,
          localId: res.data.localId,
          email: res.data.email,
        };
        localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
        state.commit('setTokenId', checkLogin);
        state.commit('setCheckLogin', true);
        if (payLoad.route.query.redirect) {
          payLoad.router.push({
            path: "/register"
          });
        } else {
          payLoad.router.push({
            path: "/coaches"
          });
        }
      }).catch(err => {
        state.commit('setCheckLogin', false);
        console.log(err);
      })
    },
  },

})