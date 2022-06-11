$(function(){
  var arr=["#1298fc","#FF3A3A","#03c63a"]

  // .tab-box 图片 hover 属性 设置
  $(".tab-box img").hover(
    function(){
      $(this).css("transform","scale(1.1)")
    },function(){
      $(this).css("transform","scale(1)")
    }
  )
  $(".tab-box .sideshow").hover(
    function(){
    $(this).find("img").css("transform","scale(1.1)")
  },function(){
    $(this).find("img").css("transform","scale(1)")
  })

  // 第一个模块的Tab栏切换效果 
  $(".subnav .list li").click(function(){
    // 获取当前索引号
    var index=$(this).index();
    // 先全部隐藏 当前索引对应盒子显示 
    // .cuticle 的 操作
    $(this).children(".cuticle").stop().show(500).parent().siblings("li").children(".cuticle").stop().hide(500);
    // .tab-box 操作
    $(".first .tab-box").stop().fadeOut(500).eq(index).stop().fadeIn(500);
  })
})
