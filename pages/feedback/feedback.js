// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    del:true,
    edit:false
  },

  //点击编辑 显示按钮
  edit_text(){
    this.setData({
      del: false,
      edit: true
    })
    console.log("编辑...............显示"+this.data.del)
  },

  //点击删除 隐藏按钮
  delete_text(){
    this.setData({
      del: true,
      edit: false
    })
    console.log("删除...............隐藏"+this.data.del)
  },

  feedback(){
    wx.navigateTo({
      url: '../feedbackInfo/feedbackInfo',
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

  },
  to_feedback_info(){
    wx.navigateTo({
      url: '/pages/feedbackInfo/feedbackInfo',
    })
  }
})