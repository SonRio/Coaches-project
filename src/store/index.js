import {
  createStore
} from 'vuex'

import axios from "axios";

export default createStore({
  state: {
    areas: [],
    coaches: [],
    temp: []
  },
  mutations: {
    setDefaultData(state, coaches) {
      state.coaches = coaches;
    },
    setTempData(state, temp) {
      state.temp = temp;
    }
  },
  actions: {
    getDefaultData(state) {
      axios
        .get("https://vue-demo-1c5df-default-rtdb.firebaseio.com/coaches.json")
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
  },
})