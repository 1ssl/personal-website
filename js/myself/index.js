$(function(){

// 当前时间及日期设置
  getNowTime();
  getCountDown();
  setInterval(getNowTime,1000);
  setInterval(getCountDown,1000);

  // 获取当前时间函数
  function getNowTime(){
    var date = new Date();

    var s = date.getSeconds();
    var minutes = date.getMinutes();
    var h = date.getHours();
    var d = date.getDate();
    var month = date.getMonth() + 1;
    var y = date.getFullYear();

    s = s >= 10 ? s : '0' + s;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    h = h >= 10 ? h : '0' + h;
    d = d >= 10 ? d : '0' + d;
    month = month >= 10 ? month : '0' + month;
    y = y >= 10 ? y : '0' + y;

    var arr=[y,month,d,h,minutes,s];
    $(".count-down .list").eq(0).children("span").each(function(index,domEle){
      $(domEle).text(arr[index]);
    })
  }

  // 获取倒计时函数
  function getCountDown(){
    var inputTime = +new Date('2024-6-30 0:0:0'); // 输入时间戳
    var nowTime = +new Date(); // 当前时间戳
    var remainTime = (inputTime - nowTime) / 1000; // 剩余时间总的秒数
    var s = parseInt(remainTime % 60);
    var minutes = parseInt(remainTime / 60 % 60);
    var h = parseInt(remainTime / 60 / 60 % 24);
    var d = parseInt(remainTime / 60 / 60 / 24 % 30);
    var month = parseInt(remainTime / 60 / 60 / 24 / 30 % 12);
    var y = parseInt(remainTime / 60 / 60 / 24 / 30 / 12);

    s = s >= 10 ? s : '0' + s;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    h = h >= 10 ? h : '0' + h;
    d = d >= 10 ? d : '0' + d;
    month = month >= 10 ? month : '0' + month;
    y = y >= 10 ? y : '0' + y;

    var arr=[y,month,d,h,minutes,s];
    $(".count-down .list").eq(1).children("span").each(function(index,domEle){
      $(domEle).text(arr[index]);
    })
  }
})