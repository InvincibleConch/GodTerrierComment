const config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaContent   : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.nextAssess();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let id = wx.getStorageSync('shareId') // 分享产品的Id
    console.log("转发");
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发标题',
      path: 'pages/index/index' // 分享后打开的页面
    }
  },

  copyAssess:function(){
    wx.setClipboardData({
      data: this.data.evaContent,
      success: function (res) {
        wx.getClipboardData({
          //这个api是把拿到的数据放到电脑系统中的
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },

  /**
   * 再来一条
   */
  nextAssess:function(){
    console.log("再来一条");
    wx.request({
      url: config.serverUrl+'MusicSongAssess/get', //仅为示例，并非真实的接口地址
      // url: "https://localhost:8443/MusicSongAssess/get",
      method:"POST",
      data: {
        x: '1',
        y: '2'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=> {
        console.log(res.data);
        console.log(res.data.code);
        if(res.data.code == '200'){
          console.log("111111");
          this.setData({
            evaContent : res.data.data.assessText
         });
        }
      }
    })
  }

})