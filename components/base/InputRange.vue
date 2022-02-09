<template>
  <div class="relative flex flex-col mt-6">
    <label for="sum-range" class="text-sm text-black-main/50">{{
      label
    }}</label>
    <span class="leading-main mt-1.5 mb-3">{{ value + " " + suffix }}</span>
    <slot name="icon"></slot>
    <input
      id="sum-range"
      type="range"
      class="h-0.5 bg-black-main/[.32]"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "InputRange",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    suffix: {
      type: String,
      default: "",
    },
  },
};
</script>