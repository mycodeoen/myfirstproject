// index.js
const app = getApp()
Page({
 
  data: {
        identify:0,
        path:'',
        openId:'',
        haveGetOpenId:''
      
   
  }, 
  onShow:function() {
    this.setData({identify:app.globalData.identify})
    
    
  },
  aclick:function(e) {
   if(app.globalData.statues==200)
   {
    wx.navigateTo({
      url: '../inputinfo/index',
    })
  }
  else{
    
  }
 
    
  },
  // huo:function() {
  //   console.log(this.data.identify)
    
  // }
  scanCode:function () {

    var that = this;
    wx.scanCode({ //扫描API
      success(res) { //扫描成功
        console.log(res) //输出回调信息
        that.path=res.result
        app.globalData.url=that.path
        wx.navigateTo({
          url: '../index/login',
        })
        that.setData({
          scanCodeMsg: res.result
        });
        wx.showToast({
          title: '扫码成功',
          icon: 'success',
          duration: 1000
        })
      },
      fail: (res) => {//接口调用失败的回调函数
        wx.showToast({
          title: '扫码失败',
          icon: 'success',
          duration: 1000
        })

      },

    })
  },
    getOpenId() {
    wx.showLoading({
      title: '',
    });
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
       wx.hideLoading();
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      });
     wx.hideLoading();
    });
  }



})