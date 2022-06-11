$(function(){

  var sum = 0;
  // 我的心仪地点模块
  $(".main .want-go").on({
    "click":function(){
      if(sum>0){
        $(".shopping").show();
        $(".banner").hide();
        $(".main").hide();
      }
      else{
        alert("您暂未选心仪地点哦！");
      }
      // getSum();
    }
  })

  // goBack
  $(".shopping .goback").on({
    "click":function(){
      $(".banner").show();
      $(".main").show();
      $(".shopping").hide();
      
    }
  })

  // 购物车模块设置
  var one = 0;
  $(".one").on({
    click:function(){
      if(one){
        $(".one").eq(0).children("span").eq(one).hide().siblings().show();
        $(".one").eq(1).children("span").eq(one).hide().siblings().show();
        one = 0;
        $(".shopping .place-one").hide();
      }
      else{
        $(".one").eq(0).children("span").eq(one).hide().siblings().show();
        $(".one").eq(1).children("span").eq(one).hide().siblings().show();
        one = 1;
        $(".shopping .place-one").show();
      }
      countQuantity();
    }
  });
  var two = 0;
  $(".two").on({
    click:function(){
      if(two){
        $(".two").eq(0).children("span").eq(two).hide().siblings().show();
        $(".two").eq(1).children("span").eq(two).hide().siblings().show();
        $(".shopping .place-two").hide();
        two = 0;
      }
      else{
        $(".two").eq(0).children("span").eq(two).hide().siblings().show();
        $(".two").eq(1).children("span").eq(two).hide().siblings().show();
        $(".shopping .place-two").show();
        two = 1;
      }
      countQuantity();
    }
  });
  var three = 0;
  $(".three").on({
    click:function(){
      if(three){
        $(".three").eq(0).children("span").eq(three).hide().siblings().show();
        $(".three").eq(1).children("span").eq(three).hide().siblings().show();
        $(".shopping .place-three").hide();
        three = 0;
      }
      else{
        $(".three").eq(0).children("span").eq(three).hide().siblings().show();
        $(".three").eq(1).children("span").eq(three).hide().siblings().show();
        $(".shopping .place-three").show();
        three = 1;
      }
      countQuantity();
    }
  });
  var four = 0;
  $(".four").on({
    click:function(){
      if(four){
        $(".four").eq(0).children("span").eq(four).hide().siblings().show();
        $(".four").eq(1).children("span").eq(four).hide().siblings().show();
        $(".shopping .place-four").hide();
        four = 0;
      }
      else{
        $(".four").eq(0).children("span").eq(four).hide().siblings().show();
        $(".four").eq(1).children("span").eq(four).hide().siblings().show();
        $(".shopping .place-four").show();
        four = 1;
      }
      countQuantity();
    }
  });
  

  // 计算总和函数
  function countQuantity(){
    if(sum>4||sum<0)
    sum=0;
    // 每次调用重新计算sum 的值
    sum = 0;
    if(one){
      sum++;
    }
    if(two){
      sum++;
    }
    if(three){
      sum++;
    }
    if(four){
      sum++;
    }
    if(sum>0 & sum!= -1 && sum != -2 && sum!= -3){
      $(".main .want-go .sup").show(100).html(sum);
    }
    else{
      $(".main .want-go .sup").hide();
    }
  }



  // 1. 全选 全不选功能模块
    // 就是把全选按钮(checkall)的状态赋值给 3个小的按钮(j-checkbox)就可以了
    // 事件可以使用change
  $(".checkall").change(function(){
      $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
      getSum();
  })
  // 如果小复选框被选中的个数等于3,就应该把全选按钮选上，否则全选按钮不选
  $(".j-checkbox").change(function(){
      // if(被选中的复选框的个数==3){
      //     // 就要选中全选按钮
      // }else{
      //     // 不要选择全选按钮
      // }
      // console.log($(".j-checkbox:checked").length);
      // $(".j-checkbox).length 是所有小复选框的个数
      if($(".j-checkbox:checked").length==$(".j-checkbox").length){
          $(".checkall").prop("checked",true);
      }
      else{
          $(".checkall").prop("checked",false);
      }
      if($(this).prop("checked")){
        // 让当前的商品添加 check-cart-item 类名
        $(this).parents(".items").addClass("current");
    }
    else{
        // 让当前的商品移除 check-cart-item 类名
        $(this).parents(".items").removeClass("current");
    }
    getSum();
  })

  // 3. 增减商品数量模块 首先声明一个变量，当我们点击 + 号(increment),就让这个值++，然后赋值给文本框
  $(".increment").click(function(){
    // 得到当前兄弟文本框的值
    var n=$(this).siblings(".itxt").val();
    n++;
    $(this).siblings(".itxt").val(n);
    // 3. 计算小计模块,根据文本框的值 乘以 当前商品的价格,就是商品的小计
    // 当前商品的价格 p 
    var p=$(this).parents(".p-times").siblings(".p-time").children("span").html();
    if(p>=30){
      p=.5;
    }
    // 小计模块
    // element.roFixed(n) 可以让元素保留位整数
    var price=(p*n).toFixed(1);
    $(this).parent().parent().siblings(".p-sum").children("span").html(price);
    getSum();
});
$(".decrement").click(function(){
    // 得到当前兄弟文本框的值
    var n=$(this).siblings(".itxt").val();
    if(n==1){
      alert("已经不能再减少了哦！")
      return false;
    }
    n--;
    $(this).siblings(".itxt").val(n);
    // 3. 计算小计模块,根据文本框的值 乘以 当前商品的价格,就是商品的小计
    // 当前商品的价格 p 
    var p=$(this).parents(".p-times").siblings(".p-time").children("span").html();
    if(p>=30){
      p=.5;
    }
    // 小计模块
    // element.roFixed(n) 可以让元素保留位整数
    var price=(p*n).toFixed(1);
    $(this).parent().parent().siblings(".p-sum").children("span").html(price);
    getSum();
})
  // 4. 用户修改文本框的值 计算 小计模块
    $(".itxt").change(change);
    // 修改文本框
    function change(){
        // 先得到当前兄弟文本框的值 乘以 当前商品的单价
        var n=$(this).val();
        $(this).siblings(".itxt").val(n);
        // 当前商品的价格 p 
        // var p=$(this).parent().parent().siblings(".p-price").html();
        var p=$(this).parents(".p-times").siblings(".p-time").children("span").html();
        if(p>=30){
          p=.5;
        }
        // 小计模块
        // element.roFixed(n) 可以让元素保留位整数
        var price=(p*n).toFixed(1);
        $(this).parent().parent().siblings(".p-sum").children("span").html(price);
        getSum();
    };

  // 6. 删除商品模块
    // 1. 商品后面的删除按钮
    $(".p-action a").click(function(){
        // 删除的是当前的的商品
        var index = $(this).parents(".index").index();
        $(this).parents(".items").parent().hide();
        $(".main .list .info").eq(index).find("i").children("span").eq(0).show().siblings().hide();
        $(".banner .info .items").eq(index).find(".more").children("a").eq(1).children("span").eq(0).show().siblings().hide();
        if(one>1)
        one=1;
        if(two>1)
        two=1;
        if(three>1)
        three=0;
        if(four>1)
        four=1;
        sum--;
        if(sum>0){
          $(".main .want-go .sup").show(100).html(sum);
        }
        else{
          $(".main .want-go .sup").hide();
        }
        getSum();
    });
    // 2. 删除选中的商品
    $(".remove-batch").click(function(){
        // 删除的是小的复选框选中的商品
        // $(".j-checkbox:checked").parents(".items").parent().hide();
        // $(".main .list .info").eq($(".j-checkbox:checked").parents(".index").index()).find("i").children("span").eq(0).show().siblings().hide();
        // getSum();
        $(".p-action a").click();
    });

    // 3. 清空购物车
    $(".clear-all").click(function(){
        // $(".cart-item-list").empty();
        $(".p-action a").click();
        // 隐藏我的心仪地点并重新赋值
        $(".main .want-go .sup").hide();
        one=0;
        two=0;
        three=0;
        four=0;
        // getSum();
    });

  // 用户打开页面首先修改一次
  getSum();
  // 5. 计算总计和总额模块
  function getSum(){
      var count=0; // 计算总件数
      var money=0; // 计算总额
      $(".itxt").each(function(index,domEle){
        if($(domEle).parents(".items").find(".j-checkbox").prop("checked")){
          count+=parseInt($(domEle).val());
        }
      })
      $(".p-sum span").each(function(index,domEle){
        var p=parseFloat($(domEle).html());
        if($(domEle).parents(".items").find(".j-checkbox").prop("checked")){
          money+=p;
        }
      })
      money=money.toFixed(1);
      $(".amount-sum em").text(count);
      $(".price-sum em").text(money);
  };
})