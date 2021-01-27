<template>
  <section>
    <item-card>
      <div class="controls">
        <item-button class="outline"> Refresh </item-button>
        <item-link v-bind:linkTo="linkToLogin"> Login to Register as Coach </item-link>
      </div>
      <ul>
        <item-coach v-for="item in Object.entries(getData)" :key="item[0]" :itemList="item">
        </item-coach>
      </ul>
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
      linkToLogin: "/auth",
    };
  },
  computed: {
    getData() {
      // console.log(this.$store.state.coaches);
      return this.$store.state.coaches;
    },
  },
  mounted() {
    this.$store.dispatch("getDefaultData");
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
