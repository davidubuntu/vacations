<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'is-active': tab.isActive }"
        >
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>
<style scoped lang="scss">
.tabs li.is-active a {
  border-bottom-color: #003970 !important;
  color: #003970 !important;
}
.tabs a {
  color: #53abef;
  font-family: "Roboto-Slab-Regular";
  font-size: 16px;
}
.tabs ul {
  display: flex;
  justify-content: flex-end;
  background: white;
}</style
>;
