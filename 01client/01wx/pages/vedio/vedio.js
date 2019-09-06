Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1
  },

  changeOil: function (e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight;
        that.setData({
          height: buffer
        });
      },
    })

  },
  // 发布信息
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })
  },

  // redirectTo: function () {
  //   wx.redirectTo({
  //     url: '../page3/page3',
  //   })
  // },

  backHome: function () {
    wx.navigateTo({
      url: '../home/home',
    })
  },
  back: function () {
    wx.navigateBack({})
  },
  // redirectTo: function () {
  //   wx.redirectTo({
  //     url: '../05page/05page',
  //   })
  // },
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

  }
})