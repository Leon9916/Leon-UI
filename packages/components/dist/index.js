import { defineComponent, openBlock, createBlock, unref, withCtx, createElementBlock, Fragment, renderList, renderSlot } from "vue";
import { Button } from "ant-design-vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoButton",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.$slots), (name) => {
            return renderSlot(_ctx.$slots, name);
          }), 256))
        ]),
        _: 3
      });
    };
  }
});
const index$1 = "";
const index = {
  install(app) {
    app.component("LoButton", _sfc_main);
  }
};
export {
  _sfc_main as LoButton,
  index as default
};
