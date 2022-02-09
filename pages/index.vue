<template>
  <div>
    <CreditSection />
    <BanksOffersSection />
    <CarouselSection />
    <NewsSection />
  </div>
</template>

<script>
import CreditSection from "@/components/sections/CreditSection.vue";
import BanksOffersSection from "@/components/sections/BanksOffersSection.vue";
import NewsSection from "@/components/sections/NewsSection.vue";
import CarouselSection from "@/components/sections/CarouselSection.vue";

export default {
  name: "IndexPage",
  components: {
    CreditSection,
    BanksOffersSection,
    CarouselSection,
    NewsSection,
  },
};
</script>
