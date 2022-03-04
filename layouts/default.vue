<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/shared/AppHeader.vue";
import AppFooter from "@/components/shared/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>