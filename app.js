//app.js
App({
  onLaunch: function() {
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
     

        let url = 'https://honeywen.com/wx/user/' + ctx.globalData.appKey.appid + '/login?code=' + res.code;
        wx.request({
          url: url,
          method: 'GET',
          data: ctx.globalData.appKey,
          success(result) {
            let sessionKey = result.data.sessionKey;
            let openid = result.data.openid;
            console.log('wx/user/result-->', result, sessionKey, openid);
            ctx.globalData.openid = openid;
            ctx.globalData.sessionKey = sessionKey;
          }
        });
      }
    });
    
  },
  globalData: {
    userInfo: null,
    openid: null,
    sessionKey: null,
    appKey: {
      appid: 'wxd8871037033bb213',
      secret: 'd4d6d680d855162b2b4763433c9ff3b5'
    }
  }
})