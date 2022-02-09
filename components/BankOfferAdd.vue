<template>
  <li class="cursor-pointer mt-3 first:mt-0">
    <img :src="require('~/static/images/' + image)" alt="" />
  </li>
</template>
<script>
export default {
  name: "BankOfferAdd",
  props: ["image"],
};
</script>