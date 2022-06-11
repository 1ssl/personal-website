$(function(){

  // banner 的 详细
  $(".detail .list .one").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .one i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  },".items-img");
  $(".detail .list .two .items-img").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .two i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  });
  $(".detail .list .three .items-img").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .three i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  });
  $(".detail .list .four .items-img").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .four i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  });
  $(".detail .list .five .items-img").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .five i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  });
  $(".detail .list .six .items-img").on({
    "click":function(){
      var index=$(this).index();
      $(this).addClass("current").siblings().removeClass("current");
      $(".detail .list .six i img").stop().slideUp(500).eq(index).stop().slideDown(750);
    }
  });
  // 照片墙效果
  
  // 全部照片设置
  var x = $(".photo-wall").width();
  var y = $(".photo-wall").height();
  // 当窗口大小调整时 更新 x y的值 同时重置 照片位置
  $(window).resize(function(){
    x = $(".photo-wall").width();
    y = $(".photo-wall").height();
    moveImg($(".photo-wall .items"));
  });
  moveImg($(".photo-wall .items"));
  // 当前照片 点击事件，以及 其兄弟设置
  $(".photo-wall").on({
    "click":function(){
      var imgX=x/2-$(this).width()/2;
      var imgY=y/2-$(this).height()/2;
      $(this).css("transform","rotate(0deg)").css("transform","scale(1.4)").css("z-index","1");
      $(this).stop().animate({
        left:imgX,
        top:imgY,
      },350,"linear");
      $(this).siblings(".items").css("z-index",0);
      moveImg($(this).siblings(".items"))
    }
  },".items")

  // 随机移动图片函数
  function moveImg(Ele){
    for(var i=0;i<Ele.length;i++){
      Ele.eq(i).stop().animate({
        left:randomNum(0,x*.8),
        top:randomNum(0,y*.8),
      },350,"linear").css("transform","rotate("+randomNum(0,90)+"deg)").css("transitionDuration",".35s").css("transitionTimingFunction","linear");
    }
  }

  // 随机数生成函数
  function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
  }
})