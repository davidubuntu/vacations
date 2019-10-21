<template>
  <div class="container">
    <h1 class="title">Cocktail Vacations</h1>
    <h6>Developed by David Diez</h6>
  </div>
</template>

<script>
export default {
  name: "Home" //this is the name of the component
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
}
.title {
  font-size: 50px;
  font-family: "Roboto-Slab-Regular";
}
</style>
