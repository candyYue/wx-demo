// pages/mydate/adddate/adddate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:'',
    date: '',
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  getInputValue(e){
    this.setData({
      inputvalue:e.detail.value
    })
  },
  comfirm(){
    const form =[{
      des:this.data.inputvalue,
      date:this.data.date
    }]
    
    var StorageInfo = wx.getStorageInfoSync()
    if(StorageInfo.keys.includes('countdown')){
      wx.getStorage({
        key: 'countdown',
        success(res){
          const pre = JSON.parse(res.data)
          const countdown = pre.push(form)
          wx.setStorageSync('countdown',
          JSON.stringify(countdown))
        }
      })
    }else{
      wx.setStorageSync('countdown',
      JSON.stringify(form))
    }
  },
  cancel(){
    wx.navigateBack()
  }
})