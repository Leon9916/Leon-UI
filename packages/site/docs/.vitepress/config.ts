import { version } from "../../package.json";
import { defineConfig } from "vitepress";
import vitePluginVitepressDemo from "vite-plugin-vitepress-demo";

export default defineConfig({
  outDir: '../../../docs',
  vite: {
    plugins: [
      vitePluginVitepressDemo({
        glob: ["**/demo/**/*.vue"], // 指定需要处理的文件
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  appearance: false, // 夜间模式切换
  title: "Leon UI",
  description: "Vue基础组件库",
  lang: "zh-CN",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "https://p3-passport.byteimg.com/img/user-avatar/d8bc7351ac3c93b11cd3146be24a0cba~100x100.awebp" }]],
  themeConfig: {
    siteTitle: "Leon UI",
    logo: "https://p3-passport.byteimg.com/img/user-avatar/d8bc7351ac3c93b11cd3146be24a0cba~100x100.awebp",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/Button.html" },
      {
        text: version,
        items: [
          {
            text: "变更日志",
            link: "/changelog/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/Button" }
          ],
        },
      ],
    },
  },
});

