// pages/components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fatherValue:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    // value:1
  },
  computed: {
    b() {
      return this.data.value + 100
    },
  },
  attached: function() {
    this.setData({
      value: 1,
    })
  },
  observers: {
    'fatherValue': function(fatherValue) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        value: fatherValue
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(){
      this.setData({
        value:this.data.value+1
      })
      this.triggerEvent('myevent',this.data.value)
    }
  }
})
