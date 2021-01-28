<template>
  <transition appear name="open">
    <div class="home">
      <item-lazy-load></item-lazy-load>
      <Filter @handleGetItemList="handleGetItemList" />
      <router-view></router-view>
      <list-coach :itemFilter="itemFilter" />
    </div>
  </transition>
</template>

<script>
import Filter from "../components/HomePage/Filter.vue";
import ListCoach from "../components/HomePage/ListCoach.vue";
import ItemLazyLoad from '../components/common/itemLazyLoad.vue';

export default {
  name: "Home",
  components: {
    ListCoach,
    Filter,
    ItemLazyLoad
  },
  data() {
    return {
      itemFilter: "",
    };
  },
  methods: {
    handleGetItemList(list) {
      this.itemFilter = list;
    },
    resetPage() {
      window.location.reload();
    },
  },
  mounted() {
    
  },
};
</script>
<style scoped>
</style>
