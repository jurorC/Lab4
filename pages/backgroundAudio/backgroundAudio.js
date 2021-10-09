const backgroundAudioManager = wx.getBackgroundAudioManager() //获取背景音频实例
backgroundAudioManager.title = '欢快的背景'
backgroundAudioManager.singer = 'toky'
backgroundAudioManager.src = 'https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=1575194113'
var that = backgroundAudioManager
backgroundAudioManager.onEnded(function() {
  backgroundAudioManager.src = 'https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=1575194113'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchStatus: true
  },
  back:function(){
    wx.redirectTo({
      url: '/pages/setting/setting',
    })
  },
  switchChange: function(e) {
    let switchStatus = e.detail.value//获取switch开关状态
      this.setData({
      switchStatus: switchStatus
    })
    if (switchStatus) {
      backgroundAudioManager.play()//播放
    } else {
      backgroundAudioManager.pause()//暂停
    }
  },
})