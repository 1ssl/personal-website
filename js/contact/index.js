$(function(){
  var flag = false;
  $(".emall").on({
    "change":function(){
      var str = $(this).val();
      checkEmail(str);
    }
  })
  // 邮箱判断函数
  function checkEmail(str){
  var re=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    if(re.test(str)){
      $(".btn").removeAttr("disabled");
    }
    else{
      $(".btn").attr("disabled","disabled");
    }
  }
})