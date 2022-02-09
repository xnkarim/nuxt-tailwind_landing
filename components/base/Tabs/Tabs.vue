<template>
  <div class="self-start bg-black-btn/[.1] p-0.5 rounded-md">
    <Button
      v-for="(tab, i) in tabs"
      :key="tab"
      class="text-black-btn text-base px-2.5 py-2 rounded-md"
      :class="{ 'bg-white': value === i }"
      @click="$emit('input', i)"
    >
      {{ tab }}
    </Button>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>