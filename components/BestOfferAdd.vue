<template>
  <div class="shrink-0 first:ml-0">
    <img :src="require('~/static/images/' + image)" alt="" />
  </div>
</template>
<script>
export default {
  name: "BestOfferAdd",
  props: ["image"],
};
</script>