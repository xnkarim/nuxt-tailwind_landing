<template>
  <footer
    class="
      relative
      bg-black-main
      text-white
      rounded-[10px]
      mx-2
      mt-20
      mb-4
      px-8
      pt-[35px]
      pb-[42px]
    "
  >
    <div
      class="
        grid
        grid-cols-[1fr_50px]
        grid-rows-[50px_1fr_50px]
        sm:grid-cols-[220px_1fr]
        md:grid-rows-[50px_1fr] md:grid-cols-[220px_1fr_130px]
        2xl:flex
      "
    >
      <img class="sm:self-center" src="~/static/images/logo.png" alt="" />
      <ul
        class="
          sm:flex
          2xl:items-center
          sm:col-start-1 sm:col-end-3
          md:col-end-4
          sm:mt-6
          2xl:mt-0 2xl:ml-6
          3xl:ml-14
        "
      >
        <li
          class="
            mt-3
            sm:mt-0
            first:mt-0
            sm:ml-3
            md:ml-6
            2xl:ml-5
            3xl:ml-10
            sm:first:ml-0
          "
        >
          <a href="#">Кредитный калькулятор</a>
        </li>
        <li
          class="
            mt-3
            sm:mt-0
            first:mt-0
            sm:ml-3
            md:ml-6
            2xl:ml-5
            3xl:ml-10
            sm:first:ml-0
          "
        >
          <a href="#">Кредитный брокер</a>
        </li>
        <li
          class="
            mt-3
            sm:mt-0
            first:mt-0
            sm:ml-3
            md:ml-6
            2xl:ml-5
            3xl:ml-10
            sm:first:ml-0
          "
        >
          <a href="#">Как мы работаем</a>
        </li>
        <li
          class="
            mt-3
            sm:mt-0
            first:mt-0
            sm:ml-3
            md:ml-6
            2xl:ml-5
            3xl:ml-10
            sm:first:ml-0
          "
        >
          <a href="#">Разместить рекламу</a>
        </li>
      </ul>
      <div
        class="
          sm:flex sm:items-center
          ml-auto
          col-start-2 col-end-3
          row-start-1 row-end-3
          sm:row-end-2
        "
      >
        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="youtube" :size="20" color="#fff" />
        </Button>
        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="facebook" :width="11" :height="20" color="#fff" />
        </Button>

        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="instagram" :size="20" color="#fff" />
        </Button>

        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="telegram" :size="20" color="#fff" />
        </Button>

        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="whatsapp" :size="18" color="#fff" />
        </Button>

        <Button
          class="
            flex
            items-center
            justify-center
            w-[38px]
            h-[38px]
            mt-3
            sm:mt-0
            first:mt-0
            bg-white/[.1]
            rounded-lg
            sm:ml-2 sm:first:ml-0
          "
        >
          <Icon iconName="viber" :size="18" color="#fff" />
        </Button>
      </div>
      <div
        class="
          flex
          items-center
          mt-auto
          md:mt-0 md:ml-auto
          2xl:ml-6
          md:col-start-3 md:row-start-1
        "
      >
        <Icon iconName="letter" :size="16" color="#fff" />
        <p class="ml-1.5">my@credit.ru</p>
      </div>
    </div>
    <div
      class="
        flex
        items-baseline
        sm:items-center
        text-gray-main
        flex-col
        sm:flex-row
        mt-9
        sm:mt-[75px]
      "
    >
      <span>©Мойкредит 2021</span>
      <a href="#" class="sm:ml-auto">Политика конфиденциальности</a>
      <span class="order-first sm:order-last sm:ml-4">By Creonit</span>
    </div>
    <Button
      class="
        absolute
        right-[33px]
        bottom-[241px]
        bg-black-main
        w-16
        h-16
        flex
        items-center
        justify-center
        border border-white/[0.12]
        rounded-full
      "
    >
      <Icon iconName="message" :size="32" color="#fff" />
    </Button>
  </footer>
</template>
<script>
import Icon from "@/components/base/Icon/Icon.vue";

export default {
  name: "AppFooter",
  components: {
    Icon,
  },
};
</script>