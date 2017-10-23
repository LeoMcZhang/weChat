//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  // 钩子函数
  onLoad: function (option) {
    console.log(option.id)
  },
  onShow: function () {
  },
  returnIndex: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
