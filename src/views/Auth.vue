<template>
  <transition name="open" appear>
    <item-card>
      <item-form-auth></item-form-auth>
    </item-card>
  </transition>
</template>

<script>
import ItemCard from "../components/common/ItemCard.vue";
import ItemFormAuth from "../components/AuthPage/ItemFormAuth.vue";
export default {
  components: { ItemCard, ItemFormAuth },
};
</script>

<style scoped>

</style>
