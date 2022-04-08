// index.js
const app = getApp()
Page({
 
  data: {
        identify:0
      
   
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
 
    
  }
  // huo:function() {
  //   console.log(this.data.identify)
    
  // }

})