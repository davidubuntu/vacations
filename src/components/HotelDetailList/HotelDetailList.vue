<template>
  <div>
    <Collapse v-for="exclusive in exclusives" :key="exclusive.id" :selected="false">
      <div slot="collapse-header" class="title-panel">
        <span class="title">{{ exclusive.name }}</span>
        <span class="subtitle">Opcional</span>
        <span class="label-hotel">EXCLUSIVO HOTELES.COM</span>
      </div>
      <div slot="collapse-body">
        <HotelCardDetail
          v-for="card in exclusive.options"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :image="card.image"
          :conditions="card.conditions"
        />
      </div>
    </Collapse>
  </div>
</template>

<script>
import Collapse from "../Collapse/Collapse";
import HotelCardDetail from "../HotelCardDetail/HotelCardDetail";
export default {
  name: "HotelDetailList", //this is the name of the component,
  components: { Collapse, HotelCardDetail },
  props: {
    exclusives: {
      type: Array,
      required: true
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.title {
  color: #59aeef;
  font-size: 30px;
  margin: 0px;
  font-weight: bold;
}
.subtitle {
  color: #2e6faf;
  font-size: 14px;
  margin: 0px 30px !important;
}
.label-hotel {
  background: #e82e34;
  color: white;
  height: 25px;
  font-size: 14px;
  font-family: "Roboto-Regular";
  letter-spacing: 1.52px;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 0px 20px;
  font-weight: 300;
}
</style>
