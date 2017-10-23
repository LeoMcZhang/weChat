//index.js
//获取应用实例
const app         = getApp(),
      playListFun = require('../playList/index.js')

Page({
  data: {
    id          : 0,
    playlist    : [],
    privileges  : []
  },
  // 钩子函数
  onLoad: function (option) {
    this.getDetail(option.id)
  },
  onShow: function () {
  },
  getDetail: function (id) {
    var path  = 'playlist/detail',
        data  = {id: id},
        _this = this
    app.GetData(path, data).get(function(e) {
      _this.setData({
        playlist    : e.data.playlist,
        privileges  : e.data.privileges
      })
      console.log(_this.data.playlist)
      // 修改头部标题
      wx.setNavigationBarTitle({
        title: e.data.playlist.name || '列表详情'// 页面标题为路由参数
      })
    })
  },
  listTap: function () {
    playListFun()
  }
})
