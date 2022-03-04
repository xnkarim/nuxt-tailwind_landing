<template>
  <div class="relative flex flex-col mt-6">
    <label class="text-sm text-black-main/50">
      {{ label }}
    </label>
    <div
      @click="isOpen = !isOpen"
      class="
        flex
        justify-between
        border-b border-black-main/[.32]
        mt-1.5
        pb-[18px]
        cursor-pointer
        select-none
      "
    >
      <p class="leading-main">{{ options[value] }}</p>
      <ArrowDown />
      <ul
        v-show="isOpen"
        class="outline-none absolute top-16 w-full bg-white z-20"
      >
        <li
          v-for="(option, i) in options"
          :key="option"
          @click="$emit('input', i)"
          class="px-2 py-3 cursor-pointer hover:bg-neutral-300"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ArrowDown from "@/components/base/Icon/ArrowDown.vue";

export default {
  name: "Select",
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: null,
    },
  },
  components: {
    ArrowDown,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>