import { _ as __nuxt_component_0$2, a as __nuxt_component_4, b as __nuxt_component_6 } from './page-CvbXpsT5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BZ1ngBfu.mjs';
import { a as useSeoMeta } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const titlePage = "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 Nuxt 3";
const descPage = "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0414\u043E 300 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
const _sfc_main = {
  __name: "config",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = __nuxt_component_4;
      const _component_bodyRightMenuPage = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "bg-[#ffffff] dark:bg-[#121212] py-8 mb-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="color-primary text-center mb-8"${_scopeId}>\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430</h1><div class="flex flex-col dynamic-font-size lg:flex-row"${_scopeId}><div class="w-full lg:w-[75%]"${_scopeId}><div class="lg:mr-8 h-full flex flex-col justify-between"${_scopeId}><div class="wglass w-[280px] mx-auto p-4 mt-32 dynamic-font-size text-center"${_scopeId}> \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435... </div><div class="flex justify-between mt-16 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/start" }, {
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
                    label: " \u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D",
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
                      label: " \u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D",
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
                    disabled: "",
                    class: "flex sm:hidden",
                    icon: "i-heroicons-arrow-long-right",
                    size: "xl",
                    color: "primary",
                    variant: "solid",
                    trailing: true
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    disabled: "",
                    class: "hidden sm:flex",
                    icon: "i-heroicons-arrow-long-right",
                    size: "xl",
                    color: "primary",
                    variant: "solid",
                    label: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 ",
                    trailing: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      disabled: "",
                      class: "flex sm:hidden",
                      icon: "i-heroicons-arrow-long-right",
                      size: "xl",
                      color: "primary",
                      variant: "solid",
                      trailing: true
                    }),
                    createVNode(_component_UButton, {
                      disabled: "",
                      class: "hidden sm:flex",
                      icon: "i-heroicons-arrow-long-right",
                      size: "xl",
                      color: "primary",
                      variant: "solid",
                      label: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 ",
                      trailing: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="hidden lg:w-[25%] lg:inline-block"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_bodyRightMenuPage, { class: "sticky top-3" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("h1", { class: "color-primary text-center mb-8" }, "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430"),
              createVNode("div", { class: "flex flex-col dynamic-font-size lg:flex-row" }, [
                createVNode("div", { class: "w-full lg:w-[75%]" }, [
                  createVNode("div", { class: "lg:mr-8 h-full flex flex-col justify-between" }, [
                    createVNode("div", { class: "wglass w-[280px] mx-auto p-4 mt-32 dynamic-font-size text-center" }, " \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435... "),
                    createVNode("div", { class: "flex justify-between mt-16 mb-8" }, [
                      createVNode(_component_NuxtLink, { to: "/start" }, {
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
                            label: " \u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D",
                            trailing: false
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "/start/config" }, {
                        default: withCtx(() => [
                          createVNode(_component_UButton, {
                            disabled: "",
                            class: "flex sm:hidden",
                            icon: "i-heroicons-arrow-long-right",
                            size: "xl",
                            color: "primary",
                            variant: "solid",
                            trailing: true
                          }),
                          createVNode(_component_UButton, {
                            disabled: "",
                            class: "hidden sm:flex",
                            icon: "i-heroicons-arrow-long-right",
                            size: "xl",
                            color: "primary",
                            variant: "solid",
                            label: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 ",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=config-obuynSvJ.mjs.map
