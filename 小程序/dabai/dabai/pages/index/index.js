//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {

    urls:'/pages/video/video',
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
       '/image/1.jpg',
       '/image/2.jpg',
       '/image/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },



    // nav
   

    // item
    index_index_items_tmpl: {
      items: [

      ]
    }
  },
  // ********************跳转至视频播放界面（vedio）****************************
  video :function(e)
  {
    console.log(e.target.id);
    
    this.setData({
      video_src:"http://localhost:8080"+e.target.id
    })
      wx.navigateTo({
      url:'../video/video'
    })
  },
playvideo:function(e){
  wx.navigateTo({
    url:'../userupload/userupload'
  })
},


  book :function(event)
  {
    console.log("跳转");
    wx.navigateTo({
      url:'../book/book'
    })
  },

  
  // ***********************************************************

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },
  onReady:function(){
    this.VideoContext=wx.createVideoContext('myvideo')
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18888888888',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //http://lbs.qq.com/tool/getpoint/ 坐标拾取器
  click: function (e) {
    wx.openLocation({
      latitude: 34.104230,
      longitude: 108.651149,
      scale: 18,
      name: '陕西省西安市西安石油大学鄠邑校区计算机学院',
      address: '陕西省西安市西安石油大学鄠邑校区计算机学院'
    })
  },  

  showList: function(){
    emps:[]
  },
  showData:function(){
    var that = this
    wx.request({
      url: 'http://localhost:8080/showData', 
      success (res) {
        that.setData({
          emps: res.data
        })
      }
    })
  }

})