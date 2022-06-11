$(function(){
  // banner 设置 

  // 小按钮显示
  // 获取 banner 的高度 并且 在 页面发生变化时更新
  var height = $(".banner").height();
  $(window).resize(function(){
    height = $(".banner").height();
  })
  $(".banner").on({
    "mouseenter":function(){
      if(flag){
        flag=false;
        $(".banner .button").stop().fadeIn(500);
        flagChange();
      }
        $(".banner .info").css("height",height*.7).stop().slideDown(500).children(".items").eq(num-1).stop().slideDown(500).siblings(".items").stop().slideUp(500);
        clearInterval(timer);
    },
    "mouseleave":function(){
      $(".banner .button").stop().fadeOut(500)
      $(".banner .info").stop().slideUp(500);
      clearInterval(timer);
      timer=setInterval(move,3000);
    }
  });



  // 节流阀以及节流阀函数
  var flag = true;

  function flagChange() {
    flag = true;
    if (num == $(".banner .list")[0].children.length - 1) {
      $(".banner .list").stop().animate({
        left: "-100%",
      }, 0)
      num = 1;
    }
    if (num == 0) {
      $(".banner .list").stop().animate({
        // 因为前面有 负号 所以 要将它 括起来
        left: -($(".banner .list")[0].children.length-2)+"00%",
      }, 0)
      num = $(".banner .list")[0].children.length-2;
    }
  }



  // 创建小圆点 并将 它 添加到 ".banner .lis" 中 
  $(".banner .list .items").each(function () {
    $(".banner .lis").append("<li></li>");
  })
  // 将创建的第一个校园点 添加 current类 
  $(".banner .lis li").eq(0).addClass("current");
  // 设置 创建的小圆点的click 设置
  $(".banner .lis").on({
    "click": function () {
      // 因为 前面有一个 复制的图片 或者说 num的初值 是 1 
      var index = $(this).index() + 1;
      num = index;
      $(".banner .list").stop().animate({
        left: -index + "00%",
      }, 500);
      $(this).addClass("current").siblings().removeClass("current");
      $(".banner .info .items").eq((num-1) % $(".banner .info")[0].children.length).slideDown(500).siblings(".items").hide(0);
    }
  }, "li");




  // 复制第一个以及最后一个 并添加到 ul中
  var first = $(".banner .list .items")[0].cloneNode(true);
  var last = $(".banner .list .items")[$(".banner .list")[0].children.length-1].cloneNode(true);
  $(".banner .list").prepend(last);
  $(".banner .list").append(first);
  
  // 动态设置 .list 的宽度
  $(".banner .list").css("width",$(".banner .list")[0].children.length+"00%");



  // 左右按钮点击事件
  var num = 1;
  $(".button").on({
    "mouseenter":function(){
      $(".banner .button").stop().fadeIn(0);
    },
    "click": function () {
      // 到达左右两端还原 并将 num重新赋值
      if (flag) {
        flag = false;
        var index = $(this).index();
        // 判断是左右按钮
        if (index == 0) {
          num--;
        } else {
          num++;
        }
        $(".banner .list").stop().animate({
          left: -num + "00%"
        }, 500, flagChange);
        // 同步侧边栏
        $(".banner .info .items").eq((num-1) % $(".banner .info")[0].children.length).slideDown(500).siblings(".items").hide(0);
        var num1 = num - 1;
        // num1 是 左右按钮控制小圆点的依据 
        if(num1 == -1){
          num1 = $(".banner .list")[0].children.length-3;
        }
        if(num1 == $(".banner .list")[0].children.length-2){
          num1 = 0;
        }
        $(".banner .lis li").eq(num1).addClass("current").siblings().removeClass("current");
      }
    }
  }, ".arrow-l,.arrow-r")



  // 设置手指滑动事件
  var startX = 0;  // 手指开始位置
  var moveX = 0; // 手指移动距离
  // 手指开始触摸
  $(".banner .list")[0].addEventListener("touchstart",function(e){
    startX=e.targetTouches[0].pageX;
    clearInterval(timer);
  })
  // 手指移动
  $(".banner .list")[0].addEventListener("touchmove",function(e){
    moveX=e.targetTouches[0].pageX-startX; // 这是移动距离
    var transLateX = - num * $(".banner").width() + moveX;
    $(".banner .list").css("transition","none").css("left",transLateX);
  })
  // 手指离开
  $(".banner .list")[0].addEventListener("touchend",function(){
    if(flag){
      // 判断成功 向左或向右滑动
      if(Math.abs(moveX)>$(".banner").width()/3){
        if(moveX>0){
          num--; // 向右滑了
        }
        else{
          num++; // 向左滑了
        }
        $(".banner .list").stop().animate({
          left: -num + "00%"
        }, 250, flagChange);
      } // 因为滑动距离不够 所以不能判定向左或向右滑动 返回滑动之前的位置
      else{
        $(".banner .list").animate({
          left:- num * $(".banner").width()
        },334);
      }
      var num1 = num - 1;
      // num1 是 左右按钮控制小圆点的依据 
      if(num1 == -1){
        num1 = $(".banner .list")[0].children.length-3;
      }
      if(num1 == $(".banner .list")[0].children.length-2){
        num1 = 0;
      }
      $(".banner .lis li").eq(num1).addClass("current").siblings().removeClass("current");
      timer=setInterval(move,3000);
    }
  })

  // 设置定时器函数
  var timer = setInterval(move, 3000);
  function move() {
    $(".arrow-r").click();
  }


})