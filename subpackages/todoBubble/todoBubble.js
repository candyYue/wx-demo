// subpackages/todoBubble/todoBubble.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    addshow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addTodo(){
      this.setData({
        addshow:true
      })
    },
    closeShow(){
      this.setData({
        addshow:false
      })
    }
  }
})
