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
  clickMe: function () {
    wx.navigateTo({
      url: '../card-list/index',
    })
  },
  toEdit: () => {
    wx.navigateTo({
      url: '../card-update/index',
    })
  },
  addCardView: function () {
    wx.navigateTo({
      url: '../card-add/index',
    })

  },
  sendMsg: ()=>{
    console.log('send');
    let url1 = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd8871037033bb213&secret=d4d6d680d855162b2b4763433c9ff3b5";

    let url = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=";
    let templateURl = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token="
    const ctx = this;
    wx.request({
      url: url1,
      method: 'GET',
      success(res) {
        console.log(res);
        let token = res.data.access_token;

        let param = {
          touser: 'oMRgU0VI8fJnvgE472EIVOTUmVuc',
          msgtype: 'text',
          "text": {
            content: 'hello world'
            }
        
        };
        let param2 = {
          touser: 'oMRgU0VI8fJnvgE472EIVOTUmVuc',
          template_id: 'rZqHkCsuzIlmTcs-F_gEK06AEjjDxRb3XsH4lYsXu2o',
          page: 'index',
          form_id: '1541515433598'

        };
        wx.request({
          url: templateURl + token,
          method: 'POST',
          data: param2,
          success(result) {
            console.log('send msg-->', result);
          }
        });
      }
    })

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.formId, e.detail.value)
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
