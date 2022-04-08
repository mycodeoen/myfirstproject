// index.js
const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {

      selects:["种植户","质检员" ,"运输员","仓库管理员","销售员","消费者","管理员"],
      apps:app,
      index:0,
      form: { 
        name: {
          name: '姓名',
          place: '请填写您的姓名'
        },
        tel: {
          name: '手机',
          place: '请填写您的手机号码'
        },
        retext: {
          name: '备注',
          place: '请填写备注'
        }
      }
   
     },
     bindPickChange:function (e)
     {
       console.log(e.detail.value)
       app.globalData.identify=e.detail.value
       this.setData({
         index:e.detail.value
       })
     }
      ,
      Login(e){
        
        
          wx.switchTab({
            url: '../index/index',
          })

      },
      bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
    },

})