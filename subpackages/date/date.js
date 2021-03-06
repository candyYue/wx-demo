// index.js
// 获取应用实例
const app = getApp()
Page({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    slideButtons: [{
      type: 'edit',
      text: '编辑'
    },{
      type: 'delete',
      text: '删除',
      // extClass: 'delete'
    }],
    dateList:[]
  },
  slideButtonTap(e) {
    //编辑
    if(e.detail.index===0){
      const dateinfo = e.currentTarget.dataset.date
      wx.navigateTo({
        url:`/subpackages/date/adddate/adddate?dateinfo=${JSON.stringify(dateinfo)}`
      })
    }
    //删除
    if(e.detail.index===1){
      const list = [...this.data.dateList]
      list.splice(e.currentTarget.dataset.index,1)
      this.setData({dateList:list})
      wx.setStorageSync('dateList', JSON.stringify(this.data.dateList))
    }
  },
  dateDetail(e){
    const dateinfo = e.currentTarget.dataset.date
    wx.navigateTo({
      url:`/subpackages/date/mydate/mydate?dateinfo=${JSON.stringify(dateinfo)}`
    })
  },
  addDate(){
    wx.navigateTo({
      url:"/subpackages/date/adddate/adddate"
    })
  },

  calcSecend(){

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
