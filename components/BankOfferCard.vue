<template>
  <li
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    class="
      group
      relative
      bg-white
      rounded-[10px]
      border border-black-secondary/[.12]
      backdrop-blur-[96px]
      p-4
      pr-6
      cursor-pointer
      mt-3
      first:mt-0
    "
  >
    <div
      class="
        grid
        items-center
        self-baseline
        grid-cols-[60px_1fr]
        xs:grid-cols-[80px_1fr]
        md:grid-cols-[96px_282px_1fr]
      "
    >
      <img
        :src="require('~/static/images/' + offer.image)"
        alt=""
        class="self-baseline rounded-lg drop-shadow-lg"
      />
      <div class="ml-4 xs:ml-6">
        <div class="xs:flex xs:items-baseline">
          <h5 class="text-sm text-gray-main mr-2">{{ offer.bankName }}</h5>
          <div class="flex items-baseline">
            <div class="flex items-baseline">
              <Icon
                iconName="star"
                :size="10"
                color="#FFD809"
                class="ml-1 first:ml-0"
              />
              <Icon
                iconName="star"
                :size="10"
                color="#FFD809"
                class="ml-1 first:ml-0"
              />
              <Icon
                iconName="star"
                :size="10"
                color="#FFD809"
                class="ml-1 first:ml-0"
              />
              <Icon
                iconName="star"
                :size="10"
                color="#FFD809"
                class="ml-1 first:ml-0"
              />
              <Icon
                iconName="star"
                :size="10"
                color="#B5B5B5"
                class="ml-1 first:ml-0"
              />
            </div>
            <span class="text-xs text-gray-main ml-1">{{ offer.rating }}</span>
            <span class="text-xs text-gray-main ml-1"
              >({{ offer.marksCount }})</span
            >
          </div>
        </div>
        <h4 class="text-lg mt-1.5">Кредит под залог недвижимости в Тинькофф</h4>
      </div>
      <div
        class="
          flex
          items-center
          mt-3
          ml-0
          xs:mt-0 xs:ml-6
          md:ml-4
          col-start-1
          xs:col-start-2
          col-end-3
          md:col-auto
        "
      >
        <p class="text-2xl leading-7 basis-24">{{ offer.loanRate }}</p>
        <p class="text-base ml-9 basis-20">{{ formattedApprovalTime }}</p>
        <p class="text-base ml-9 basis-[71px]">
          {{ offer.registrationTypes.join(", ") }}
        </p>
      </div>
      <div class="flex items-center absolute right-2 top-2">
        <button
          v-if="offer.action"
          class="
            px-[7px]
            py-2
            border border-black-secondary/[.12]
            rounded-lg
            ml-2
            first:ml-0
          "
        >
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9679 5.00131L12.4478 1.07188L12.2931 1H4.69511L4.54511 1.06709L1.03438 5.00131C1.01229 5.02531 1 5.05701 1 5.08996C1 5.12291 1.01229 5.15461 1.03438 5.17861L8.35115 13.9384C8.39058 13.9779 8.44359 14 8.4988 14C8.55401 14 8.60702 13.9779 8.64644 13.9384L15.9632 5.17861C15.9859 5.15523 15.9991 5.12386 16 5.09091C16.0008 5.05796 15.9894 5.02591 15.9679 5.00131V5.00131Z"
              stroke="#1F83F8"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M1 5H16"
              stroke="#1F83F8"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
        </button>
        <button
          v-if="offer.location"
          class="p-2 bg-black-main/[.05] rounded-lg ml-2 first:ml-0"
        >
          <Icon
            iconName="location"
            :size="16"
            color="#1F83F8"
            class="ml-1 first:ml-0"
          />
        </button>
      </div>
    </div>
    <div class="xs:grid xs:grid-cols-[150px_1fr] md:flex items-center pt-4">
      <a href="#" class="text-blue-dark text-[13px] leading-[15px]"
        >Кредитный калькулятор</a
      >
      <div class="flex items-center mt-1 xs:mt-0 xs:ml-7">
        <p class="text-[13px] leading-[15px] text-gray-main">
          Вероятность одобрения
        </p>
        <span class="text-base text-[#353535] ml-2">45%</span>
      </div>
      <button
        class="
          bg-blue-dark
          rounded-lg
          px-4
          xs:px-6
          py-3
          text-white text-[12.5px]
          mt-3
          xs:text-base-none xs:col-start-1 xs:col-end-3 xs:justify-self-center
          md:ml-auto md:mt-0
        "
      >
        Получить предварительное решение
      </button>
    </div>
  </li>
</template>
<script>
import { formatMinutes } from "@/helpers";
import Icon from "@/components/base/Icon/Icon.vue";

export default {
  name: "BankOfferCard",
  props: ["offer"],
  components: {
    Icon,
  },
  data: () => ({
    isHover: false,
  }),
  computed: {
    formattedApprovalTime: function () {
      return formatMinutes(this.offer.approvalTime);
    },
  },
};
</script>