// pages/update-card/update-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repayDayType: '',
    switch1: true,

    id: '',
    name: '',
    billDay: '',
    repayDayNum: '',
    cardLimit: ''
  
  },

  switchChange: function(e) {
    const flag = e.detail.value;
    if (flag) {
      this.setData({
        'repayDayType': 1,
        'switch1': flag
      });
    } else {
      this.setData({
        'repayDayType': 2,
        'switch1': flag

      });
    }

  },
  formSubmit: function (e) {
    let param = e.detail.value;
    param.repayDayType = this.data.repayDayType;
    param.id = this.data.id;
    console.log('form发生了submit事件，携带数据为：', param)
    wx.request({
      url: 'https://honeywen.com/card/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: param,
      success(res) {
        console.log(res)
        wx.redirectTo({
          url: '../card-list/index',
        })
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id: options.id,
      name: options.name,
      billDay: options.billDay,
      repayDayNum: options.repayDayNum,
      cardLimit: options.cardLimit,
      repayDayType: options.repayDayType
    });

    if (options.repayDayType === '2') {
      this.setData({
        switch1: false
      });
    }
    

  
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
  
  }
})