<template>
  <div class="app">
    <router-view />
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
export default {
  name: "App",
  components: {
    Header: Header
  }
};
</script>

<style lang="scss">
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fafafa;
  height: 100vh;
  font-family: "Roboto-Slab-Regular";
}
html {
  background-color: #fafafa;
}
</style>
