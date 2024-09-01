import { b as __nuxt_component_2 } from './server.mjs';
import { a as __nuxt_component_4 } from './page-CvbXpsT5.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CodeHL",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const btnCopy = ref("i-material-symbols-copy-all-outline");
    const code = ref(props.code);
    function copyToClipboard() {
      (void 0).clipboard.writeText(code.value).then(() => {
        btnCopy.value = "i-material-symbols-check-rounded";
        setTimeout(() => {
          btnCopy.value = "i-material-symbols-copy-all-outline";
        }, 3e3);
      }).catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_UButton = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "absolute top-2 right-2",
        icon: unref(btnCopy),
        size: "sm",
        color: "primary",
        square: "",
        variant: "ghost",
        onClick: copyToClipboard
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/body/CodeHL.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CodeHL-By1WnSU0.mjs.map
