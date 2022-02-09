<template>
  <section class="mt-32">
    <div class="container max-w-[1375px]">
      <div
        class="
          grid
          justify-items-center
          items-center
          sm:grid-cols-[1fr_1fr]
          md:grid-cols-[220px_1fr_1fr]
          lg:grid-cols-[220px_2fr_1fr]
        "
      >
        <h2 class="text-4xl md:justify-self-end"># Что нового у</h2>
        <div
          class="
            bg-black-btn/[.1]
            p-0.5
            rounded-md
            mt-1
            flex flex-col
            xs:flex-row
            md:col-start-2 md:col-end-4 md:justify-self-start md:ml-3
            lg:col-end-3
          "
        >
          <Button
            class="bg-white text-black-btn text-base px-2.5 py-2 rounded-md"
          >
            бизнеса
          </Button>
          <Button class="text-black-btn text-base px-2.5 py-2 rounded-md">
            кредитования
          </Button>
          <Button class="text-black-btn text-base px-2.5 py-2 rounded-md">
            образования
          </Button>
          <Button class="text-black-btn text-base px-2.5 py-2 rounded-md">
            мемов
          </Button>
        </div>
        <Button
          class="
            flex
            items-center
            px-6
            py-3
            rounded-lg
            border border-black-main
            text-base-none
            mt-3
            sm:col-start-1 sm:col-end-4
            lg:col-start-3 lg:mt-0 lg:ml-auto
          "
        >
          <span>Добавить свой канал</span>
          <PlusIcon />
        </Button>
      </div>
      <div class="mt-[3.25rem]">
        <MasonryLayout />
      </div>
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
  </section>
</template>
<script>
import Icon from "@/components/base/Icon/Icon.vue";
import PlusIcon from "@/components/base/Icon/PlusIcon.vue";
import MasonryLayout from "@/components/MasonryLayout.vue";

export default {
  name: "NewsSection",
  components: {
    Icon,
    PlusIcon,
    MasonryLayout,
  },
};
</script>