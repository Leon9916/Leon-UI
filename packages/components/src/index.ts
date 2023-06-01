import type { App } from "vue";
import LoButton from "./lo-button/LoButton.vue";
import "./style/index.less";

export default {
  install(app: App) {
    app.component("LoButton", LoButton);
  },
};
export { LoButton };