import type { App } from "vue";
import LoButton from "./lo-button/LoButton.vue";
import LoTypographyParagraph from "./lo-typography/LoTypographyParagraph.vue";
import "./style/index.less";

export default {
  // 注册组件
  install(app: App) {
    app.component("LoButton", LoButton);
    app.component("LoTypographyParagraph", LoTypographyParagraph);
  },
};
export { LoButton, LoTypographyParagraph };