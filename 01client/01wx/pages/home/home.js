
// pages/01itemPage/01itemPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '500',
    indexSelect: 0,
    url:[
      '../home/home',
      '../studyaBboard/studyaBboard',
      '../discover/discover',
      '../user/user'
    ],
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
    }],
    num: 0,
    userInfo: { nickName: "你好" },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    });
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
  clickTopItem: function (res) {
    //获得传递过来的数据
    console.log(res)
    let id = res.currentTarget.dataset.zy;
    console.log(isNaN(id))
    if(isNaN(id)){
      let id = res.currentTarget.dataset.id;
      console.log(id)
      wx.navigateTo({
        url: this.data.url[id],
      })
    }else{
      //把index换成id
      this.setData({
        indexSelect: id
      });
      wx.navigateTo({
        url: this.data.url[id],
      })
    }


  },
  toVedio: function () {
    wx.navigateTo({
      url: '../vedio/vedio',
    })
  },
  toPlan: function () {
    wx.navigateTo({
      url: '../plan/plan',
    })
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
  },
  userMsg: function () {
    wx.navigateTo({
      url: '../user/user',
    })
  }
})

 