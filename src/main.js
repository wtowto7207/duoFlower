import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main','pages/counter/main','pages/my/main'],
    tabBar: {
      "color":"#898989",
      "selectedColor":"#000000",
      "list": [{
        "iconPath":"static/asset/img/wikiIconPath.png",
        "selectedIconPath":"static/asset/img/wikiSelectedIconPath.png",
        "pagePath": "pages/wiki/main",
        "text": "百科"
      },{
        "pagePath": "pages/index/main",
        "text": "首页"
      }, {
        "pagePath": "pages/my/main",
        "text": "个人中心"
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'duoduo',
      navigationBarTextStyle: 'black'
    }
  }
}
