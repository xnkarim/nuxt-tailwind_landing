<template>
  <div
    class="
      bg-white
      p-4
      rounded-[.625rem]
      backdrop-blur-[96px]
      shrink-0
      ml-5
      first:ml-0
      h-full
    "
  >
    <div class="flex items-center justify-between">
      <img
        class="rounded-md drop-shadow-lg w-16 -mt-7"
        :src="require('~/static/images/' + offer.image)"
        alt=""
      />
      <button
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
    </div>
    <div class="mt-4">
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
    <div class="mt-3">
      <h5 class="text-base font-bold w-[92%] leading-5">
        {{ offer.offer }}
      </h5>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <span class="text-base pt-1">{{ offer.loanRate }}</span>
          <span class="text-[11px] leading-[0.875rem] text-gray-main text-right"
            >Ставка</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-base shrink-0 pt-1">{{
            formattedApprovalTime
          }}</span>
          <span class="text-[11px] leading-[0.875rem] text-gray-main text-right"
            >Время одобрения</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-base max-w-[65px] pt-1">{{
            offer.registrationTypes.join(", ")
          }}</span>
          <span class="text-[11px] leading-[0.875rem] text-gray-main text-right"
            >Способы оформления</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatMinutes } from "@/helpers";
import Icon from "@/components/base/Icon/Icon.vue";

export default {
  name: "BestOfferCard",
  props: ["offer"],
  components: {
    Icon,
  },
  computed: {
    formattedApprovalTime: function () {
      return formatMinutes(this.offer.approvalTime);
    },
  },
};
</script>
