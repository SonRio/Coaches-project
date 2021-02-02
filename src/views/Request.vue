<template>
  <section>
    <item-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <list-request></list-request>
    </item-card>
  </section>
</template>

<script>
import ItemCard from "../components/common/ItemCard.vue";
import ListRequest from '../components/Request/ListRequest.vue';
export default {
  components: { ItemCard, ListRequest },
};
</script>

<style scoped>
header {
  text-align: center;
}

</style>
