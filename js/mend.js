$(function(){
  // 解决 联系方式的 微信 在 移动端 弹出的 bug 
  var containerWidth = $(".container").width();
  // 当窗口大小调整时 更新 x y的值 同时重置 照片位置
  $(window).resize(function(){
    containerWidth = $(".container").width();
  });
  var flag=false;
  var num=1;
  // "".container"   在 750px 及以下 这段代码生效
  var standardWidth=750;
  $(".footer .center .list li a i").eq(3).on({
    "click":function(){
      if(flag && containerWidth <= standardWidth){
        $(this).siblings("span").slideToggle(500);
        if(num % 2 == 0){
          $(this).css("color","#fff").css("backgroundColor","#92c528");
        }
        else{
          $(this).css("color","black").css("backgroundColor","#f3f8fb");
        }
        num++;
      }
      else{
        flag=true;
      }
    },
    "mouseleave":function(){
      flag=false;
      $(this).css("color","black").css("backgroundColor","#f3f8fb");
    }
  })
})