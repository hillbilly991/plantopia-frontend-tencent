//app.js

const AV = require('./utils/av-weapp-min.js')
const config = require('./utils/key.js')
// Initialization of the app

AV.init({
  appId: config.appId,
  appKey: config.appKey,
});

App({

  onLaunch: function () {
    const host = this.globalData.host
    const app = this;
    console.log('beginning login')
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: host + '/login',
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log('res', res)
            app.globalData.userId = res.data.userId
          }
        })

      }
    })
  },

  globalData: {

    // host: 'http://localhost:3000'

    host: 'https://plantopia.wogengapp.cn'
  },



})