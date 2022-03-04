<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    focusable="false"
    aria-hidden="true"
    role="presentation"
    :viewBox="svgViewBox"
    :width="svgWidth"
    :height="svgHeight"
  >
    <template v-if="Array.isArray(icon)">
      <path v-for="path in icon" :key="path" :fill="color" :d="path"></path>
    </template>
    <template v-else>
      <path :fill="color" :d="icon"></path>
    </template>
  </svg>
</template>
<script>
import icons from "./IconPathes";

export default {
  name: "Icon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      type: Number,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    viewBox: {
      type: String,
      default: null,
    },
  },
  computed: {
    svgViewBox: function () {
      return (
        this.viewBox ||
        `0 0 ${this.width || this.size} ${this.height || this.size}`
      );
    },
    svgWidth: function () {
      return (this.width || this.size) + "px";
    },
    svgHeight: function () {
      return (this.height || this.size) + "px";
    },
    icon: function () {
      return icons[this.iconName];
    },
  },
};
</script>