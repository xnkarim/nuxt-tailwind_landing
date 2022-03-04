<template>
  <div>
    <label class="flex flex-col">
      <span class="text-sm text-black-main/50">{{ label }}</span>
      <input
        class="
          bg-transparent
          outline-none
          py-1.5
          border-b-2
          focus:border-black-main/[.32]
        "
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>