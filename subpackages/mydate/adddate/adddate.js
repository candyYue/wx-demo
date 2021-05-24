// pages/mydate/adddate/adddate.js
const db = wx.cloud.database() // 云开发请求数据
const _ = db.command
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
          wx.navigateBack()
        }
      })
    }else{
      wx.setStorageSync('dateList',
      JSON.stringify([form]))
      this.clearForm()
      wx.navigateBack()
    }
  },
  cancel(){
    wx.navigateBack()
  },
  onLoad(options){
    db.collection('todos').add({
      data: {
        description: "learn cloud database",
        due: new Date(),
        tags: [],
        // 位置（113°E，23°N）
        location: new db.Geo.Point(113, 23),
        done: false
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })

    // db.collection('todos')
    // .where({
    //   _openid: 'olhIc5Pzw-M8xPWrNx-K6WIjUQa8' // 填入当前用户 openid
    // }).get().then(res => {
    //   console.log(res)
    // })

    const currentInfo = JSON.parse(options.dateinfo)
    this.setData({
      inputvalue:currentInfo.des
    })
    this.setData({
      date:currentInfo.date
    })
  },
  onShow(options){
    
  }
})