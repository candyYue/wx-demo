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
    addshow:false,
    showTopTips: false,
    date: "2016-09-01",
    time: "12:01",
    musics: ["music2", "music3", "music1"],
    musicIndex: 0,
    formData: {
      date: "2016-09-01",
      time: "12:01",
      musicIndex: 0,
      repeat:false,
      taskinfo:''
    },
    rules: [
      // {name: 'radio',rules: {required: true, message: '单选列表是必选项'}}
    ]
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
    },
    bindDateChange: function (e) {
      this.setData({
          date: e.detail.value,
          [`formData.date`]: e.detail.value
      })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value,
            [`formData.time`]: e.detail.value
        })
    },
    bindRepeatChange: function (e) {
      this.setData({
          time: e.detail.value,
          [`formData.repeat`]: e.detail.value
      })
    },
    formInputChange(e) {
      const {field} = e.currentTarget.dataset
      this.setData({
          [`formData.${field}`]: e.detail.value
      })
    },
    bindmusicChange: function(e) {
        this.setData({
            musicIndex: e.detail.value,
            [`formData.musicIndex`]: e.detail.value
        })
    },
      submitForm() {
        this.selectComponent('#form').validate((valid, errors) => {
          console.log('valid', valid, errors)
          if (!valid) {
              const firstError = Object.keys(errors)
              if (firstError.length) {
                  this.setData({
                      error: errors[firstError[0]].message
                  })

              }
          } else {
              wx.showToast({
                  title: '校验通过'
              })
              console.log(this.data.formData)
          }
      })
    }
  }
})
