<template>
  <UContainer class="bg-[#ffffff] dark:bg-[#121212] py-8 mb-10">
    <h1 class="color-primary text-center mb-8">Разработка приложения Nuxt 3</h1>

    <div class="flex flex-col dynamic-font-size lg:flex-row">
      <div class="w-full lg:w-[75%]">
        <div class="lg:mr-8">
          <div
            v-if="showIntro"
            class="flex flex-col sm:flex-row rounded-[16px] bg-[#f8f8f8] dark:bg-[#171717] p-8 items-center mb-8 relative"
          >
            <div class="w-[40%] mb-6 sm:w-[25%] sm:mb-0">
              <img
                src="/files/img/ip.jpg"
                class="w-[80%] h-auto rounded-[50%]"
              />
            </div>
            <div class="w-[100%] sm:w-[75%]">
              Привет. Небольшой дисклеймер. <br />Данный материал не является
              курсом, воспринимайте его как методичку. Код предоставленный в
              материале работает, и не выдает ошибок. Рефакторингом и
              оптимизацией занимайтесь сами, я лишь указываю путь. Отзывы очень
              важны. Не молчите.
            </div>
            <div class="absolute right-2 top-2">
              <UButton
                icon="i-heroicons-x-mark-solid"
                size="sm"
                color="gray"
                square
                variant="ghost"
                @click="closeIpDesc"
              />
            </div>
          </div>

          <h2 class="mb-6 text-center lg:text-left">
            О технологии простым языком
          </h2>
          <!-- <UBadge class="dynamic-font-size" label="/start/config.vue" color="gray"/> -->

          <div class="flex mb-8">
            <div class="hidden sm:flex sm:w-[21%]">
              <img
                src="/files/img/vs-code.jpg"
                class="w-full h-auto inline-block dark:hidden rounded-lg"
              />
              <img
                src="/files/img/vs-code-d.jpg"
                class="w-full h-auto hidden dark:inline-block rounded-lg"
              />
            </div>
            <div class="w-[100%] sm:w-[79%] sm:pl-8">
              <p>
                <a
                  href="https://nuxt.com/"
                  target="_blank"
                  class="text-underline"
                  >Nuxt</a
                >
                - стильно, модно, молодежно. А если посерьезней, под капотом -
                сервер, сборщики, компиляторы, интерпретаторы, обработчики и
                прочее.
              </p>
              <p>
                Основная фишка - легкая работа с реактивностью и простота
                освоения.<br />
                Просмотрите пример реактивности. Измените текст в поле ввода.
              </p>
              <div class="flex mt-8 mb-4">
                <input
                  class="w-[50%] text-center mr-8 h-10 flex items-center"
                  v-model="demo"
                />
                <div
                  class="w-[50%] text-center overflow-hidden max-h-10 flex justify-center items-center"
                >
                  {{ demo }}
                </div>
              </div>
              <bodyCodeHL
                :code="code"
                class="dynamic-font-size mb-8 rounded-lg overflow-hidden"
              />
            </div>
          </div>

          <h2 class="mb-3 text-center lg:text-left">
            С чего начать или порог вхождения
          </h2>

          <div>
            <p>
              Выглядит всё пугающе, потому внесу немного лирики. Если подойти
              как ментор старой школы, то следует сказать, желательно знание
              HTML, CSS, JS. И сразу отпугнуть людей которые хотят заниматься
              творчеством или им просто нужен сайт. А времена идут, появились
              нейронки и масса ботов GPT, которые помогут написать, пусть не
              сложные функции, но базовую верстку вполне годную для сайтов
              визиток. Потому советую хотя бы бегло просмотреть тематические
              видео и приступать к исследованиям на подготовленном шаблоне.
            </p>
          </div>

          <h2 class="mt-8 mb-3 text-center lg:text-left">Идея и методики</h2>

          <div>
            <p>
              Создаем масштабируемое приложение и пишем в него микросервисы,
              модули, расширения. Постепенно сложность будет увеличиваться, и
              когда накопится достаточный объем работ, начнем создавать свою
              библиотеку.
            </p>
            <p>
              Методика по типу "от обратного". Теорию вы подтяните сами когда
              сочтете нужным. Знания о принципах работ различных механизмов
              приобретаются быстрее при разборке/сборке этих механизмов. Потому
              вам предоставляется шаблон с базовыми концепциями, написаны
              минимальные инструкции для старта. И вперед исследовать, ломать,
              собирать. Удалять и начинать заново. Это весело и полезно.
            </p>
          </div>

          <h2 class="mt-8 mb-4 text-center lg:text-left">
            Необходимое программное обеспечение
          </h2>

          <div
            class="flex flex-col lg:flex-row text-[16px] rounded-lg bg-[#f8f8f8] dark:bg-[#0e1011] overflow-hidden"
          >
            <div class="flex flex-col mx-auto max-w-[300px] lg:w-[33%] p-4">
              <div class="mt-4 mb-1">
                <bodyLogoNode />
              </div>
              <p class="mt-4">
                Должна быть установлена в обязательном порядке. Установите с
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  class="text-underline"
                >
                  официального сайта</a
                >
              </p>
            </div>
            <div class="flex flex-col mx-auto max-w-[300px] lg:w-[33%] p-4">
              <img class="mb-[5px]" src="/files/img/vscode_logo.png" />
              <p class="text-center">
                Любой текстовый редактор. <br />Но лучше
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  class="text-underline"
                >
                  Visual Studio Code</a
                >
              </p>
            </div>
            <div class="flex mx-auto max-w-[300px] lg:w-[33%] flex-col p-4">
              <div class="w-[31%] mx-auto mt-4">
                <img src="/files/img/ego_ava.png" />
              </div>
              <div class="mt-4">
                <p>
                  Наш бот помощник
                  <a
                    href="https://t.me/help_ip55_bot"
                    target="_blank"
                    class="text-underline"
                  >
                    ЭGO</a
                  >. Всё за вас не напишет, но направление возможно подскажет.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end mt-16 mb-8">
            <NuxtLink to="start">
              <UButton
                trailing
                icon="i-heroicons-arrow-long-right"
                size="xl"
                color="primary"
                variant="solid"
                label="Всё установлено. Вперед! "
                :trailing="false"
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
const demo = ref("Я реактивная строка");
const showIntro = ref(true);
const titlePage = "Разработка приложения Nuxt 3";
const descPage =
  "Методичка по разработке реактивного приложения. Создание и описание компонентов. Примеры кода и исходники";
useSeoMeta({
  title: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  ogTitle: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
  description: descPage,
  ogDescription: descPage,
  ogImage: "/files/img/ip55_ogg.jpg",
  twitterCard: "summary_large_image",
});
function closeIpDesc() {
  showIntro.value = false;
}

const code = ref(`<input v-model="demo">
<div>{{ demo }}</div>

const demo = ref("Я реактивная строка")

// Всего три строки кода делают это. Потрясающе!
`);
</script>
