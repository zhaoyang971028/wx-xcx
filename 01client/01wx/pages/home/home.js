// pages/01itemPage/01itemPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '500',
    indexSelect: 0,
    topics: [{
      id: 0,
      title: "满分课堂"
    }, {
      id: 1,
      title: "留学指南"
    }, {
      id: 2,
      title: "发现"
    }, {
      id: 3,
      title: "个人中心"
    }]
  },
  onLoad: function () {


    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let buffer = (750 / res.windowWidth) * res.windowHeight - 80;
        that.setData({
          height: buffer
        });
      },
    })

  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    console.log(res)
    let id = res.currentTarget.dataset.zy;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },
  toExaminationInfor: function () {
    wx.navigateTo({
      url: '../discover/discover',
    })
  },
  toUse: function () {
    wx.navigateTo({
      url: '../use/use',
    })
  }
})

 