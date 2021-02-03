<template>
  <div @click="togglePopup()" v-if="checkLogin == false" class="modal"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      openPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.$store.commit("setCheckLogin", true);
    },
  },
  computed: {
    checkLogin() {
      return this.$store.state.checkLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
</style>
