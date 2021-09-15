// pages/home/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/beauty.png', //实际项目中用的是上一个裁剪页面传来的图片

    stickers: ['cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/brightness.png',
    'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/opacity.png',
    'cloud://lovenini-26xm5.6c6f-lovenini-26xm5-1257016884/pic-action/contrast.png',],
    x: 160,
    y: 50,
    chosedImg: false,
    stv: {
      offsetX: 160,
      offsetY: 50,
      zoom: false, //是否缩放状态
      distance: 0, //两指距离
      scale: 1, //缩放倍数
      width: 50,
      height: 50,
    },
    clientHeight: wx.getSystemInfoSync().windowWidth,   // 获取当前窗口的宽度
    clientWidth: wx.getSystemInfoSync().windowHeight    // 获取当前窗口的高度
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  touchstartCallback: function (e) {
    //console.log('touchstartCallback');
    //console.log(e);
    if (e.touches.length === 1) {
      let {
        clientX,
        clientY
      } = e.touches[0];
      this.startX = clientX;
      this.startY = clientY;
      this.touchStartEvent = e.touches;
    } else {
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);
      this.setData({
        'stv.distance': distance,
        'stv.zoom': true, //缩放状态
      })
    }
  },
  // 贴图触摸移动中
  touchmoveCallback: function (e) {
    //console.log('touchmoveCallback');
    //console.log(e);
    if (e.touches.length === 1) {
      //单指移动
      if (this.data.stv.zoom) {
        //缩放状态，不处理单指
        return;
      }
      let {
        clientX,
        clientY
      } = e.touches[0];
      let offsetX = clientX - this.startX;
      let offsetY = clientY - this.startY;
      this.startX = clientX;
      this.startY = clientY;
      let {
        stv
      } = this.data;
      
      stv.offsetX += offsetX;
      stv.offsetY += offsetY;
      stv.offsetLeftX = -stv.offsetX;
      stv.offsetLeftY = -stv.offsetLeftY;
      var nowWidth = this.data.stv.width;
      var maxoffsetX = this.data.clientWidth - nowWidth;
      var nowHeight = this.data.stv.height;
      var maxoffsetY = this.data.clientHeight - nowHeight;
      if (stv.offsetX > maxoffsetX) {
        stv.offsetX = maxoffsetX;
      } else if (stv.offsetX < 0) {
        stv.offsetX = 0;
      }
      if (stv.offsetY > maxoffsetY) {
        stv.offsetY = maxoffsetY;
      } else if (stv.offsetY < 0) {
        stv.offsetY = 0;
      }
      this.setData({
        stv: stv
      });
    } else {
      //双指缩放
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);
      let distanceDiff = distance - this.data.stv.distance;
      let newScale = this.data.stv.scale + 0.005 * distanceDiff;
      if (newScale < 0.5) {
        newScale = 0.5;
      }
      if (newScale > 4) {
        newScale = 4;
      }
      let newWidth = newScale * 50;
      let newHeight = newScale * 50;
      this.setData({
        'stv.distance': distance,
        'stv.scale': newScale,
        'stv.width': newWidth,
        'stv.height': newWidth,
      })
      //console.log(this.data.stv.scale)
    }
  },
  // 贴图触摸结束
  touchendCallback: function (e) {
    // console.log('touchendCallback');
    //console.log(e);
    if (e.touches.length === 0) {
      this.setData({
        'stv.zoom': false, //重置缩放状态
      })
    }
  },
  //取消圣诞帽
  cancel: function () {
    this.setData({
      chosedImg: false,
      x: 150,
      y: 75,
      stv: {
        offsetX: 75,
        offsetY: 75,
        zoom: false, //是否缩放状态
        distance: 0, //两指距离
        scale: 1, //缩放倍数
        width: 50,
        height: 50,
      }
    })
  },
  changeImg: function (e) {
    var $img = e.currentTarget.dataset.url;
    // var chosedImg = this.data.chosedImg;
    // var chosedImg1 = this.data.chosedImg1;
    // var chosedImg2 = this.data.chosedImg2;
    this.setData({
        chosedImg: false,
        x: 160,
        y: 50,
        stv: {
          offsetX: 160,
          offsetY: 50,
          zoom: false, //是否缩放状态
          distance: 0, //两指距离
          scale: 1, //缩放倍数
          width: 50,
          height: 50,
        }
      }),
      this.setData({
        chosedImg: $img,
      })
  },
  //点击下一步保存按钮
  save: function () {
    console.log("1111")
    var that = this;
    wx.showLoading({
      title: '创建中...',
    })
    setTimeout(function () {
      var imgUrl = that.data.imgUrl
      //wx.hideToast()
      console.log(imgUrl)
      that.createNewImg(imgUrl);
      that.setData({
        maskHidden: true
      });
    }, 1000)
  },
  //将贴纸绘制到canvas的固定
  setHat: function (context) {
    var hat = this.data.chosedImg;
    var newtop = this.data.stv.offsetX * 2;
    var newleft = this.data.stv.offsetY * 2;
    var newswidth = this.data.stv.width * 2;
    var newheight = this.data.stv.height * 2;
    context.drawImage(hat, newtop, newleft, newswidth, newheight)
    context.save();
    context.restore();
    context.stroke();
  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function (imgUrl) {
    var that = this;
    var chosedImg = this.data.chosedImg;
    var formValue = that.data.formValue;
    var path = imgUrl;
    var context = wx.createCanvasContext('mycanvas');
    //为了解决绘制出来的图片有锯齿，这里绘制图片时放大了一倍进行绘制
    context.drawImage(path, 0, 0, 640, 356.266);
    //若选择了贴纸就绘制贴纸
    if (chosedImg) {
      this.setHat(context);
    }
    //绘制图片
    context.draw();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          console.log(tempFilePath);
          formValue[0].imagePath = tempFilePath;
          formValue[0].videoUrl = "";
          //imagePath即生成的图片路径，正常项目中点击下一步会做图片上传，这里不做讲解，只给出了地址，可以在页面中调用地址查看图片
          that.setData({
            imagePath: tempFilePath,
          })
        },
        fail: function (res) {
          console.log(res);
        }
      });
    }, 200);
  },
})