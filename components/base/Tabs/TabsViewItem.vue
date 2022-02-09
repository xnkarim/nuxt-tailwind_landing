<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
