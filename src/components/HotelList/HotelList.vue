<template>
  <div>
    <div class="title">
      <h4 class="main">HOTEL</h4>
      <h1 class="sub-title">Mieres del camin apartamentos</h1>
      <img
        class="four-stars-img"
        src="../../assets/icons/four-stars.png"
        alt="5 stars icon"
      />
    </div>
    <div class="services-container">
      <HotelService
        v-for="service in services"
        :name="service.name"
        :key="service.id"
        :id="service.id"
        :details="service.details"
        :oneSelected="oneSelected"
        @onSelectService="selectService"
      />
    </div>
  </div>
</template>

<script>
import HotelService from "../HotelService/HotelService";
export default {
  name: "HotelList", //this is the name of the component,
  components: { HotelService },
  data() {
    return {
      oneSelected: ""
    };
  },
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectService(id) {
      this.oneSelected = id;
    }
  }
};
</script>
<style lang="scss">
.services-container {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.title {
  margin: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    color: #003970;
  }
  .sub-title {
    font-size: 30px;
    margin-left: 20px;
    color: #003970;
    font-weight: bold;
  }
  .four-stars-img {
    height: 50px;
    margin: 0px 30px;
  }
}
</style>
