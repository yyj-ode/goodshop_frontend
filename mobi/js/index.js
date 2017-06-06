/**
 * Created by lichunjing on 2017/5/9.
 */
//---------------------titlebar挂顶
window.onload = function() {
    var oDiv = $(".con .head");
    var oTop = oDiv.offset().top;
    // console.log(oTop);
    $(window).scroll(function(){
        var sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(sTop>0){
            oDiv.css({"position":"absolute","top":sTop,"left":"0","background":"#fff"})
        }else{
            oDiv.css({"position":"static"})
        }
    })
}
//搜索框得焦事件
$("._search_key input").focus(function(){
    $(".search_main").removeClass("none");
    $(".con").addClass("none");
});
//搜索返回
$(".search_main").on("click",".search_main .coordinate",function(){
    $(".search_main").addClass("none");
    $(".con").removeClass("none");
});

//点击小人登录
$(".head").on("click",".head ._user",function(){
    $(".login_page").removeClass("none");
    $(".con").addClass("none");
    $(this).css({"zIndex":"0"});
});
//登录后点击小人
$(".head").on("click",".user_login",function(){
    $(".mine").removeClass("none");
    $(".con").addClass("none");
});
$(".head").on("click",".head .wode",function(){
    $(".mine").removeClass("none");
    $(".con").addClass("none");
});
//登录返回
$(".login_page").on("click",".login_page .coordinate",function(){
    $(".login_page").addClass("none");
    $(".con").removeClass("none");
});

//点击协议
$(".login_content .registerForm").on("click",".registerForm p a",function(){
    $(".agreement").removeClass("none");
    $(".con").addClass("none");
});
//协议返回
$(".agreement").on("click",".agreement .head .coordinate",function(){
    $(".agreement").addClass("none");
    $(".con").removeClass("none");
});

//登陆成功后有个展开

//店铺订阅
//订阅选框~~~~~~~~~~

var click1 = 0;
var click2 = 0;
//一级
$(document).on("click",".shop_choice span",function(){
    //console.log($(this).parent())
    $(this).parent().find(".kuang").removeClass("none");
});
//点击选中显示
$(document).on("click",".kuang>ul>li",function(){
    //click1 ++;
    //console.log($(this).parent().parent().parent().find("input").val(($(this).text())));
    // if(click1 == 1){
        $(this).parent().parent().parent().find("input").val(($(this).text()));
    // }else{
    //     console.log(888)
    // }
});
//二级
$(document).on("click",".list>.all>li",function(){
    //var oLi = $("<li>返回上一级</li>");
    //console.log($(this).children()[0]);
    //$(this).children().prepend(oLi);
    $(this).children().removeClass("none");
});
//

$(document).on("click",".kuang>ul>li>.aa>li",function(){
    // click2 ++;
    // if(click2 == 1){
        if($(this).text()=="返回上一级"){
            $(this).addClass("none");
            $("._choice>ul>li").removeClass("none");
        }else{
            $(".dingwei").text($(this).text());
        }
    // }else{
    //     console.log(444)
    // }

});
//鼠标移出
$(".kuang").mouseleave(function(e){
    $(this).addClass("none");
});
$(".myread").on("click",".myread .coordinate",function(){
    $(".myread").addClass("none");
    $(".con").removeClass("none");
});
//支付成功，失败勘查返回！！！！！！


//-----------------我的---------------
$(".mine").on("click",".mine .coordinate",function(){
    $(".mine").addClass("none");
    $(".con").removeClass("none");
});
$(".mine").on("click",".mine .my_back",function(){
    $(".mine").addClass("none");
    $(".con").removeClass("none");
});
$(".mine").on("click",".mine .my_collect i",function(){
    location.href="collect.html";
});
$(".mine").on("click",".mine .my_order i",function(){
    location.href="order.html";
});

//-------------------区域筛选-------------
$(".select_con").on("click",".select_con li i",function () {
    $(".shaixuan").removeClass("none");
    var that =  $(this).parent().index();
    var myUl = $(".shaixuan>ul");
    myUl.find("li").remove();
    var myLi = $(".shaixuan>ul>li>ul");
    myLi.find("li").remove();
    $.ajax({
            url: "package.json",
            success: function(data){
                if(that==0){
                    //$(".erci").removeClass("none");
                    for(var key in data.domian[0]){
                        $("<li>"+key+"</li>").appendTo(".shaixuan>ul");
                        for(var i = 0; i<data.domian.length;i++){
                            console.log(data.domian[i])
                            $("<li>"+data.domian[i].key+"</li>").appendTo(".erci>ul");
                        }
                    }

                    // for(var i= 0; i<data.domian.length;j++){
                    //    for(var j =0;j<data.domian[i].length;j++){
                    //        $("<li>"+data.domian[i][j]+"</li>").appendTo(".erci>ul");
                    //    }
                    // }

                    // $(".shaixuan li").mouseenter(function(e){
                    //     console.log($(this))
                    //     for()
                    //     //$(".erci").html($(this).find("ul").html());
                    // });

                }else if(that == 1){
                    for(var i = 0; i< data.shop.length;i++){
                        $("<li>"+data.shop[i]+"</li>").appendTo(".shaixuan>ul");
                    }
                }else if(that == 2){
                    for(var i = 0; i< data.area.length;i++){
                        $("<li>"+data.area[i]+"</li>").appendTo(".shaixuan>ul");
                    }
                }else{
                    for(var i = 0; i< data.money.length;i++){
                        $("<li>"+data.money[i]+"</li>").appendTo(".shaixuan>ul");
                    }
                }

            },
            error: function () {
                console.log(77);
            }
        });
    //console.log($(this).parent().index());
});