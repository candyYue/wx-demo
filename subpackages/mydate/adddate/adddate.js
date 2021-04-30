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
  clearForm(){
    this.setData({ inputvalue:''})
    this.setData({ date:''})
  },
  comfirm(){
    const form ={
      des:this.data.inputvalue,
      date:this.data.date
    }
    var StorageInfo = wx.getStorageInfoSync()
    if(StorageInfo.keys.includes('dateList')){
      wx.getStorage({
        key: 'dateList',
        success:(res)=>{
          const pre = JSON.parse(res.data)
          const dateList = pre.concat(form)
          wx.setStorageSync('dateList',
          JSON.stringify(dateList))
          this.clearForm()
        }
      })
    }else{
      wx.setStorageSync('dateList',
      JSON.stringify([form]))
      this.clearForm()
    }
  },
  cancel(){
    wx.navigateBack()
  }
})