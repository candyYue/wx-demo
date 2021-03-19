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
    dateList:[{
      id:1,
      date:'2020-01-01',
      des:'生日'
    },{
      id:2,
      date:'2020-01-01',
      des:'生日'
    },{
      id:3,
      date:'2020-01-01',
      des:'生日'
    }]
  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
  dateDetail(e){
    const dateinfo = e.currentTarget.dataset.date
    console.log(dateinfo)

    wx.navigateTo({
      url:`../../mydate/mydate/mydate?dateinfo=${JSON.stringify(dateinfo)}`
    })
  },
  addDate(){
    wx.navigateTo({
      url:"../../mydate/adddate/adddate"
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
  },
})
