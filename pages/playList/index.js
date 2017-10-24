//index.js
//获取应用实例

function listTap (id, br, wx) {
  var path = '/pages/playPage/playPage?id=' + id + '&br=' + br
  console.log(path)
  wx.navigateTo({
    url: path
  })
}

module.exports = listTap