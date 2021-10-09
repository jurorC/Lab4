// pages/page09/page09.js

const app = getApp()
Page({
  data: {
    //one_img:'',
    //two_img: '../../image/6-point.png',
    //three_img: '../../image/6-point.png', 
    flag:true,
    timer:null,
    msg:'摇一摇',
    total:0,
    award:'状元',
    txt:'---来试试手气⑧',
    arr:[
      'https://obohe.com/i/2021/10/08/10heys0.png',
      'https://obohe.com/i/2021/10/08/10hf00q.png',
      'https://obohe.com/i/2021/10/08/10hf2rt.png',
      'https://obohe.com/i/2021/10/08/10hf2zc.png',
      'https://obohe.com/i/2021/10/08/10hf2an.png',
      'https://obohe.com/i/2021/10/08/10hewzz.png',
    ]
  },
  enter:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);
        obj.setData({
          one_img: obj.data.arr[one],
          two_img: obj.data.arr[two],
          three_img: obj.data.arr[three],
          four_img: obj.data.arr[four],
          five_img: obj.data.arr[five],
          six_img: obj.data.arr[six],
          flag:false,
          msg:'停止',
          total:one+two+three+four+five+six+6,
          txt:'',
        })
      }, 
      50);
    }else{
      clearInterval(obj.data.timer);
      this.setData({msg:'摇一摇'})
      this.setData({flag:true})
            if(this.data.total == 17) {
              this.setData({award : "一秀"})
            } else if (this.data.total == 16) {
              this.setData({award : "二举"})
            } else if (this.data.total == 20) {
              this.setData({award : "三红"})   
            } else if (this.data.total == 13) {
              this.setData({award : "四进"})
            } else if (this.data.total == 21) {
              this.setData({award : "对堂"})
            } else if (this.data.total == 31) {
              this.setData({award : "五子"})
            } else if (this.data.total == 36) {
              this.setData({award : "六博黑"})
            } else if (this.data.total == 19) {
              this.setData({award : "状元"})
            } else if (this.data.total == 23) {
              this.setData({award : "五王"})
            } else if (this.data.total == 18) {
              this.setData({award : "状元插金花"})
            } else if (this.data.total == 24) {
              this.setData({award : "六博红"})
            } else {
              this.setData({award : "可惜，没摇中 ~_~ "})
            }
          }
          this.setData({txt:'恭喜你摇到了:'+obj.data.award}) 
  },
  back:function(){
    wx.redirectTo({
      url: '/pages/page02/page02',
    })
  }
})