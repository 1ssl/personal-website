$(function(){
  // 大重庆 Tab栏
  $(".chongqing .side .items").on({
    "click":function(){
      var index = $(this).index();
      $(".chongqing .main .list .items").eq(index).stop().slideDown(500).siblings().stop().slideUp(500);
      $(".chongqing .summary .list .items").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    },
    "mouseenter":function(){
      $(this).children(".mask").stop().fadeIn(500);
    },
    "mouseleave":function(){
      $(this).children(".mask").stop().fadeOut(500);
    }
  })
})