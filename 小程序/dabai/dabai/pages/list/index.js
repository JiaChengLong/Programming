var app = getApp()
var backcolor = "#3197ed"//设置初始值
var background
Page({
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '课程'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  onShow: function () {
    var that = this;
      wx.request({
        url: 'http://localhost:8080/listImg',
        success:function(res){
          var imgs = res.data;
          if(imgs == null){
            var toastText = '获取数据失败' + res.data.msg;
            wx.showToast({
              title: toastText,
              icon:'',
              duration:3000
            })
          }else{
            that.setData({
              imgs:imgs
            })
          }
        }
      })

  },



  data: {
    navbar: ['全部', '学习区', '休闲区'],
    currentTab: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  showList: function(){
    emps:[]
  },
  playVideo: function(e){
    console.log(e.target.id)
    
    wx.navigateTo({
      url: "../video/video?videoId="+e.target.id,
    })
  },
  playVideofake:function(){
    wx.navigateTo({
      url: '../userupload/userupload',
    })
  }
  
})

