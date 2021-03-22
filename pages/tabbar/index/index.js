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
      type: 'warn',
      text: '删除',
      extClass: 'test'
    }],
    dateList:[]
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
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
    const that = this
    wx.getStorage({
      key: 'countdown',
      success(res){
        if(res.data){
          const list = JSON.parse(res.data)
          that.setData({
            dateList:list
          })
          console.log(list)
        }
      }
    })
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },
})
