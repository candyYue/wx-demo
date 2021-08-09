// index.js
// 获取应用实例
const app = getApp()
Page({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    List:[
    {label:'date',value:'倒计时'},
    {label:'todoBubble',value:'todolist'},
    {label:'prettier',value:'滤镜'},
    {label:'foot',value:'map'}]
  },
  dateDetail(e){
    const current = e.currentTarget.dataset.label
    wx.navigateTo({
      url:`/subpackages/${current}/${current}`
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
