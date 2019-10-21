<template>
  <div :class="{ selected: checkSelected() }" class="service-box">
    <div>
      <h1 class="name">{{ name }}</h1>
      <hr class="line" />
      <ul class="list-details">
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>
    </div>
    <div class="select-box" :class="{ selected: checkSelected() }" @click="handleInput">
      <input
        :id="id"
        name="radio-button"
        type="radio"
        :v-model="isSelected"
        v-on:change="selectService"
      />
      <span class="reg">Elegir Régimen</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelService", //this is the name of the component,
  data() {
    return {
      isSelected: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    details: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    oneSelected: {
      type: String,
      required: true
    }
  },
  methods: {
    selectService() {
      this.isSelected = !this.isSelected;
      this.$emit("onSelectService", this.id);
    },
    handleInput() {
      document.querySelector(`#${this.id}`).click();
    },
    checkSelected() {
      if (this.oneSelected === this.id && this.isSelected) {
        return true;
      } else {
        this.isSelected = false;
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.service-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c9e3f9;
  background: white;
  margin: 10px;
  padding: 20px 10px;
  max-width: 300px;

  /* height: 580px; */
  input[type="radio"]:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -1px;
    left: -1px;
    position: relative;
    background-color: #6dc138;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
}
.name {
  color: #105aa3;
  font-weight: bold;
}
.list-details {
  color: #001841;
  text-align: left;
  list-style: none;
  font-family: "Roboto-Regular";
  li::before {
    content: "\2022";
    color: #9da2a9;
    font-weight: 100;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  li {
    margin: 10px 20px;
  }
}
.select-box {
  background: #f9f9fb;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #033970;
}
.selected {
  border: 1px solid #326c96;
}
.reg {
  font-family: "Roboto-Regular";
  margin: 0px 35px;
  font-size: 16px;
}
.line {
  border: 1px solid #e5f2fd;
  margin: 20px auto;
  width: 50%;
}
</style>
