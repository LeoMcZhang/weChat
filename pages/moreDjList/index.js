//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  // 钩子函数
  onLoad: function () {
  },
  returnIndex: function () {
    console.log(1)
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
