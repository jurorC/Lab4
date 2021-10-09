// pages/page01/page01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  setting:function(){
    wx.navigateTo({
      url: '/pages/setting/setting',
    })
  },

  Single:function(){
     wx.navigateTo({
       url: '/pages/page02/page02',
     })
  },

  Multi:function(){
    wx.navigateTo({
      url: '/pages/page03/page03',
    }) 
  },

  feedBcak:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
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