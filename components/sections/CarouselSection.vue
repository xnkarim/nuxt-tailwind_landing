<template>
  <section class="mt-[4.5rem]">
    <div class="container max-w-[806px]">
      <h2 class="text-[2.625rem] leading-[3rem]">Выгодные предложения</h2>
      <div class="mt-[76px]">
        <Swiper />
      </div>
    </div>
  </section>
</template>
<script>
import BestOfferAdd from "@/components/BestOfferAdd.vue";
import BestOfferCard from "@/components/BestOfferCard.vue";
import Swiper from "@/components/Swiper.vue";

export default {
  name: "CarouselSection",
  components: {
    BestOfferAdd,
    BestOfferCard,
    Swiper,
  },
};
</script>