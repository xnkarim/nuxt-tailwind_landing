<template>
  <section class="mt-[135px]">
    <div class="container max-w-[806px]">
      <h2 class="font-stolzl text-4xl">Найдено: 3 предложения</h2>
      <div
        class="
          flex
          items-center
          mt-8
          flex-col
          xs:flex-row
          sm:flex-col
          md:flex-row
        "
      >
        <div
          class="flex flex-col sm:flex-row bg-black-main/[.05] p-0.5 rounded-md"
        >
          <Button
            class="
              bg-[#E4F1FF]
              border border-[#89BDF8]
              px-2.5
              py-2
              rounded-md
              text-blue-main text-sm
              leading-main
            "
          >
            Низкие ставки
          </Button>
          <Button
            class="px-2.5 py-2 rounded-md text-blue-main text-sm leading-main"
          >
            Упрощенные условия
          </Button>
          <Button
            class="px-2.5 py-2 rounded-md text-blue-main text-sm leading-main"
          >
            Региональные предложения
          </Button>
        </div>
        <Button
          class="
            px-6
            py-3
            text-base-none
            rounded-lg
            border border-black-main
            mt-4
            xs:mt-0 xs:ml-auto
            sm:ml-0 sm:mt-3
            md:mt-0 md:ml-auto
          "
        >
          Выбрать несколько
        </Button>
      </div>
      <div>
        <div
          class="
            grid
            items-center
            grid-cols-[60px_1fr]
            grid-rows-2
            xs:grid-cols-[80px_1fr]
            md:grid-cols-[96px_282px_1fr]
            mt-8
            p-4
            pr-6
          "
        >
          <span
            class="
              text-sm text-gray-main
              col-start-1
              xs:col-start-2 xs:ml-6
              basis-[258px]
            "
            >Предложения</span
          >
          <div
            class="
              flex
              items-center
              col-start-1
              row-start-2
              xs:ml-6
              md:ml-4
              xs:col-start-2
              col-end-3
              md:col-start-3 md:row-start-1
            "
          >
            <span class="text-sm text-gray-main basis-24">Ставка</span>
            <span class="text-sm text-gray-main ml-9 basis-20"
              >Время одобрения</span
            >
            <span class="text-sm text-gray-main ml-9 basis-[71px]"
              >Способы оформления</span
            >
          </div>
        </div>
        <ul>
          <template v-for="offer in banksOffers">
            <BankOfferAdd
              v-if="offer.type === 'add'"
              :key="offer.id"
              :image="offer.image"
            />
            <BankOfferCard v-else :key="offer.id" :offer="offer" />
          </template>
        </ul>
        <Button
          class="
            flex
            items-center
            rounded-lg
            bg-gray-main
            px-6
            py-3
            text-white text-base-none
            mt-8
            mx-auto
          "
        >
          <span>Показать еще</span>
          <Icon
            iconName="loader"
            :width="15"
            :height="14"
            color="#fff"
            class="ml-2.5"
          />
        </Button>
      </div>
    </div>
  </section>
</template>
<script>
import BankOfferCard from "@/components/BankOfferCard.vue";
import BankOfferAdd from "@/components/BankOfferAdd.vue";
import Icon from "@/components/base/Icon/Icon.vue";

export default {
  name: "BanksOffersSection",
  components: {
    BankOfferCard,
    BankOfferAdd,
    Icon,
  },
  data: () => ({
    banksOffers: [
      {
        id: 1,
        image: "tinkoff.png",
        bankName: "Тинькофф Банк",
        rating: 4,
        marksCount: 24,
        offer: "Кредит под залог недвижимости в Тинькофф",
        loanRate: "от 5,5%",
        approvalTime: 140,
        registrationTypes: ["курьером", "онлайн"],
        location: "",
        action: "???",
      },
      {
        id: 2,
        image: "hcb.png",
        bankName: "Хоум Кредит Банк",
        rating: 4,
        marksCount: 24,
        offer: "Кредит наличными Хоум Кредит Банк",
        loanRate: "5,9%",
        approvalTime: 1,
        registrationTypes: ["курьером", "онлайн", "в офисе"],
        location: "",
        action: "",
      },
      {
        id: 3,
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
        id: 111,
        type: "add",
        image: "ab_ad.png",
      },
      {
        id: 4,
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
        id: 5,
        image: "tinkoff.png",
        bankName: "Тинькофф Банк",
        rating: 4,
        marksCount: 24,
        offer: "Кредит под залог недвижимости в Тинькофф",
        loanRate: "от 5,5%",
        approvalTime: 140,
        registrationTypes: ["курьером", "онлайн"],
        location: "",
        action: "???",
      },
    ],
  }),
};
</script>