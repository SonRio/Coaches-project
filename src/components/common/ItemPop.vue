<template>
  <div class="pop" :class="{ close: true }">
    <transition name="popup" appear>
      <dialog open>
        <header>
          <h2>{{ titlePopup }}</h2>
        </header>
        <section>
          <p>{{ contentPopup }}</p>
        </section>
        <div class="menu">
          <item-button @click.prevent="togglePopup()">Close</item-button>
        </div>
      </dialog>
    </transition>
    {{checkLogin}}
  </div>
</template>

<script>
import ItemButton from "./ItemButton.vue";
export default {
  components: { ItemButton },
  data() {
    return {
      openPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.openPopup = true;
    },
  },
  computed: {
    checkLogin() {
      console.log(this.$store.state.checkLogin);
      return this.$store.state.checkLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  transform: scale(1);
}
.popup-enter-active,
.popup-leave-active {
  transition: 0.4s;
}
.close {
  display: none;
}
.pop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  dialog {
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: #fff;
    header {
      background-color: #3a0061;
      color: #fff;
      width: 100%;
      padding: 1rem;
      h2 {
        color: #fff;
        margin: 0;
      }
    }
    section {
      padding: 1rem;
    }
    .menu {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
      margin: 0;
    }
  }
}
</style>
