<template>
  <div class="container">
    <Tabs class="tabs-container">
      <Tab name="Services" :selected="true">
        <HotelList :services="services" />
      </Tab>
      <Tab name="Exclusive">
        <HotelDetailList :exclusives="exclusives" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab";
import HotelList from "../../components/HotelList/HotelList";
import HotelDetailList from "../../components/HotelDetailList/HotelDetailList";
import { services, exclusives } from "../../api/Hotel";

export default {
  name: "Vacation",
  data() {
    return {
      services: { type: Array, required: true },
      exclusives: { type: Array, required: true }
    };
  },
  components: {
    Tabs,
    Tab,
    HotelList,
    HotelDetailList
  },
  created() {
    this.services = services;
    this.exclusives = exclusives;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  height: calc(100vh - 50px);
}
.tabs-container {
  padding-top: 40px;
}
</style>
