$(function(){

  // nav 导航栏
  $(".nav .menu-small").on({
    "click":function(){
      $(this).siblings(".list").stop().slideToggle(500);
    }
  },"span");

  // footer 
  $(".footer .center .list li a i").on({
    "mouseenter":function(){
      $(this).siblings("span").stop().slideDown(500);
    },
    "mouseleave":function(){
      $(this).siblings("span").stop().slideUp(500);
    }
  });

  // back
  $(window).on({
    "scroll":function(){
      var height = $(".container").height();
      if ($(document).scrollTop() >= height*.4) {
        $(".back").slideDown(500);
      } else {
        $(".back").slideUp(500);
      }
    }
  });
  $(".back").on({
    "click":function(){
      $("html").stop().animate({
        scrollTop: 0
      },750);
    }
  })
})