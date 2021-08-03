// pages/mydate/mydate/mydate.js
const {formatTime}=require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentInfo:{},
    restday:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const currentInfo = JSON.parse(options.dateinfo)
    this.setData({
      currentInfo
    })
    const resday = new Date(currentInfo.date).getTime() - new Date().getTime()
    // console.log(resday/ (1000*3600*24))
    this.setData({
      restday:Math.floor(resday/ (1000*3600*24)) + 1
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gotolist(){
    wx.switchTab({
      url: '../../../pages/tabbar/index/index'
    })
  }
})