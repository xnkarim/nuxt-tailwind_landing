<template>
  <div class="absolute">
    <div class="relative rounded-2xl overflow-hidden">
      <div class="absolute flex flex-col w-full h-full p-5 xs:p-8">
        <h4
          class="text-2xl xs:text-4xl font-bold text-white"
          v-html="title"
        ></h4>
        <p
          class="text-base xs:text-lg text-white mt-2"
          v-html="description"
        ></p>
        <a href="#" class="flex text-lg text-white mt-auto">
          <span class="mr-2">Подробнее</span>
          <Icon :size="21" iconName="arrowRight" color="#fff"/>
        </a>
      </div>
      <img :src="image" alt="" />
    </div>
  </div>
</template>
<script>
import Icon from "@/components/base/Icon/Icon.vue";

export default {
  name: "OfferCard",
  components:{
    Icon
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>