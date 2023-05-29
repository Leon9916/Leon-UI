import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Leon-UI',
  description: '基于vuepress作为文档管理，对Element-plus二次封装的一个UI库',
  locales:{
     "/":{
      head: [['link', { rel: 'icon', href: 'https://p3-passport.byteimg.com/img/user-avatar/d8bc7351ac3c93b11cd3146be24a0cba~100x100.awebp' }]]
     }
  },
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: 'GitHub',
        link: 'https://leon9916.github.io/',
      }
    ],
    sidebar: [
      {
        text: 'guide',
        link: '/guide',
      },
      {
        text: 'test',
        link: '/test2',
      },
    ]
  })
})