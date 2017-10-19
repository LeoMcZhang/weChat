//app.js
var baseUrl = require('utils/baseUrl.js')

App({
  onLaunch: function () {
    // 清除 accountInfo 本地缓存
    // wx.removeStorage({
    //   key: 'accountInfo'
    // })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 全局变量
  globalData: {
    userInfo: null,
    // 自己添加的数据
    anyData: {
      key1: '填一些没有素质的话语'
    }
  },
  // 请求
  GetData: function (path, data) {
    var _this = this
    path = baseUrl + path
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    })
    return {
      'get': function ( then ) {
        wx.request({
          url: path,
          data: data,
          method: 'get',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // console.log(res, '请求完成，状态码：' + res.statusCode)
            if ( _this.judgeCode(res) ) {
              wx.hideToast()
              then(res)
            }
          },
          fail: function (err) {
            wx.showToast({
              title: '请求失败',
              image: '/assets/image/error.png',
              duration: 3000
            })
          }
        })
      },
      'post': function (then) {
        wx.request({
          url: path,
          data: data,
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) {
            if ( _this.judgeCode(res) ) {
              wx.hideToast()
              then(res.data)
            }
          },
          fail: function (err) {
            wx.showToast({
              title: '请求失败',
              image: '/assets/image/error.png',
              duration: 3000
            })
          }
        })
      }
    }
  },
  // 判断状态码
  judgeCode: function (res) {
    if (/^[23]/.test(res.statusCode)) {
      return true
    } else if (/^[45]/.test(res.statusCode)) {
      console.log('err错误码：'+res.statusCode)
      wx.showToast({
        title: '网络异常',
        image: '/assets/image/error.png',
        duration: 3000
      })
      return false
    }
  },
})