Component({
  externalClasses: ['top-navigation'],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 状态栏高度
    statusBarHeight: wx.getStorageSync('statusBarHeight') + 'px',
    // 导航栏高度
    navigationBarHeight: wx.getStorageSync('navigationBarHeight') + 'px',
    // 胶囊按钮高度
    menuButtonHeight: wx.getStorageSync('menuButtonHeight') + 'px',
    // 导航栏和状态栏高度
    navigationBarAndStatusBarHeight: wx.getStorageSync('statusBarHeight') + wx.getStorageSync('navigationBarHeight') +'px',
    location:"南京"
  },
  lifetimes: {
    created: function() {

    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    searchCity(){
      
    }
  },
  pageLifetimes: {
    show: function() {
      
    },
  }
})
