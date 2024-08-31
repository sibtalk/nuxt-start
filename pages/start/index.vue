<template>
  <UContainer class="bg-[#ffffff] dark:bg-[#121212] py-8 mb-10">
    <h1 class="color-primary text-center mb-8">Стартовый шаблон</h1>

    <div class="flex flex-col dynamic-font-size lg:flex-row">
      <div class="w-full lg:w-[75%]">
        <div class="lg:mr-8">
          <h2 class="mb-6 text-center lg:text-left">Первые шаги</h2>
          <div>
            <ol>
              <li>
                Убедитесь что у вас установлена
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  class="text-underline"
                  >Node.js</a
                >
              </li>
              <li>
                Скачайте подготовленный
                <a href="/files/nuxt-start.zip" class="text-underline"
                  >архив шаблона Nuxt 3</a
                >
              </li>
              <li>
                Распакуйте шаблон в любое место вашего ПК, используйте в пути
                только латинские символы.
              </li>
              <li>
                Откройте папку шаблона в
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  class="text-underline"
                >
                  Visual Studio Code</a
                >
              </li>
              <li>
                Откройте терминал и для сборки проекта запустите команду
                <UBadge
                  class="dynamic-font-size"
                  label="npm install"
                  color="gray"
                />
              </li>
              <li>
                По окончанию сборки запустите в терминале 
                <UBadge
                  class="dynamic-font-size"
                  label="npm run dev"
                  color="gray"
                />
              </li>
              <li>
                Проект доступен по адресу
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  class="text-underline"
                  >http://localhost:3000/</a
                >, удачных исследований!
              </li>
            </ol>

            <div class="grid grid-cols-4 gap-4 my-8">
              <div
                v-for="(src, index) in imgs"
                :key="index"
                class="pic"
                @click="() => showImg(index)"
              >
                <img :src="src" />
              </div>
              <VueEasyLightbox
                :visible="visibleRef"
                :imgs="imgs"
                :index="indexRef"
                @hide="onHide"
              />
            </div>
          </div>

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
const descPage = "Описаны первые шаги и базовые механики";
useSeoMeta({
  title: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  ogTitle: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  description: descPage,
  ogDescription: descPage,
  ogImage: "/files/img/ip55_ogg.jpg",
  twitterCard: "summary_large_image",
});

const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [
  "https://via.placeholder.com/450.png/",
  "https://via.placeholder.com/300.png/",
  "https://via.placeholder.com/150.png/",
  { src: "https://via.placeholder.com/450.png/", title: "this is title" },
];

const setNavbarWidth = inject('setNavbarWidth')

const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
  document.body.style.paddingRight = '8px'
  if (setNavbarWidth) {
    setNavbarWidth('calc(100% - 8px)')
  }
}

const onHide = () => {
  visibleRef.value = false
  document.body.style.paddingRight = ''
  if (setNavbarWidth) {
    setNavbarWidth('100%')
  }
}

</script>

<style lang="css" scoped>
ol {
  list-style: auto;
  margin-left: 32px;
}
.vel-modal {
  background: rgba(0, 0, 0, .8);
}
.vel-btns-wrapper .btn__close {
  right: 14px;
}
</style>
