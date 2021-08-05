
Page({
  data: {
    imgList: [
      'http://tmp/NffHwDut6WXo00646b1293dce8cc390a5c73d5ed12be.jpg'
    ],
    tabList:[{
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness-active.png',
      text:'亮度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast-active.png',
      text:'对比度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability-active.png',
      text:'饱和度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/tone.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/tone-active.png',
      text:'色调'
    },{
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness-active.png',
      text:'亮度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast-active.png',
      text:'对比度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability-active.png',
      text:'饱和度'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/tone.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/tone-active.png',
      text:'色调'
    }],
    editUrl:'',
    activeItem:''
  },
  onLoad() {
      this.setData({
          // selectFile: this.selectFile.bind(this),
          // uplaodFile: this.uplaodFile.bind(this),
          // chooseImage: this.chooseImage.bind(this),
          // previewImage: this.previewImage.bind(this),
      })
      if(this.data.imgList&&this.data.imgList.length){
        this.setData({
          editUrl:this.data.imgList[0]
        })
      }
  },
  chooseImage: function (e) {
      var that = this;
      wx.chooseImage({
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            console.log(res)
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              that.setData({
                imgList: that.data.imgList.concat(res.tempFilePaths)
              });
              console.log(that.data.imgList)
          }
      })
  },
  previewImage: function(e){
    console.log('previewImage',e)
    this.setData({
      editUrl:e.currentTarget.dataset.src
    })
      // wx.previewImage({
      //     current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      //     urls: this.data.imgList // 需要预览的图片http链接列表
      // })
  },
  uplaodFile(files) {
      // 文件上传的函数，返回一个promise
      return new Promise((resolve, reject) => {
        if(files.tempFilePaths&&files.tempFilePaths.length){
          resolve({urls:files.tempFilePaths})
        }else{
          reject('some error')
        }
      })
  },
  sliderchange(e){
    console.log(e)
  },
  getActiveItem(e){
    this.setData({
      activeItem:e.detail
    })
    console.log(this.data.activeItem)
  }
});