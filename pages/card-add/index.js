// pages/add-card/add-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repayDayType: '1',
    multipleNum: '',
    title1: '固定还款日 n',
    title2: '账单日后 n 天',
    switch1: true
  },

  formSubmit: function (e) {
    let param = e.detail.value;
    param.repayDayType = this.data.repayDayType;
    param.multipleNum = this.data.multipleNum;
    console.log('form发生了submit事件，携带数据为：', e.detail.value, param)
    wx.request({
      url: 'https://honeywen.com/card/save',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: param,
      success(res) {
        console.log(res)
        wx.navigateTo({
          url: '../card-list/index',
        })
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
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
  switch2Change(e) {
    const detail = e.detail;
    if (detail.value) {
      this.setData({
        'multipleNum': 5 ,
        'switch2': detail.value
      });
    } else {
      this.setData({
        'multipleNum': '',
        'switch2': detail.value
      });
    }
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