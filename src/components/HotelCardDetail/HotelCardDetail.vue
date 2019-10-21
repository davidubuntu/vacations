<template>
  <div>
    <div class="container">
      <img class="image" :src="image" />
      <div class="details-section">
        <div class="title-details-section">
          <h1 class="title">{{ title }}</h1>
          <p class="description">{{ description }}</p>
        </div>
        <Collapse :selected="false" :isLittle="true">
          <div slot="collapse-header" class="title-panel">
            <span class="title-conditions">Mas Información y condiciones</span>
          </div>
          <div slot="collapse-body">
            <h5 class="inlcude">Incluye</h5>
            <div class="list-container">
              <ul class="list" v-for="(condition, index) in conditions" :key="index">
                <li class="conditions">{{ condition }}</li>
              </ul>
            </div>
            <h5 class="info-text">Valores no acumulables a otras promociones similares</h5>
          </div>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from "../Collapse/Collapse";
export default {
  name: "HotelCardDetail",
  data() {
    return {};
  },
  components: { Collapse },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    conditions: {
      type: Array,
      required: true
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  background: #ffffff;
  border: 1px solid #dee1e8;
  margin: 20px 0px;
}

.image {
  max-width: 350px;
  max-height: 250px;
  object-fit: cover;
}
.title {
  color: #104376;
  font-size: 20px;

  font-family: "Roboto-Slab-Bold";
}
.description {
  color: #898b8e;
  font-size: 15px;
  font-family: "Roboto-Regular";
  margin: 10px 0px;
}
.details-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  text-align: left;
  margin: 20px 25px;
}
.title-details-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 185px;
}
.title-conditions {
  color: #61b3f2;
  font-size: 16px;
  font-family: "Roboto-Bold";
}
.title {
  color: #0a3e74;
  font-size: 24px;
}
.list {
  list-style: inherit;
}
.list-container {
  display: flex;
}
.conditions {
  color: #898b8e;
  font-size: 15px;
  font-family: "Roboto-Regular";
  margin: 0px 2rem;
}
.inlcude {
  color: #898b8e;
  font-size: 16px;
  font-weight: 700;
}
.info-text {
  margin-top: 10px;
  color: #255382;
  font-size: 14px;
  font-weight: 700;
}
</style>
