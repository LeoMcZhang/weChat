//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    account: '',
    psw: ''
  },
  // 钩子函数
  onLoad: function () {
  },
  loginTap: function () {
    var reg = /^[a-zA-Z0-9]{5,10}/,
        account = this.data.account,
        obj
    if (reg.test(account)) {
      obj = {'account': account}
      wx.setStorage({
        key: 'accountInfo',
        data: obj,
        success: function () {
          wx.navigateBack()
        }
      })
    } else {
      wx.showToast({
        title: '反正你就是错了',
        image: '/assets/image/error.png',
        duration: 3000
      })
    }
    console.log(account)
  },
  indexTap: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  bindAccountInput: function (e) {
    this.setData({
      account: e.detail.value.trim()
    })
  },
  bindPswInput: function (e) {
    this.setData({
      psw: e.detail.value.trim()
    })
  },
})
