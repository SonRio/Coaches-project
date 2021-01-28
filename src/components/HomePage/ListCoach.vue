<template>
  <section>
    <item-card>
      <div class="controls">
        <item-button @click="handleRefresh()" class="outline"> Refresh </item-button>
        <item-link :linkTo="getLinkTo">
          {{ (textLink = getTokenId ? "" : "Login to" || "") }}
          Register as Coach
        </item-link>
      </div>
      <ul v-if="getData != ''">
        <item-coach
          v-for="item in Object.entries(getData)"
          :key="item[0]"
          :itemList="item"
        >
        </item-coach>
      </ul>
      <h2 v-else>Loading...</h2>
    </item-card>
  </section>
</template>

<script>
import ItemButton from "../common/ItemButton.vue";
import ItemCard from "../common/ItemCard.vue";
import ItemLink from "../common/ItemLink.vue";
import ItemCoach from "./ItemCoach.vue";
export default {
  components: { ItemCoach, ItemButton, ItemLink, ItemCard },
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
        return "Login to";
      }
    },
    getLinkTo() {
      if (this.$store.getters.setLinkTo != null) {
        return this.$store.getters.setLinkTo;
      } else {
        return "/coaches";
      }
    },
  },
  watch: {
    getData: function () {
      return this.$store.dispatch("getDefaultData");
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
