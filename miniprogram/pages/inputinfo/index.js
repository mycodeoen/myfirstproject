// index.js
const { envList } = require('../../envList.js');
const app=getApp();

Page({
  data: {

      selects:["种植户","质检员" ,"运输员","仓库管理员","销售员","消费者","管理员"],
      index:0,
      identify:0
   
  },
  Skip:function(event) {
       console.log(event.currentTarget.dataset.id)
       console.log(this.data.identify)
       if(this.data.identify==0){
       wx.navigateTo({
         url: '../inputinfo/register?id='+event.currentTarget.dataset.id
       })
      }
    
  },
  onShow:function(e) {
         this.setData({
           identify:app.globalData.identify
         })
    
  }
})