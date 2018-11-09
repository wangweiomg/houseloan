// pages/add-card/add-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    cardLimit: '',
    billDay: '',
    repayDayType: '1',
    repayDayNum: '',
    radio: '1',
    repayDayTypeTitle: '',
    title1: '固定还款日 n',
    title2: '账单日后 n 天',
    switch1: true
  },

  save: function(e) {
    console.log(this.data);
    wx.request({
      url: 'http://honeywen.com/card/save',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: this.data,
      success(res) {
        console.log(res)
      }
    })

  },
  onChange: function(event) {
    // event.detail 为当前输入的值
    console.log(event);
    let value = event.detail;
    switch (event.target.id) {
      case 'name':
        this.setData({
          name: value
        });
        break;
      case 'cardLimit':
        this.setData({
          cardLimit: value
        });
        break;
      case 'billDay':
        this.setData({
          billDay: value  
        });
        break;
      case 'repayDayType':
        this.setData({
          repayDayType: value
        });
        break;
      case 'repayDayNum':
        this.setData({
          repayDayNum: value
        });
        break;
      default:
        break;
    }
    console.log(this.data);
  },
  bindDayChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      day: e.detail.value
    })
  },
  radioChange(e){
    console.log(e);
    this.setData({
      radio: e.detail,

    });

    console.log(this.data);
  }, 
  switchChange(e){
    const detail = e.detail;
    if (detail.value) {
      this.setData({
        'repayDayType': 1,
        'switch1': detail.value
      });
    } else {
      this.setData({
        'repayDayType': 2,
        'switch1': detail.value

      });
    }

  },
  
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})