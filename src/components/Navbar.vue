<template>
  <header>
    <nav class="nav">
      <h1>
        <a href="/coaches" class="header__logo"> Find a Coach </a>
      </h1>
      <ul>
        <li>
          <router-link :active="isActive" to="/coaches"> All Coaches </router-link>
        </li>
        <li v-if="getTokenId != null && getTokenId != '' ">
          <router-link to="/request"> Request </router-link>
        </li>
        <li v-if="getTokenId != null && getTokenId != '' ">
          <item-button @click="handleLogout()">Logout</item-button>
        </li>
        <li v-else>
          <router-link to="/auth"> Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ItemButton from "./common/ItemButton.vue";
export default {
  components: { ItemButton },
  data() {
    return {
      checkLogin: "",
    };
  },
  methods: {
    handleLogout() {
      localStorage.clear();
      this.$store.state.tokenId = '';
      this.$router.push({ path: "/coaches" });
    },
  },
  mounted() {
    // return (this.checkLogin = localStorage.getItem("checkLogin"));
  },
  computed: {
    getTokenId() {
      return this.$store.getters.setTokenId;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a.header__logo {
  color: #fff;
  margin: 0;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav li {
  margin: 0 0.5rem;
}
.nav a.router-link-active,
.nav a.router-link-active:active,
.nav a:hover:not(.header__logo) {
  border: 1px solid #f391e3;
}
</style>
