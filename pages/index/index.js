//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    bannerData: [],
    djList: [],
    hotList: []
  },
  // 钩子函数
  onLoad: function () {
    this.getBanner()
    this.getDjList()
    this.getHotList()
  },
  getBanner: function () {
    var path = 'banner',
        data = {},
        _this = this
    app.GetData(path, data).get( function(e) {
      _this.setData({
        bannerData: e.data.banners
      })
    })
  },
  getHotList: function () {
    var path = 'personalized',
        data = {},
        _this = this
    app.GetData(path, data).get( function(e) {
      _this.setData({
        hotList: e.data.result
      })
    })
  },
  getDjList: function () {
    var path = 'djradio/hot',
        data = {},
        _this = this
    app.GetData(path, data).get( function(e) {
      _this.setData({
        djList: e.data.djRadios
      })
    })
  },
  moreDjTap: function () {
    wx.navigateTo({
      url: '/pages/moreDjList/index'
    })
  },
  scrollLower: function () {
    wx.showToast({
      title: '到底了！！！',
      image: '/assets/image/cm2_play_icn_yizan@2x.png'
    })
  }
})
