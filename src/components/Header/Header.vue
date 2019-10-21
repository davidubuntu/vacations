<template>
  <nav class="header-container">
    <h1 class="title">Cocktail Vacations</h1>
    <div>
      <router-link
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        >{{ routes.text }}</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home ",
          page: "/"
        },
        {
          id: 1,
          text: "Vacation ",
          page: "/vacation"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.spacing {
  margin-right: 10px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  height: 40px;
  width: 100vw;
  background: #14487a;
}
a {
  font-size: 18px;
  margin: 0px 10px;
  color: white;
  &:hover {
    color: #53abef;
  }
}
.title {
  color: white;
  font-size: 18px;
  margin: 0px 20px !important;
  font-weight: bold;
}
</style>
