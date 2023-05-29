export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Leon-UI\",\"description\":\"基于vuepress作为文档管理，对Element-plus二次封装的一个UI库\",\"head\":[],\"locales\":{\"/\":{\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://p3-passport.byteimg.com/img/user-avatar/d8bc7351ac3c93b11cd3146be24a0cba~100x100.awebp\"}]]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
