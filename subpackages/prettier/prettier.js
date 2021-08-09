
import {deepCopy} from '../../utils/util'
Page({
  data: {
    imgList: [],
    filterStyle:'brightness(100%) opacity(100%) contrast(100%) saturate(100%) blur(0px) grayscale(0%) sepia(0%)',
    StyleObject:{},
    tabList:[{
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/beauty.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/beauty-active.png',
      text:'一键美化',
      label:'beauty'
    },{
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness-active.png',
      text:'亮度',
      label:'brightness'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/opacity.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/opacity-active.png',
      text:'透明度',
      label:'opacity'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast-active.png',
      text:'对比度',
      label:'contrast'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/saturability-active.png',
      text:'饱和度',
      label:'saturate'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/blur.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/blur-active.png',
      text:'模糊',
      label:'blur'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/grayscale.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/grayscale-active.png',
      text:'灰度',
      label:'grayscale'
    },
    {
      url:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/sepia.png',
      activeurl:'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/sepia-active.png',
      text:'复古',
      label:'sepia'
    }],
    currentStyleValue:50,
    editUrl:'',
    activeItem:{
      index:''
    },
    showSlider:false,
    animationData:{}
  },
  onLoad() {
      if(this.data.imgList&&this.data.imgList.length){
        this.setData({
          editUrl:this.data.imgList[0]
        })
      }
      this.animation = wx.createAnimation({
        duration: 100,
        timingFunction: 'ease-in-out',
      })
      this.sliderclose()
  },
  chooseImage: function (e) {
    if(this.data.filterStyle!=='brightness(100%) opacity(100%) contrast(100%) saturate(100%) blur(0px) grayscale(0%) sepia(0%)'){

    }
    var that = this;
    wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.setData({
              imgList: that.data.imgList.concat(res.tempFilePaths)
            },()=>{
              if(!that.data.editUrl){
                that.setData({
                  editUrl:that.data.imgList[0]
                })
              }
            });
            that.setData({
              editUrl:that.data.imgList[0]
            })
            that.setData({
              filterStyle:'brightness(100%) opacity(100%) contrast(100%) saturate(100%) blur(0px) grayscale(0%) sepia(0%)'
            })
        }
    })
  },
  previewImage: function(e){
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
    const action = this.data.activeItem.label
    const beforeStyle = {}
     this.data.filterStyle.split(' ').map(v=>{
      const label = v.split('(')[0]
      const value = v.split('(')[1].slice(0,v.split('(')[1].length-1)
      beforeStyle[label] = value
    })
    if(action ==='brightness'||action ==='opacity'||action ==='contrast'||action ==='saturate'){
      beforeStyle[action] = e.detail.value*2 +'%'
    }else if(action ==='grayscale'||action ==='sepia'){
      beforeStyle[action] = e.detail.value +'%'
    }else if(action ==='blur'){
      beforeStyle[action] = e.detail.value +'px'
    }
    const currentStyle = Object.entries(beforeStyle).map(v=>`${v[0]}(${v[1]})`).join(' ')
    this.setData({
      filterStyle:currentStyle,
      StyleObject:beforeStyle
    })
  },
  getActiveItem(e){
    this.setData({
      activeItem:e.detail,
    })
    if(this.data.StyleObject[e.detail.label]){
      let value = parseInt(this.data.StyleObject[e.detail.label])
      const label = e.detail.label
      if(label ==='brightness'||label ==='opacity'||label ==='contrast'||label ==='saturate'){
        value = value/2
      }
      this.setData({
        currentStyleValue:value,
      })
    }
    if(e.detail.index){
      this.animation.opacity(1).height(200).step()
      this.setData({
        showSlider:true,
        animationData:this.animation.export()
      })
    }
    if(e.detail.index===0){
      this.setData({
        filterStyle: 'brightness(110%) opacity(100%) contrast(90%) saturate(90%) blur(0px) grayscale(0%) sepia(0%)'
      })
    }
  },
  handleSave(){
    var _this = this;
    wx.downloadFile({
      url: this.data.editUrl,
      success: function (res) {
        if (res.statusCode === 200) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (data) {
              console.log(data);
            },
            fail: function (err) {
              console.log(err);
            }
          })
        }
      }
    })
  },
  sliderclose(){
    this.animation.opacity(0).height(0).step()
    this.setData({
      showSlider:false,
      animationData:this.animation.export()
    })
  },
  sliderdone(){
   this.sliderclose()
  }
});