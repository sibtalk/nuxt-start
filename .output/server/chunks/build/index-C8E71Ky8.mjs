import { _ as __nuxt_component_0$2, a as __nuxt_component_4, b as __nuxt_component_6 } from './page-CvbXpsT5.mjs';
import { _ as __nuxt_component_1 } from './Badge-DxFn-B5G.mjs';
import { _ as _sfc_main$1 } from './CodeHL-By1WnSU0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BZ1ngBfu.mjs';
import { _ as _export_sfc, a as useSeoMeta } from './server.mjs';
import { ref, inject, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'tailwind-merge';
import './index-Cvv6Clpb.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';

const titlePage = "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Nuxt 3";
const descPage = "\u041E\u043F\u0438\u0441\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438 \u0438 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0438";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
      ogTitle: titlePage + " " + String.fromCharCode(9656) + " IP-55:dev",
      description: descPage,
      ogDescription: descPage,
      ogImage: "/files/img/ip55_ogg.jpg",
      twitterCard: "summary_large_image"
    });
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgs = [
      "/files/img/i_start.jpg",
      "/files/img/i_dev.jpg",
      "/files/img/i_end.jpg"
    ];
    const setNavbarWidth = inject("setNavbarWidth");
    const showImg = (index2) => {
      indexRef.value = index2;
      visibleRef.value = true;
      (void 0).body.style.paddingRight = "8px";
      if (setNavbarWidth) {
        setNavbarWidth("calc(100% - 8px)");
      }
    };
    const onHide = () => {
      visibleRef.value = false;
      (void 0).body.style.paddingRight = "";
      if (setNavbarWidth) {
        setNavbarWidth("100%");
      }
    };
    const experiment = ref(`<template>
  <!-- \u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043D\u0443\u0442\u0440\u0438 template -->
  <h1>\u041F\u0440\u0438\u0432\u0435\u0442 \u041C\u0438\u0440!</h1>
  <div class="text-4xl text-center text-[#1ee50a]">\u0421\u0442\u0438\u043B\u044C \u0437\u0430\u0434\u0430\u043D Tailwindcss</div>
</template>

<script lang="ts" setup>
// \u041C\u0435\u0442\u0430\u0442\u0435\u0433\u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0442\u0430\u043A
const titlePage = "\u0422\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430";
const descPage = "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B";
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
/* scoped \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 */
h1{
  color: red;
  text-align: center;
  font-size: 3rem;
  margin-top: 50px;
}
</style>
`);
    const experimentLayout = ref(`<template>
  <!-- slot \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B -->
    <slot />
</template>

<script lang="ts" setup>
// \u0442\u0443\u0442 \u0441\u043A\u0440\u0438\u043F\u0442\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430
<\/script>

<style>
/* \u0442\u0443\u0442 \u0441\u0442\u0438\u043B\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430*/
</style>
`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$2;
      const _component_UBadge = __nuxt_component_1;
      const _component_VueEasyLightbox = resolveComponent("VueEasyLightbox");
      const _component_bodyCodeHL = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = __nuxt_component_4;
      const _component_bodyRightMenuPage = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "bg-[#ffffff] dark:bg-[#121212] py-8 mb-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="color-primary text-center mb-8" data-v-89acf018${_scopeId}>\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D</h1><div class="flex flex-col dynamic-font-size lg:flex-row" data-v-89acf018${_scopeId}><div class="w-full lg:w-[75%]" data-v-89acf018${_scopeId}><div class="lg:mr-8" data-v-89acf018${_scopeId}><h2 class="mb-6 text-center lg:text-left" data-v-89acf018${_scopeId}>\u041F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438</h2><div data-v-89acf018${_scopeId}><ol data-v-89acf018${_scopeId}><li data-v-89acf018${_scopeId}> \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 <a href="https://nodejs.org/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>Node.js</a></li><li data-v-89acf018${_scopeId}> \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 <a href="/files/nuxt-start.zip" class="text-underline" data-v-89acf018${_scopeId}>\u0430\u0440\u0445\u0438\u0432 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 Nuxt 3</a></li><li data-v-89acf018${_scopeId}> \u0420\u0430\u0441\u043F\u0430\u043A\u0443\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0432 \u043B\u044E\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u041F\u041A, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0432 \u043F\u0443\u0442\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B. </li><li data-v-89acf018${_scopeId}> \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0432 <a href="https://code.visualstudio.com/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}> Visual Studio Code</a></li><li data-v-89acf018${_scopeId}> \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0438 \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "npm install",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`</li><li data-v-89acf018${_scopeId}> \u041F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0435 `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "npm run dev",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`</li><li data-v-89acf018${_scopeId}> \u041F\u0440\u043E\u0435\u043A\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 <a href="http://localhost:3000/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>http://localhost:3000/</a>, \u0443\u0434\u0430\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439! </li></ol><div class="grid grid-cols-3 gap-4 my-8" data-v-89acf018${_scopeId}><!--[-->`);
            ssrRenderList(imgs, (src, index2) => {
              _push2(`<div class="pic" data-v-89acf018${_scopeId}><img${ssrRenderAttr("src", src)} data-v-89acf018${_scopeId}></div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_VueEasyLightbox, {
              visible: unref(visibleRef),
              imgs,
              index: unref(indexRef),
              onHide
            }, null, _parent2, _scopeId));
            _push2(`</div></div><h2 class="mb-6 mt-12 text-center lg:text-left" data-v-89acf018${_scopeId}> \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430 </h2><div data-v-89acf018${_scopeId}><ul data-v-89acf018${_scopeId}><li data-v-89acf018${_scopeId}><a href="https://devtools.nuxt.com/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>NuxtDevTools</a> - \u0434\u0430\u0435\u0442 \u0432\u0430\u043C \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Nuxt </li><li data-v-89acf018${_scopeId}><a href="https://ui.nuxt.com/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>NuxtUI</a> - \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 </li><li data-v-89acf018${_scopeId}><a href="https://tailwindcss.com/" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>Tailwindcss</a> - CSS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u0443\u0442\u0438\u043B\u0438\u0442\u044B </li><li data-v-89acf018${_scopeId}><a href="https://nuxt.com/modules/easy-lightbox" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>Nuxt Easy Lightbox</a> - \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 </li><li data-v-89acf018${_scopeId}><a href="https://github.com/highlightjs/vue-plugin" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>highlightjs/vue-plugin</a> - \u043F\u043B\u0430\u0433\u0438\u043D \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0430 </li><li data-v-89acf018${_scopeId}><a href="https://icones.js.org/collection/heroicons" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>HeroIcons</a>, <a href="https://icones.js.org/collection/material-symbols" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>Material Symbols</a> - \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 </li></ul></div><h2 class="mb-6 mt-12 text-center lg:text-left" data-v-89acf018${_scopeId}> \u041D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u044B </h2><div data-v-89acf018${_scopeId}><p data-v-89acf018${_scopeId}> \u0412 \u043F\u0430\u043F\u043A\u0435 `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "pages",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(` \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "test.vue",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(` \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C: </p>`);
            _push2(ssrRenderComponent(_component_bodyCodeHL, {
              code: unref(experiment),
              class: "dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-89acf018${_scopeId}> \u0414\u043B\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "default.vue",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(` \u0432 \u043F\u0430\u043F\u043A\u0435 `);
            _push2(ssrRenderComponent(_component_UBadge, {
              class: "dynamic-font-size",
              label: "layouts",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(` \u043D\u0430: </p>`);
            _push2(ssrRenderComponent(_component_bodyCodeHL, {
              code: unref(experimentLayout),
              class: "dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-89acf018${_scopeId}>\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u0430\u0448\u0430 \u0442\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 <a href="http://localhost:3000/test" target="_blank" class="text-underline" data-v-89acf018${_scopeId}>http://localhost:3000/test</a>. \u0412\u044B \u043F\u043E\u043D\u044F\u043B\u0438 \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0432 Nuxt. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432, \u043E\u043D\u0438 \u043D\u0430\u0439\u0434\u0443\u0442\u0441\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0432\u044B\u0448\u0435.</p></div><div class="flex justify-between mt-16 mb-8" data-v-89acf018${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "flex sm:hidden",
                    icon: "i-heroicons-arrow-long-left",
                    size: "xl",
                    color: "primary",
                    variant: "outline",
                    trailing: false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "hidden sm:flex",
                    icon: "i-heroicons-arrow-long-left",
                    size: "xl",
                    color: "primary",
                    variant: "outline",
                    label: " \u0412 \u041D\u0430\u0447\u0430\u043B\u043E",
                    trailing: false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      class: "flex sm:hidden",
                      icon: "i-heroicons-arrow-long-left",
                      size: "xl",
                      color: "primary",
                      variant: "outline",
                      trailing: false
                    }),
                    createVNode(_component_UButton, {
                      class: "hidden sm:flex",
                      icon: "i-heroicons-arrow-long-left",
                      size: "xl",
                      color: "primary",
                      variant: "outline",
                      label: " \u0412 \u041D\u0430\u0447\u0430\u043B\u043E",
                      trailing: false
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/start/config" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "flex sm:hidden",
                    icon: "i-heroicons-arrow-long-right",
                    size: "xl",
                    color: "primary",
                    variant: "solid",
                    trailing: true
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "hidden sm:flex",
                    icon: "i-heroicons-arrow-long-right",
                    size: "xl",
                    color: "primary",
                    variant: "solid",
                    label: "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 ",
                    trailing: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      class: "flex sm:hidden",
                      icon: "i-heroicons-arrow-long-right",
                      size: "xl",
                      color: "primary",
                      variant: "solid",
                      trailing: true
                    }),
                    createVNode(_component_UButton, {
                      class: "hidden sm:flex",
                      icon: "i-heroicons-arrow-long-right",
                      size: "xl",
                      color: "primary",
                      variant: "solid",
                      label: "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 ",
                      trailing: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="hidden lg:w-[25%] lg:inline-block" data-v-89acf018${_scopeId}>`);
            _push2(ssrRenderComponent(_component_bodyRightMenuPage, { class: "sticky top-3" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("h1", { class: "color-primary text-center mb-8" }, "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D"),
              createVNode("div", { class: "flex flex-col dynamic-font-size lg:flex-row" }, [
                createVNode("div", { class: "w-full lg:w-[75%]" }, [
                  createVNode("div", { class: "lg:mr-8" }, [
                    createVNode("h2", { class: "mb-6 text-center lg:text-left" }, "\u041F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438"),
                    createVNode("div", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, [
                          createTextVNode(" \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 "),
                          createVNode("a", {
                            href: "https://nodejs.org/",
                            target: "_blank",
                            class: "text-underline"
                          }, "Node.js")
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 "),
                          createVNode("a", {
                            href: "/files/nuxt-start.zip",
                            class: "text-underline"
                          }, "\u0430\u0440\u0445\u0438\u0432 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 Nuxt 3")
                        ]),
                        createVNode("li", null, " \u0420\u0430\u0441\u043F\u0430\u043A\u0443\u0439\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0432 \u043B\u044E\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u041F\u041A, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0432 \u043F\u0443\u0442\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B. "),
                        createVNode("li", null, [
                          createTextVNode(" \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0432 "),
                          createVNode("a", {
                            href: "https://code.visualstudio.com/",
                            target: "_blank",
                            class: "text-underline"
                          }, " Visual Studio Code")
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0438 \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 "),
                          createVNode(_component_UBadge, {
                            class: "dynamic-font-size",
                            label: "npm install",
                            color: "gray"
                          })
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u041F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0435 "),
                          createVNode(_component_UBadge, {
                            class: "dynamic-font-size",
                            label: "npm run dev",
                            color: "gray"
                          })
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u041F\u0440\u043E\u0435\u043A\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 "),
                          createVNode("a", {
                            href: "http://localhost:3000/",
                            target: "_blank",
                            class: "text-underline"
                          }, "http://localhost:3000/"),
                          createTextVNode(", \u0443\u0434\u0430\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439! ")
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-3 gap-4 my-8" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(imgs, (src, index2) => {
                          return createVNode("div", {
                            key: index2,
                            class: "pic",
                            onClick: () => showImg(index2)
                          }, [
                            createVNode("img", { src }, null, 8, ["src"])
                          ], 8, ["onClick"]);
                        }), 64)),
                        createVNode(_component_VueEasyLightbox, {
                          visible: unref(visibleRef),
                          imgs,
                          index: unref(indexRef),
                          onHide
                        }, null, 8, ["visible", "index"])
                      ])
                    ]),
                    createVNode("h2", { class: "mb-6 mt-12 text-center lg:text-left" }, " \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430 "),
                    createVNode("div", null, [
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://devtools.nuxt.com/",
                            target: "_blank",
                            class: "text-underline"
                          }, "NuxtDevTools"),
                          createTextVNode(" - \u0434\u0430\u0435\u0442 \u0432\u0430\u043C \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Nuxt ")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://ui.nuxt.com/",
                            target: "_blank",
                            class: "text-underline"
                          }, "NuxtUI"),
                          createTextVNode(" - \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 ")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://tailwindcss.com/",
                            target: "_blank",
                            class: "text-underline"
                          }, "Tailwindcss"),
                          createTextVNode(" - CSS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u0443\u0442\u0438\u043B\u0438\u0442\u044B ")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://nuxt.com/modules/easy-lightbox",
                            target: "_blank",
                            class: "text-underline"
                          }, "Nuxt Easy Lightbox"),
                          createTextVNode(" - \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438 ")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://github.com/highlightjs/vue-plugin",
                            target: "_blank",
                            class: "text-underline"
                          }, "highlightjs/vue-plugin"),
                          createTextVNode(" - \u043F\u043B\u0430\u0433\u0438\u043D \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0430 ")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", {
                            href: "https://icones.js.org/collection/heroicons",
                            target: "_blank",
                            class: "text-underline"
                          }, "HeroIcons"),
                          createTextVNode(", "),
                          createVNode("a", {
                            href: "https://icones.js.org/collection/material-symbols",
                            target: "_blank",
                            class: "text-underline"
                          }, "Material Symbols"),
                          createTextVNode(" - \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 ")
                        ])
                      ])
                    ]),
                    createVNode("h2", { class: "mb-6 mt-12 text-center lg:text-left" }, " \u041D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u044B "),
                    createVNode("div", null, [
                      createVNode("p", null, [
                        createTextVNode(" \u0412 \u043F\u0430\u043F\u043A\u0435 "),
                        createVNode(_component_UBadge, {
                          class: "dynamic-font-size",
                          label: "pages",
                          color: "gray"
                        }),
                        createTextVNode(" \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B "),
                        createVNode(_component_UBadge, {
                          class: "dynamic-font-size",
                          label: "test.vue",
                          color: "gray"
                        }),
                        createTextVNode(" \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C: ")
                      ]),
                      createVNode(_component_bodyCodeHL, {
                        code: unref(experiment),
                        class: "dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
                      }, null, 8, ["code"]),
                      createVNode("p", null, [
                        createTextVNode(" \u0414\u043B\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 "),
                        createVNode(_component_UBadge, {
                          class: "dynamic-font-size",
                          label: "default.vue",
                          color: "gray"
                        }),
                        createTextVNode(" \u0432 \u043F\u0430\u043F\u043A\u0435 "),
                        createVNode(_component_UBadge, {
                          class: "dynamic-font-size",
                          label: "layouts",
                          color: "gray"
                        }),
                        createTextVNode(" \u043D\u0430: ")
                      ]),
                      createVNode(_component_bodyCodeHL, {
                        code: unref(experimentLayout),
                        class: "dynamic-font-size mb-8 mt-2 rounded-lg overflow-hidden"
                      }, null, 8, ["code"]),
                      createVNode("p", null, [
                        createTextVNode("\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u0430\u0448\u0430 \u0442\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 "),
                        createVNode("a", {
                          href: "http://localhost:3000/test",
                          target: "_blank",
                          class: "text-underline"
                        }, "http://localhost:3000/test"),
                        createTextVNode(". \u0412\u044B \u043F\u043E\u043D\u044F\u043B\u0438 \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0432 Nuxt. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432, \u043E\u043D\u0438 \u043D\u0430\u0439\u0434\u0443\u0442\u0441\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0432\u044B\u0448\u0435.")
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-between mt-16 mb-8" }, [
                      createVNode(_component_NuxtLink, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode(_component_UButton, {
                            class: "flex sm:hidden",
                            icon: "i-heroicons-arrow-long-left",
                            size: "xl",
                            color: "primary",
                            variant: "outline",
                            trailing: false
                          }),
                          createVNode(_component_UButton, {
                            class: "hidden sm:flex",
                            icon: "i-heroicons-arrow-long-left",
                            size: "xl",
                            color: "primary",
                            variant: "outline",
                            label: " \u0412 \u041D\u0430\u0447\u0430\u043B\u043E",
                            trailing: false
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "/start/config" }, {
                        default: withCtx(() => [
                          createVNode(_component_UButton, {
                            class: "flex sm:hidden",
                            icon: "i-heroicons-arrow-long-right",
                            size: "xl",
                            color: "primary",
                            variant: "solid",
                            trailing: true
                          }),
                          createVNode(_component_UButton, {
                            class: "hidden sm:flex",
                            icon: "i-heroicons-arrow-long-right",
                            size: "xl",
                            color: "primary",
                            variant: "solid",
                            label: "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 ",
                            trailing: true
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "hidden lg:w-[25%] lg:inline-block" }, [
                  createVNode(_component_bodyRightMenuPage, { class: "sticky top-3" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89acf018"]]);

export { index as default };
//# sourceMappingURL=index-C8E71Ky8.mjs.map
