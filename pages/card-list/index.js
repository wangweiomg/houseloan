Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCount: 0,
    totalLimit: 0,
    cardList: [],
    card1: { name: '光大信用卡', billDay: 16, payDay: 4 }
  },
  clickMe: function () {

    this.setData({
      message: '你好，世界!'
    })
  },
  addCardView: function() {
    wx.navigateTo({
      url: '../card-add/index',
    })

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let url = "https://honeywen.com/card/list";
    const ctx = this;
    wx.request({
      url: url,
      method: 'GET',
      success(res) {

        let limit = 0;
        for (let i of res.data) {
          limit += i.cardLimit;
        }
        ctx.setData({
          cardList: res.data,
          cardCount: res.data.length,
          totalLimit: limit
        })
      }
    })
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