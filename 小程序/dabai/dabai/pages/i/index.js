//index.js
//获取应用实例
var app = getApp()

var backcolor = "#3197ed"//设置初始值
var background
// const util = require('../../utils/util.js')
Page( {
  data: {
    ColorList: app.globalData.ColorList,
    backgroundColor:'',
    color: "#fadbd9",
  },

  // ********************************用户登录****************************************
  onLoad: function (options) {
    // this.title = options.type || '我的'
    wx.setStorage({
      key: 'backgroundColor',
      data: this.data.backgroundColor
      })
      var that = this //注意这里
      wx.getStorage({
      key: 'backgroundColor',
      success(res) {
      console.log(res.data)
      that.setData({
      backgroundColor: res.data
    })
  }
})

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // *******************************用户登录结束*****************************

  red: function () {
    background = "#F4A7B9"
    this.setData({
      background: background
    })
    app.globalData.background = background
    wx.setNavigationBarColor({//设置导航栏颜色
      frontColor: '#000000',//注意frontColor的值只能为000000或者111111
      backgroundColor: app.globalData.background
    });
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
  click: function (e) {
    wx.openLocation({
      latitude: 34.104230,
      longitude: 108.651149,
      scale: 18,
      name: '陕西省西安市西安石油大学鄠邑校区计算机学院',
      address: '陕西省西安市西安石油大学鄠邑校区计算机学院'
    })
  },  
})