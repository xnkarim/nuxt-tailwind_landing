<template>
  <section>
    <div class="container md:flex justify-between">
      <div
        class="
          relative
          basis-[45%]
          aspect-square
          pl-[42px]
          pb-[42px]
          md:order-1 md:min-w-[390px]
        "
      >
        <OfferCard
          v-for="{ title, description, rootClass, image } in offers"
          :key="title"
          :title="title"
          :description="description"
          :class="rootClass"
          :image="require('~/static/images/' + image)"
        />
      </div>
      <div class="mt-5 basis-[44%] sm:mt-0">
        <h3 class="font-stolzl text-2xl xs:text-4xl">
          Мастер подбора кредитов<br />
          на любые цели
        </h3>
        <div class="flex flex-col mt-8">
          <Tabs v-model="tab" :tabs="['Частное лицо', 'Компания']" />
          <!-- form -->
          <TabsView :activeTab="tab">
            <TabsViewItem>
              <CreditForm type="private" />
            </TabsViewItem>
            <TabsViewItem>
              <CreditForm type="entity" />
            </TabsViewItem>
          </TabsView>
          <Button
            class="bg-blue-main text-white text-base-none py-3 rounded-lg mt-8"
          >
            Показать предложения (128)
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import OfferCard from "@/components/OfferCard.vue";
import Tabs from "@/components/base/Tabs/Tabs.vue";
import TabsView from "@/components/base/Tabs/TabsView.vue";
import TabsViewItem from "@/components/base/Tabs/TabsViewItem.vue";
import CreditForm from "@/components/CreditForm.vue";

export default {
  components: {
    OfferCard,
    Tabs,
    TabsView,
    TabsViewItem,
    CreditForm,
  },
  data: () => ({
    tab: 1,
    offers: [
      {
        title: "Оформите карту<br />с кэшбэком до 30%",
        description: " И ежемесячным процентом<br />на остаток",
        rootClass: "z-30",
        image: "credit1.png",
      },
      {
        title: "Микрозаймы",
        description: "Топ предложений, проверенных<br /> экспертами Мойкредит",
        rootClass: "z-20 translate-x-[-21px] translate-y-[21px]",
        image: "credit2.png",
      },
      {
        title: "Промо #1",
        description: "Описание промо на несколько<br /> строк, пример на 2-3",
        rootClass: "z-10 translate-x-[-42px] translate-y-[42px]",
        image: "credit3.png",
      },
    ],
  }),
};
</script>