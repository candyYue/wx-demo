// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value:()=>[]
    },
    isPic:{
      type: Boolean,
      value:false
    },
    activeItem:{
      type: String,
      value:''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    active:''
  },
  observers: {
    'activeItem': function(numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        active: activeItem
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      this.setData({
        active:e.currentTarget.dataset.active
      })
      var myEventDetail = {
        index:e.currentTarget.dataset.active,
        label:e.currentTarget.dataset.label
      }
      this.triggerEvent('getActiveItem', myEventDetail)
    }
  }
})
