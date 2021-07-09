// pages/video/video.js

function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos:[],
    inputValue:"",
    video_src:"",
    title:"",
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.videoId);
    var bean = JSON.parse(options.videoId);
    this.setData({
      video_src:bean
    })

    // this.title = options.type || '我的'
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

// ---------------------------------------------登录--------------------------------------------
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

// -------------------------------------------登录END--------------------------------------------
// ------------------------------------------发送弹幕------------------------------------------
  // bindInputBlur:function(e) {
  //   this.inputValue = e.detail.value
  //   console.log(this.inputValue)
  // },
  // 绑定按钮事件
  bindSendDanmu () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
      
    })
  },
// ------------------------------------------发送弹幕end------------------------------------------
// ------------------------------------------发送评论------------------------------------------
user_submit:function(e){
  

  var that = this
  // console.log(that.content)
  // console.log(e.target.id)
  if (e.target.id == "") {
    var toastText='请先登录再评论！'
    wx.showToast({
      title: toastText,
      icon:'none',
      duration:3000
    })
  }else{
    wx.request({
      url: 'http://localhost:8080/addComment?username='+e.target.id+'&content='+that.data.content
    })
    wx.showToast({
      title: '留言成功',
      icon: 'success',
      duration:3000
    })
  }
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myvideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/listComment',
      method:'GET',
      data:{},
      success:function(res){
        var Comments = res.data;
        if(Comments == null){
          var toastText = '获取数据失败' + res.data.msg;
          wx.showToast({
            title: toastText,
            icon:'',
            duration:3000
          })
        }else{
          that.setData({
            Comments:Comments
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/listComment',
      method:'GET',
      data:{},
      success:function(res){
        var Comments = res.data;
        if(Comments == null){
          var toastText = '获取数据失败' + res.data.msg;
          wx.showToast({
            title: toastText,
            icon:'',
            duration:3000
          })
        }else{
          that.setData({
            Comments:Comments
          })
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  titleInput:function(e){
    console.log(e.detail.value)
    this.setData({
      content:e.detail.value
    })
  }
})