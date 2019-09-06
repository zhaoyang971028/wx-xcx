// pages/user/user.js
//1
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:null,
    width:null,
    num:0,
    userInfo: { nickName:"你好"},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /* 获得屏幕宽高 */
  onLoad: function () {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
    console.log(this.data.height)
    console.log(this.data.width)
   
     if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        num: 1
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } 
    
    
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
      
    }) 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onShareAppMessage: function () {

  },
  backhome:function(){
    wx.redirectTo({
      url: '../home/home',
    })
  },
  chooseImage: function () {
    console.log(1111)
    let that = this;
    console.log(this.data.num)
    if(this.data.num>=1){
      wx.chooseImage({
        count: 1, // 默认9
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: ['original', 'compressed'],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ['album', 'camera'],
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        success: function (res) {

          var tempFilePaths = res.tempFilePaths
          let buffer = that.data.userInfo;
          buffer.avatarUrl = tempFilePaths;
          that.setData({
            /* userInfo: {avatarUrl:tempFilePaths} */
            userInfo: buffer
          });
        }
      })
    }
  }
})