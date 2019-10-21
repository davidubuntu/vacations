<template>
  <div id="app">
    <router-view />
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
export default {
  name: "app",
  components: {
    Header: Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
