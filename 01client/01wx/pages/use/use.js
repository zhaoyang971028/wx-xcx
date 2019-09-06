// pages/01itemPage/01itemPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    indexSelect:0,
    nr:[
      { 
        url1:"https://mp4.vjshi.com/2018-12-08/e2a0ed29aabd5bb14c10fe143e8ea6b2.mp4",
        title1: "《AP微积分满分教程》配套视频教程",
        content1:"TI-Ns图形计算器使用教程—基本操作教学",
        url2:"https://mp4.vjshi.com/2018-06-22/064aacabd89b9499a482397d9a755928.mp4",
        title2: "备考AP——必备教材",
        content2: "中英文结合教材，易理解，上手快",
        url3:"https://mp4.vjshi.com/2019-07-19/5b60a7d67439e69c78112b202754da38.mp4",
        title3: "关注作者微信公众号",
        content3: "留学数学满分课堂（mathwinner）获取更多",
      },
      {
        url1: "https://mp4.vjshi.com/2018-12-08/e2a0ed29aabd5bb14c10fe143e8ea6b2.mp4",
        title1: "点击右侧观看视频",
        content1: "",
        url2: "https://mp4.vjshi.com/2018-06-22/064aacabd89b9499a482397d9a755928.mp4",
        title2: "点击右侧观看视频",
        content2: "",
        url3: "https://mp4.vjshi.com/2019-07-19/5b60a7d67439e69c78112b202754da38.mp4",
        title3: "点击右侧观看视频",
        content3: "",
      }
    ]
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
  toHome: function () {
    wx.navigateBack({
    })
  },
  changeTab: function (e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num,
      indexSelect: e.target.dataset.num
    })
    
  }
})