<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="offer in bestOffers" :key="offer.id">
      <BestOfferAdd v-if="offer.type === 'add'" :image="offer.image" />
      <BestOfferCard v-else :key="offer.id" :offer="offer" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-responsive-breakpoints",
  title: "Responsive breakpoints",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          720: {
            slidesPerView: 4,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          240: {
            slidesPerView: 1,
          },
        },
      },
      bestOffers: [
        {
          id: 1,
          image: "tinkoff.png",
          bankName: "Тинькофф Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит под залог недвижимости в Тинькофф",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 2,
          image: "AB.png",
          bankName: "Альфа-Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредитная карта 100 дней без процентов",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 3,
          image: "tinkoff.png",
          bankName: "Тинькофф Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит под залог недвижимости в Тинькофф",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 111,
          type: "add",
          image: "cards.png",
        },
        {
          id: 4,
          image: "hcb.png",
          bankName: "Хоум Кредит Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит наличными Хоум Кредит Банк",
          loanRate: "5,9%",
          approvalTime: 1,
          registrationTypes: ["курьером", "онлайн", "в офисе"],
          location: "",
          action: "??",
        },
        {
          id: 5,
          image: "AB.png",
          bankName: "Альфа-Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредитная карта 100 дней без процентов",
          loanRate: "от 5,5%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "ул.Ленина 24",
          action: "???",
        },
        {
          id: 1,
          image: "tinkoff.png",
          bankName: "Тинькофф Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит под залог недвижимости в Тинькофф",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 2,
          image: "AB.png",
          bankName: "Альфа-Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредитная карта 100 дней без процентов",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 3,
          image: "tinkoff.png",
          bankName: "Тинькофф Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит под залог недвижимости в Тинькофф",
          loanRate: "до 10%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "",
          action: "???",
        },
        {
          id: 111,
          type: "add",
          image: "cards.png",
        },
        {
          id: 4,
          image: "hcb.png",
          bankName: "Хоум Кредит Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредит наличными Хоум Кредит Банк",
          loanRate: "5,9%",
          approvalTime: 1,
          registrationTypes: ["курьером", "онлайн", "в офисе"],
          location: "",
          action: "??",
        },
        {
          id: 5,
          image: "AB.png",
          bankName: "Альфа-Банк",
          rating: 4,
          marksCount: 24,
          offer: "Кредитная карта 100 дней без процентов",
          loanRate: "от 5,5%",
          approvalTime: 140,
          registrationTypes: ["курьером", "онлайн"],
          location: "ул.Ленина 24",
          action: "???",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-container {
  padding-top: 20px;
}
.swiper-pagination {
  position: static;
  display: inline-block;
  margin-top: 36px;
  width: unset;
}
.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  border: 1px solid rgb(137, 189, 248);
  background: rgb(228, 241, 255);
}
.swiper-slide {
  height: unset;
}
</style>