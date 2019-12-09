// pages/myplants/myplants.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  goToNew: function () {
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
  goToChatroom: function (e) {
    const plantId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/chatroom/chatroom?plant_id=${plantId}`,
    })
  },
  gotToDetail: function (options) {
    const plantId = options.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/myplant/myplant?id=${plantId}`
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    const user_id = getApp().globalData.userId
   

    wx.request({
      url: getApp().globalData.host + `/api/v1/users/${user_id}`,
      // `/api/v1/users/${user_id}`,
      method: 'GET',
      success(res) {
        
        const plants = res.data.plants;
        console.log('page data', page.data)
        page.setData({
          plants: plants
        });

        wx.hideToast();
      }
    });

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let page = this;
    const user_id = getApp().globalData.userId
   

    wx.request({
      url: getApp().globalData.host + `/api/v1/users/${user_id}`,
      // `/api/v1/users/${user_id}`,
      method: 'GET',
      success(res) {
        const plants = res.data.plants;
        console.log('page data', page.data)
        page.setData({
          plants: plants
        });

        wx.hideToast();
      }
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})