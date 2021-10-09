// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider2: 80,
    slider3: 60,
    slider4: 40
  },
  changeSlider2(e){
    this.setData({ slider2: e.detail.value})
  },
  changeSlider3(e){
    this.setData({ slider3: e.detail.value})
  },
  changeSlider4(e){
    this.setData({ slider4: e.detail.value})
  },
  music:function(){
    wx.navigateTo({
      url: '/pages/backgroundAudio/backgroundAudio',
    })
  },
  back:function(){
    wx.redirectTo({
      url: '/pages/page01/page01',
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