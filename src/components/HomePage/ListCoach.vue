<template>
  <section>
    <item-card>
      <div class="controls">
        <item-button @click="handleRefresh()" class="outline"> Refresh </item-button>
        <item-link v-if="getCheckCoach == -1" :linkTo="getLinkTo">
          {{ (textLink = getTokenId ? "" : "Login to" || "") }}
          Register as Coach
        </item-link>
      </div>
      <item-lazy-load v-if="getData == ''"></item-lazy-load>
      <ul v-else>
        <item-coach
          v-for="item in Object.entries(getData)"
          :key="item[0]"
          :itemList="item"
        >
        </item-coach>
      </ul>
    </item-card>
  </section>
</template>

<script>
import ItemButton from "../common/ItemButton.vue";
import ItemCard from "../common/ItemCard.vue";
import ItemLazyLoad from "../common/itemLazyLoad.vue";
import ItemLink from "../common/ItemLink.vue";
import ItemCoach from "./ItemCoach.vue";
export default {
  components: { ItemCoach, ItemButton, ItemLink, ItemCard, ItemLazyLoad },
  data() {
    return {
      textLink: "",
    };
  },
  computed: {
    getData() {
      if (this.$store.state.coaches != null) {
        return this.$store.state.coaches;
      } else {
        return "";
      }
    },
    getTokenId() {
      if (this.$store.getters.setTokenId != null) {
        return this.$store.getters.setTokenId;
      } else {
        return "";
      }
    },
    getLinkTo() {
      if (this.$store.getters.setLinkTo != null) {
        return this.$store.getters.setLinkTo;
      } else {
        return "/coaches";
      }
    },
    getResultPost() {
      if (this.$store.state.status) {
        return this.$store.state.status;
      } else {
        return "";
      }
    },
    getCheckCoach() {
      let arr = this.$store.state.temp;
      let userId = this.getTokenId;
      let index = -1;
      if (userId != null && arr != null) {
        index = Object.keys(arr).findIndex((item) => item == userId.localId);
      }
      return index;
    },
  },
  mounted() {
    this.$store.dispatch("getDefaultData");
  },
  methods: {
    handleRefresh() {
      window.location.reload();
    },
  },
  watch: {
    getResultPost: function () {
      this.$store.dispatch("getDefaultData");
    },
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
