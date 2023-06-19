import { defineComponent, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, renderSlot } from "vue";
import { Button, TypographyParagraph } from "ant-design-vue";
const defaultPrefixCls = "leonui";
function usePrefixCls(suffixCls) {
  return `${defaultPrefixCls}-${suffixCls}`;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoButton",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        "prefix-cls": unref(usePrefixCls)("btn")
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.$slots), (name) => {
            return renderSlot(_ctx.$slots, name);
          }), 256))
        ]),
        _: 3
      }, 8, ["prefix-cls"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoTypographyParagraph",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(TypographyParagraph));
    };
  }
});
const index$1 = "";
const index = {
  // 注册组件
  install(app) {
    app.component("LoButton", _sfc_main$1);
    app.component("LoTypographyParagraph", _sfc_main);
  }
};
export {
  _sfc_main$1 as LoButton,
  _sfc_main as LoTypographyParagraph,
  index as default
};
