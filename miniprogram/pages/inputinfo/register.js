// pages/inputinfo/register.js
const app= getApp()
Page({

  /**
   * 组件的初始数据
   */
  
  data: {
            identify:0,
            id:0
  },
  onLoad:function(e) {
       this.setData({
         id:e.id
       })
       console.log(this.id)
  },
  onShow:function(e) {
    this.setData({
          identify:app.globalData.identify
    })

  },
   bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  uploadImg() {
    let that = this;
    wx.chooseImage({
      count: 3 - that.data.uploaderNum,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        console.log(that.data.uploaderList)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        let uploaderList = that.data.uploaderList.concat(tempFilePaths);
        if (uploaderList.length==3) {
          that.setData({
            showUpload: false
          })  
        }
        that.setData({
          uploaderList: uploaderList,
          uploaderNum: uploaderList.length,
          imgFileList: res.tempFiles
        })
      }
    })
  },
  chooseVideo: function () {
    console.log("chooseVideo")
    this.setData({clickFlag: false})
 
    let that = this
    //1.拍摄视频或从手机相册中选择视频
    wx.chooseVideo({
      sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
      // maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
      camera: 'back',//默认拉起的是前置或者后置摄像头，默认back
      compressed: true,//是否压缩所选择的视频文件
      success: function(res){
        //console.log(res)
        let tempFilePath = res.tempFilePath//选择定视频的临时文件路径（本地路径）
        let duration = res.duration //选定视频的时间长度
        let size = parseFloat(res.size/1024/1024).toFixed(1) //选定视频的数据量大小
        // let height = res.height //返回选定视频的高度
        // let width = res.width //返回选中视频的宽度
        that.data.duration = duration
        if(parseFloat(size) > 100){
          that.setData({
            clickFlag: true,
            duration: ''
          })
          let beyondSize = parseFloat(size) - 100
          wx.showToast({
            title: '上传的视频大小超限，超出'+beyondSize+'MB,请重新上传',
            //image: '',//自定义图标的本地路径，image的优先级高于icon
            icon:'none'
          })
        }else{
          //2.本地视频资源上传到服务器
          that.uploadFile(tempFilePath)
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
