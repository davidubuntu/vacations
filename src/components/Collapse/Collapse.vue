<template>
  <div class="collapse collapse-item" :class="{ 'is-active': active, little: isLittle }">
    <div
      class="collapse-header touchable"
      :class="{ little: isLittle }"
      role="tab"
      :aria-expanded="active ? 'true' : 'false'"
      @click.prevent="toggle"
    >
      <slot name="collapse-header"></slot>
    </div>
    <transition name="fade">
      <div class="collapse-content" v-if="active">
        <div class="collapse-content-box">
          <slot name="collapse-body"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      active: false
    };
  },
  props: {
    selected: {
      type: Boolean,
      required: true,
      default: false
    },
    isLittle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  created() {
    this._isCollapseItem = true;
    this.active = this.selected;
  },
  ready() {
    if (this.active) {
      this.$emit("collapse-open", this.index);
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      if (this.active) {
        this.$emit("collapse-open", this.index);
      }
    }
  }
};
</script>
<style lang="scss">
.collapse {
  margin-bottom: 30px;
  background: #ffffff;
  border: 1px solid #dee1e8;
}
.collapse .collapse-header {
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 40px;
  background: #ffffff;
  border-radius: 3px;
  position: relative;
}
.little {
  border: none;
  padding: 0px !important;
  margin-bottom: 0px;

  .collapse-header::before {
    left: 100% !important;
    margin-left: 10px !important;
    top: 0px !important;
  }

  .collapse-header {
    width: 230px !important;
  }
  .collapse-content-box {
    top: 30px;
    position: relative;
    left: -20px;
    margin: 30px 40px;
    margin: 29px 0px 30px -160px;
    border-bottom: 0px !important;
    padding: 0px !important;
  }
}

.collapse .collapse-header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.collapse .collapse-header h3 {
  font-size: 0.938em;
  font-weight: bold;
}
.collapse .collapse-header::before {
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  content: url("../../assets/icons/arrow-down.png");
  position: absolute;
  font-size: 0.4em;
  top: calc(50% - 0.4em);
  left: 20px;
  color: #c5c9d0;
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.collapse.is-active .collapse-header::before {
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.collapse .collapse-content-box {
  background: white;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  padding: 0px 40px;
  /* border-bottom: 15px solid #fafafa; */
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
