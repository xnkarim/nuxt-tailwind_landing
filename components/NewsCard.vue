<template>
  <div
    class="
      break-inside-avoid
      mb-8
      p-4
      max-w-[449px]
      rounded-[0.625rem]
      border border-black-secondary/[.12]
      mx-auto
    "
  >
    <div class="flex items-center justify-between">
      <img
        class="-mt-7"
        :src="require('~/static/images/' + news.icon)"
        alt=""
      />
      <span class="text-sm text-gray-main">{{ calendarDay }}</span>
    </div>
    <div>
      <p v-for="(text, i) in news.text" :key="i" class="text-base mt-4">
        {{ text }}
      </p>
    </div>
    <img
      v-if="news.image"
      class="mt-6"
      :src="require('~/static/images/' + news.image)"
      alt=""
    />
    <div class="flex items-end justify-between mt-6">
      <div>
        <span class="block font-bold text-base">{{ news.group }}</span>
        <span class="text-sm text-gray-main"
          >{{ news.subscribersCount }} подписок</span
        >
      </div>
      <a class="text-sm text-blue-main" href="#">Читать в источнике ↗</a>
    </div>
  </div>
</template>
<script>
import moment from "moment";
require("moment/locale/ru");

export default {
  name: "NewsCard",
  props: ["news"],
  computed: {
    calendarDay() {
      return moment(this.news.date).calendar();
    },
  },
};
</script>