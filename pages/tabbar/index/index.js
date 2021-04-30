// index.js
// 获取应用实例
const app = getApp()
const {areaList} = require('../../../utils/Area')
Page({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    slideButtons: [{
      type: 'delete',
      text: '删除',
      extClass: 'delete'
    }],
    dateList:[]
  },
  slideButtonTap(e) {
    //删除
    if(e.detail.index===0){
      const list = [...this.data.dateList]
      list.splice(e.currentTarget.dataset.index,1)
      this.setData({dateList:list})
      wx.setStorageSync('dateList', JSON.stringify(this.data.dateList))
    }
  },
  dateDetail(e){
    const dateinfo = e.currentTarget.dataset.date
    console.log(dateinfo)

    wx.navigateTo({
      url:`/subpackages/mydate/mydate/mydate?dateinfo=${JSON.stringify(dateinfo)}`
    })
  },
  addDate(){
    wx.navigateTo({
      url:"/subpackages/mydate/adddate/adddate"
    })
  },
  onLoad() {
    
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    this.getdatalist()
  },
  getdatalist(){
    wx.getStorage({
      key: 'dateList',
      success:(res)=>{
        if(res.data){
          const list = JSON.parse(res.data)
          this.setData({
            dateList:list
          })
        }
      }
    })
  }
})
