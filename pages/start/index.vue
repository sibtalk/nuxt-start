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
                Создайте терминал и для установки зависимостей запустите команду
                <UBadge
                  class="dynamic-font-size"
                  label="npm install"
                  color="gray"
                />
              </li>
              <li>
                По окончанию установки запустите в терминале
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

            <div class="grid grid-cols-3 gap-4 my-8">
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

          <h2 class="mb-6 mt-12 text-center lg:text-left">
            Комплектация шаблона
          </h2>
          <div>
            <ul>
              <li>
                <a
                  href="https://devtools.nuxt.com/"
                  target="_blank"
                  class="text-underline"
                  >NuxtDevTools</a
                >
                - дает вам понимание и прозрачность вашего приложения Nuxt
              </li>
              <li>
                <a
                  href="https://ui.nuxt.com/"
                  target="_blank"
                  class="text-underline"
                  >NuxtUI</a
                >
                - библиотека компонентов от разработчиков
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  class="text-underline"
                  >Tailwindcss</a
                >
                - CSS-фреймворк, ориентированный на утилиты
              </li>
              <li>
                <a
                  href="https://nuxt.com/modules/easy-lightbox"
                  target="_blank"
                  class="text-underline"
                  >Nuxt Easy Lightbox</a
                >
                - модуль для работы с изображениями
              </li>
              <li>
                <a
                  href="https://github.com/highlightjs/vue-plugin"
                  target="_blank"
                  class="text-underline"
                  >highlightjs/vue-plugin</a
                >
                - плагин подсветки синтаксиса
              </li>
              <li>
                <a
                  href="https://icones.js.org/collection/heroicons"
                  target="_blank"
                  class="text-underline"
                  >HeroIcons</a
                >,
                <a
                  href="https://icones.js.org/collection/material-symbols"
                  target="_blank"
                  class="text-underline"
                  >Material Symbols</a
                >
                - подключенные иконки
              </li>
            </ul>
          </div>

          <h2 class="mb-6 mt-12 text-center lg:text-left">
            Начинаем эксперименты
          </h2>
          <div>
            <p>
              В папке
              <UBadge class="dynamic-font-size" label="pages" color="gray" />
              создайте файл
              <UBadge class="dynamic-font-size" label="test.vue" color="gray" />
              со следующим содержимым:
            </p>
            <bodyCodeHL
                :code="experiment"
                class="dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
              />
              <p>
              Для очистки шаблона замените содержимое файла
              <UBadge class="dynamic-font-size" label="default.vue" color="gray" />
              в папке
              <UBadge class="dynamic-font-size" label="layouts" color="gray" />
              на:
            </p>
            <bodyCodeHL
                :code="experimentLayout"
                class="dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
              />
              <p>Теперь ваша тестовая страница доступна по адресу  <a
                  href="http://localhost:3000/test"
                  target="_blank"
                  class="text-underline"
                  >http://localhost:3000/test</a
                >. Вы поняли как устроена верстка и маршрутизация в Nuxt. 
              Продолжайте изучать документации от разработчиков, они найдутся по ссылкам выше.</p>
          </div>

          <div class="flex justify-between mt-16 mb-8">
            <NuxtLink to="/">
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
                label=" В Начало"
                :trailing="false"
            /></NuxtLink>
            <NuxtLink to="/start/config">
              <UButton
                class="flex sm:hidden"
                icon="i-heroicons-arrow-long-right"
                size="xl"
                color="primary"
                variant="solid"
                :trailing="true" />
              <UButton
                class="hidden sm:flex"
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
  "/files/img/i_start.jpg",
  "/files/img/i_dev.jpg",
  "/files/img/i_end.jpg",
];

const setNavbarWidth = inject("setNavbarWidth");

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
  document.body.style.paddingRight = "8px";
  if (setNavbarWidth) {
    setNavbarWidth("calc(100% - 8px)");
  }
};

const onHide = () => {
  visibleRef.value = false;
  document.body.style.paddingRight = "";
  if (setNavbarWidth) {
    setNavbarWidth("100%");
  }
};
const experiment = ref(`<template>
  <!-- Верстка исключительно внутри template -->
  <h1>Привет Мир!</h1>
  <div class="text-4xl text-center text-[#1ee50a]">Стиль задан Tailwindcss</div>
<\/template>

<script lang="ts" setup>
// Метатеги вставляются так
const titlePage = "Тестовая страница";
const descPage = "Краткое описание страницы";
useSeoMeta({
  title: titlePage,
  ogTitle: titlePage,
  description: descPage,
  ogDescription: descPage,
  ogImage: "/files/img/ip55_ogg.jpg",
  twitterCard: "summary_large_image",
});
<\/script>

<style scoped>
/* scoped атрибут для применения стилей только к этой странице */
h1{
  color: red;
  text-align: center;
  font-size: 3rem;
  margin-top: 50px;
}
<\/style>
`);
const experimentLayout = ref(`<template>
  <!-- slot выводит страницы -->
    <slot />
</template>

<script lang="ts" setup>
// тут скрипты для всего сайта
<\/script>

<style>
/* тут стили для всего сайта*/
<\/style>
`);
</script>

<style lang="css" scoped>
ol,
ul {
  list-style: revert;
  margin-left: 32px;
}
.vel-modal {
  background: rgba(0, 0, 0, 0.8);
}
.vel-btns-wrapper .btn__close {
  right: 14px;
}
.pic:hover {
  cursor: zoom-in;
}
</style>
