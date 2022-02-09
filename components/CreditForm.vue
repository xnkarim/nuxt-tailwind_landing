<template>
  <div>
    {{ title }}
    <Select
      label="Цель кредита"
      :options="['Потребительский кредит', 'Автокредит', 'Ипотека']"
      v-model="formData.creditType"
    />
    <InputRange
      label="Введите сумму кредита"
      :max="1000000"
      :step="100"
      v-model="formData.creditSum"
    />
    <InputRange
      label="Срок кредита"
      suffix="год"
      :max="10"
      v-model="formData.creditTerm"
    >
      <template v-slot:icon>
        <Icon
          iconName="calendar"
          :size="24"
          color="#878787"
          class="absolute right-0 bottom-[15px]"
        />
      </template>
    </InputRange>
    <Input
      class="mt-6"
      label="Платеж/мес"
      type="number"
      v-model="formData.paymentPerMonth"
    />
  </div>
</template>
<script>
import Icon from "@/components/base/Icon/Icon.vue";
import Button from "@/components/base/Button.vue";
import Select from "@/components/base/Select.vue";
import InputRange from "@/components/base/InputRange.vue";
import Input from "@/components/base/Input.vue";

export default {
  name: "CreditForm",
  props: ["type"],
  components: {
    Icon,
    Button,
    Select,
    InputRange,
    Input,
  },
  data() {
    return {
      formData: {
        creditType: 0,
        creditSum: this.type === "private" ? 100000 : 999999,
        creditTerm: this.type === "private" ? 1 : 10,
        paymentPerMonth: this.type === "private" ? 9800 : 999999,
      },
    };
  },
};
</script>