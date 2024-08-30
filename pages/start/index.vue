<template>
  <UContainer class="bg-[#ffffff] dark:bg-[#121212] py-8 mb-10">
    <h1 class="color-primary text-center mb-8">Стартовый шаблон</h1>

    <div class="flex flex-col dynamic-font-size lg:flex-row">
      <div class="w-full lg:w-[75%]">
        <div class="lg:mr-8">
          

          <h2 class="mb-6 text-center lg:text-left">Первые шаги</h2>
          <!-- <UBadge class="dynamic-font-size" label="/start/config.vue" color="gray"/> -->


          <div class="flex justify-between mt-16 mb-8">
            <NuxtLink to="/">
              <UButton
                icon="i-heroicons-arrow-long-left"
                size="xl"
                color="primary"
                variant="outline"
                label=" В Начало"
                :trailing="false"
            /></NuxtLink>
            <NuxtLink to="/start/config">
              <UButton
                icon="i-heroicons-arrow-long-right"
                size="xl"
                color="primary"
                variant="solid"
                label="Конфигурации шаблона "
                :trailing="true"
            /></NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden lg:w-[25%] lg:inline-block">
        <bodyRightMenuPage class="sticky top-3" />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const titlePage = "Стартовый шаблон Nuxt 3";
const descPage = "Краткое описание содержания страницы. До 300 символов";
useSeoMeta({
  title: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  ogTitle: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  description: descPage,
  ogDescription: descPage,
  ogImage: "files/img/logo_max.png",
  twitterCard: "summary_large_image",
});


const code = ref(`<input v-model="demo">
<div>{{ demo }}</div>

const demo = ref("Я реактивная строка")

// Всего три строки кода делают это. Потрясающе!
`);
</script>
