import{_ as P}from"./DiFSAhsa.js";import{_ as S}from"./DQtlDoDQ.js";import{b as L,_ as B,a as T}from"./SnmERidh.js";import{_ as V}from"./DBMaZ9kq.js";import{u as R}from"./ClpqZSw9.js";import{_ as E,r as c,h as H,w as _,m as M,n as U,o as x,a as t,d as e,b as s,c as D,q as $,F,i as r,p as W,e as q}from"./CQxEvH1e.js";import"./DYKnVCOL.js";import"./CrNnztF4.js";const l=n=>(W("data-v-5ec200ad"),n=n(),q(),n),A=l(()=>t("h1",{class:"color-primary text-center mb-8"},"Стартовый шаблон",-1)),G={class:"flex flex-col dynamic-font-size lg:flex-row"},J={class:"w-full lg:w-[75%]"},K={class:"lg:mr-8"},O=l(()=>t("h2",{class:"mb-6 text-center lg:text-left"},"Первые шаги",-1)),Q=l(()=>t("li",null,[e(" Убедитесь что у вас установлена "),t("a",{href:"https://nodejs.org/",target:"_blank",class:"text-underline"},"Node.js")],-1)),X=l(()=>t("li",null,[e(" Скачайте подготовленный "),t("a",{href:"/files/nuxt-start.zip",class:"text-underline",download:"nuxt-start.zip"},"архив шаблона Nuxt 3")],-1)),Y=l(()=>t("li",null," Распакуйте шаблон в любое место вашего ПК, используйте в пути только латинские символы. ",-1)),Z=l(()=>t("li",null,[e(" Откройте папку шаблона в "),t("a",{href:"https://code.visualstudio.com/",target:"_blank",class:"text-underline"}," Visual Studio Code")],-1)),tt=l(()=>t("li",null,[e(" Проект доступен по адресу "),t("a",{href:"http://localhost:3000/",target:"_blank",class:"text-underline"},"http://localhost:3000/"),e(", удачных исследований! ")],-1)),et={class:"grid grid-cols-3 gap-4 my-8"},st=["onClick"],lt=["src"],ot=l(()=>t("h2",{class:"mb-6 mt-12 text-center lg:text-left"}," Комплектация шаблона ",-1)),nt=l(()=>t("div",null,[t("ul",null,[t("li",null,[t("a",{href:"https://devtools.nuxt.com/",target:"_blank",class:"text-underline"},"NuxtDevTools"),e(" - дает вам понимание и прозрачность вашего приложения Nuxt ")]),t("li",null,[t("a",{href:"https://ui.nuxt.com/",target:"_blank",class:"text-underline"},"NuxtUI"),e(" - библиотека компонентов от разработчиков ")]),t("li",null,[t("a",{href:"https://tailwindcss.com/",target:"_blank",class:"text-underline"},"Tailwindcss"),e(" - CSS-фреймворк, ориентированный на утилиты ")]),t("li",null,[t("a",{href:"https://nuxt.com/modules/easy-lightbox",target:"_blank",class:"text-underline"},"Nuxt Easy Lightbox"),e(" - модуль для работы с изображениями ")]),t("li",null,[t("a",{href:"https://github.com/highlightjs/vue-plugin",target:"_blank",class:"text-underline"},"highlightjs/vue-plugin"),e(" - плагин подсветки синтаксиса ")]),t("li",null,[t("a",{href:"https://icones.js.org/collection/heroicons",target:"_blank",class:"text-underline"},"HeroIcons"),e(", "),t("a",{href:"https://icones.js.org/collection/material-symbols",target:"_blank",class:"text-underline"},"Material Symbols"),e(" - подключенные иконки ")])])],-1)),it=l(()=>t("h2",{class:"mb-6 mt-12 text-center lg:text-left"}," Начинаем эксперименты ",-1)),at=l(()=>t("p",null,[e("Теперь ваша тестовая страница доступна по адресу "),t("a",{href:"http://localhost:3000/test",target:"_blank",class:"text-underline"},"http://localhost:3000/test"),e(". Вы поняли как устроена верстка и маршрутизация в Nuxt. Продолжайте изучать документации от разработчиков, они найдутся по ссылкам выше.")],-1)),ct={class:"flex justify-between mt-16 mb-8"},rt={class:"hidden lg:w-[25%] lg:inline-block"},b="Стартовый шаблон Nuxt 3",y="Описаны первые шаги и базовые механики",dt={__name:"index",setup(n){R({title:b+" ▸ IP-55:dev",ogTitle:b+" ▸ IP-55:dev",description:y,ogDescription:y,ogImage:"/files/img/ip55_ogg.jpg",twitterCard:"summary_large_image"});const d=c(!1),g=c(0),u=["/files/img/i_start.jpg","/files/img/i_dev.jpg","/files/img/i_end.jpg"],i=M("setNavbarWidth"),v=m=>{g.value=m,d.value=!0,document.body.style.paddingRight="8px",i&&i("calc(100% - 8px)")},k=()=>{d.value=!1,document.body.style.paddingRight="",i&&i("100%")},w=c(`<template>
  <!-- Верстка исключительно внутри template -->
  <h1>Привет Мир!</h1>
  <div class="text-4xl text-center text-[#1ee50a]">Стиль задан Tailwindcss</div>
</template>

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
</style>
`),z=c(`<template>
  <!-- slot выводит страницы -->
    <slot />
</template>

<script lang="ts" setup>
// тут скрипты для всего сайта
<\/script>

<style>
/* тут стили для всего сайта*/
</style>
`);return(m,_t)=>{const o=P,C=U("VueEasyLightbox"),p=S,a=B,h=V,N=T,j=L;return x(),H(j,{class:"bg-[#ffffff] dark:bg-[#121212] py-8 mb-10"},{default:_(()=>[A,t("div",G,[t("div",J,[t("div",K,[O,t("div",null,[t("ol",null,[Q,X,Y,Z,t("li",null,[e(" Создайте терминал и для установки зависимостей запустите команду "),s(o,{class:"dynamic-font-size",label:"npm install",color:"gray"})]),t("li",null,[e(" По окончанию установки запустите в терминале "),s(o,{class:"dynamic-font-size",label:"npm run dev",color:"gray"})]),tt]),t("div",et,[(x(),D(F,null,$(u,(I,f)=>t("div",{key:f,class:"pic",onClick:()=>v(f)},[t("img",{src:I},null,8,lt)],8,st)),64)),s(C,{visible:r(d),imgs:u,index:r(g),onHide:k},null,8,["visible","index"])])]),ot,nt,it,t("div",null,[t("p",null,[e(" В папке "),s(o,{class:"dynamic-font-size",label:"pages",color:"gray"}),e(" создайте файл "),s(o,{class:"dynamic-font-size",label:"test.vue",color:"gray"}),e(" со следующим содержимым: ")]),s(p,{code:r(w),class:"dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"},null,8,["code"]),t("p",null,[e(" Для очистки шаблона замените содержимое файла "),s(o,{class:"dynamic-font-size",label:"default.vue",color:"gray"}),e(" в папке "),s(o,{class:"dynamic-font-size",label:"layouts",color:"gray"}),e(" на: ")]),s(p,{code:r(z),class:"dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"},null,8,["code"]),at]),t("div",ct,[s(h,{to:"/"},{default:_(()=>[s(a,{class:"flex sm:hidden",icon:"i-heroicons-arrow-long-left",size:"xl",color:"primary",variant:"outline",trailing:!1}),s(a,{class:"hidden sm:flex",icon:"i-heroicons-arrow-long-left",size:"xl",color:"primary",variant:"outline",label:" В Начало",trailing:!1})]),_:1}),s(h,{to:"/start/config"},{default:_(()=>[s(a,{class:"flex sm:hidden",icon:"i-heroicons-arrow-long-right",size:"xl",color:"primary",variant:"solid",trailing:!0}),s(a,{class:"hidden sm:flex",icon:"i-heroicons-arrow-long-right",size:"xl",color:"primary",variant:"solid",label:"Конфигурации шаблона ",trailing:!0})]),_:1})])])]),t("div",rt,[s(N,{class:"sticky top-3"})])])]),_:1})}}},yt=E(dt,[["__scopeId","data-v-5ec200ad"]]);export{yt as default};
