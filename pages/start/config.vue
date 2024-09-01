<template>
  <UContainer class="bg-[#ffffff] dark:bg-[#121212] py-8 mb-10">
    <h1 class="color-primary text-center mb-8">Конфигурации шаблона</h1>

    <div class="flex flex-col dynamic-font-size lg:flex-row">
      <div class="w-full lg:w-[75%]">
        <div class="lg:mr-8 h-full flex flex-col justify-between">
          <div
            class="wglass w-[280px] mx-auto p-4 mt-32 dynamic-font-size text-center"
          >
            В разработке...
          </div>

          <div class="flex justify-between mt-16 mb-8">
            <NuxtLink to="/start">
              <UButton
                class="flex sm:hidden"
                icon="i-heroicons-arrow-long-left"
                size="xl"
                color="primary"
                variant="outline"
                :trailing="false" />
              <UButton
                class="hidden sm:flex"
                icon="i-heroicons-arrow-long-left"
                size="xl"
                color="primary"
                variant="outline"
                label=" Стартовый шаблон"
                :trailing="false"
            /></NuxtLink>
            <NuxtLink to="/start/config">
              <UButton
                disabled
                class="flex sm:hidden"
                icon="i-heroicons-arrow-long-right"
                size="xl"
                color="primary"
                variant="solid"
                :trailing="true" />
              <UButton
                disabled
                class="hidden sm:flex"
                icon="i-heroicons-arrow-long-right"
                size="xl"
                color="primary"
                variant="solid"
                label="Продолжение следует "
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
const titlePage = "Конфигурации шаблона Nuxt 3";
const descPage = "Краткое описание содержания страницы. До 300 символов";
useSeoMeta({
  title: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  ogTitle: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  description: descPage,
  ogDescription: descPage,
  ogImage: "/files/img/ip55_ogg.jpg",
  twitterCard: "summary_large_image",
});
</script>
