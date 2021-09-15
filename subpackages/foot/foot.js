// index.js
// 获取应用实例
const app = getApp()
const {areaList} = require('../../utils/Area')
Page({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    areaList,
    show: true,
    actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
    speed: 0,//速度 
    accuracy: 16,//位置精准度 
    latitude:0,
    longitude:0,
    markers: [],
  },
  onSelect(item) {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    console.log(item)
  },
  onLoad() {
    console.log(this.data.areaList)
    const that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        // that.moveTolocation();
      },
    })
  },
})
