<template>
  <div class="app">
    <navbar></navbar>
  </div>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
html {
  font-family: Roboto, sans-serif;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}


h3,
h4 {
  margin: 0.5rem 0;
}
.open-enter-active {
  transition: 1s;
}
.open-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.open-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
