//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toList: function () {
    wx.navigateTo({
      url: '../card-list/index',
    })
  },
  toRead: () => {
    wx.navigateTo({
      url: '../read/index'
    });
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    console.log('userinfo-->', e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    let encryptedData = e.detail.encryptedData;
    let iv = e.detail.iv;
    let rawData = e.detail.rawData;
    let signature = e.detail.signature;
    let sessionKey = app.globalData.sessionKey;

    wx.request({
      url: 'https://honeywen.com/wx/user/' + app.globalData.appKey.appid + '/info',
      method: 'GET',
      data: {signature: signature, sessionKey: sessionKey, rawData: rawData, iv: iv, encryptedData: encryptedData},
      success: res=>{
        console.log('/wx/info-->', res);

      }
    })

  }
})
