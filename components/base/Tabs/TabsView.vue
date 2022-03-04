<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.changeTab();
  },
  watch:{
    activeTab(){
      this.changeTab();
    }
  },
  methods: {
    changeTab() {
      this.$children.forEach((tab, i) => {
        tab.isActive = this.activeTab === i;
      });
    },
  },
};
</script>