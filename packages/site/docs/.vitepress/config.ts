import { version } from "../../package.json";
import { defineConfig } from "vitepress";
import vitePluginVitepressDemo from "vite-plugin-vitepress-demo";

export default defineConfig({
  outDir: '../../../docs', // 修改打包之后文件的目录
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
  head: [["link", { rel: "icon", href: "https://cdn-us.imgs.moe/2023/06/13/64885bcb8efd8.png" }]],
  themeConfig: {
    siteTitle: "Leon UI",
    logo: "https://cdn-us.imgs.moe/2023/06/13/64885bcb8efd8.png",
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
            { text: "Button 按钮", link: "/components/Button" },
            { text: "Icon 图标", link: "/components/Icon" },
            { text: "Typography 排版", link: "/components/Typography" },
          ],
        },
      ],
    },
  },
});

