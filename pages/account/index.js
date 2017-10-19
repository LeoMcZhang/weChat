//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    accountInfo: {}
  },
  // 钩子函数
  onShow: function () {
    var _this = this
    wx.getStorage({
      key: 'accountInfo',
      success: function (res) {
        _this.setData({
          accountInfo: res.data
        })
      },
      fail: function () {
        wx.showToast({
          title: '请先登录',
          image: '/assets/image/error.png'
        })
        wx.navigateTo({
          url: '/pages/login/index'
        })
      },
    })
  },
  onHide: function () {
    console.log('page=>account onHide')
  },
  onUnLoad: function () {
    console.log('page=>account onUnLoad')
  }
})
