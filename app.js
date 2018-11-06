//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        const ctx = this;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('wx.login-->', res);
        let url = 'https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&js_code=';
        wx.request({
          url: url + res.code,
          method: 'GET',
          data: ctx.globalData.appKey,
          success(result){
            console.log('openid-->{}', result);

          }
        });
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('wx.getUserInfo-->', res);

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    appKey: {
      appid: 'wxd8871037033bb213',
      secret: 'd4d6d680d855162b2b4763433c9ff3b5'
    }
  }
})