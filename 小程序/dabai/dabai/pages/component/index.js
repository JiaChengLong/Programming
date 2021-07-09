Page({
  //事件处理函数
// ***************************页面跳转**************************
book :function(event)
  {
    console.log("跳转");
    wx.navigateTo({
      url:'../book/book'
    })
  },
  // *-************************页面跳转结束********************************

  onLoad: function (options) {
    this.title = options.type || '书籍'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13359166204',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
})
