/**
 * Created by lichunjing on 2017/5/5.
 */

// ----------------------------首页的货--------------------------
// *******************登录模块***************
// 点击用户弹出登录页面
$(".head").on("click","._user",function(){
    $(".mask").removeClass("none");
});
//取消登录
$(".login").on("click",".btn_one",function(){
    $(".mask").addClass("none");
});
$(".phoneNumber input").blur(function () {
    var phone = $(".phoneNumber input").val()
    if(!(/^1[34578]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }else {
       // $("body").on("click",".verifica .send",function(){
            // $.ajax({
            //     type:"POST",
            //     url: "http://web.nndeal.com/api/sms/send",
            //     data:{mobile:phone},
            //     dataType:"jsonp",
            //     crossDomain:true,
            //     success: function(data){
            //         console.log(data);
            //     },
            //     error: function () {
            //         console.log(77);
            //     }
            // });
            //////////-----------cors-----------//////////var url = 'http://api.alice.com/cors';
            var url = 'http://web.nndeal.com/api/sms/send';
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            //xhr.setRequestHeader('X-Custom-Header', 'value');
            xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var responseText = xhr.responseText;
                        console.info(responseText);
                    }
                }
           // xhr.send();
            //------------------发送验证码-------------------
            //$("body").on("click",".mask .send",function(){
            //     var send_dom=$(".send");
                var send_html=$(".send a").html();
                var sed_num=60;
                var judge=true;  //此变量解决点击连续点击 触发多次事件问题
                $("body").on("click",".mask .send",function(){
                    if(judge){
                        judge=false;
                        $(".send a").html(sed_num+"s");
                        if(send_html=="发送验证码"){
                            var setInt = setInterval(function(){
                                if(sed_num==1){
                                    $(".send a").html("重新获取");
                                    //judge = true;
                                    sed_num=60;
                                    judge=true;
                                    clearInterval(setInt);
                                }else{
                                    sed_num--;
                                    $(".send a").html(sed_num+"s");
                                }
                            },1000);

                        };
                    }
                });

                // settime(this.childNodes);
                // console.log(this.children())
                // var countdown=60;
                // function settime(obj) {
                //     if (countdown == 0) {
                //         obj.removeAttribute("disabled");
                //         obj.value="免费获取验证码";
                //         countdown = 60;
                //         return;
                //     } else {
                //         obj.setAttribute("disabled", true);
                //         obj.value="重新发送(" + countdown + ")";
                //         countdown--;
                //     }
                //     setTimeout(function() {
                //             settime(obj) }
                //         ,1000)
                // }
           // });




       // });
    }
});
//*********************************


// **********************************
//打开页面3秒后弹窗消失
setTimeout(function () {
    $(".content .show .alert").addClass("none");
},3000);

// *******************店址订阅模块***************
//点击店址订阅
$(".head").on("click","._read",function(){
    $(".read").removeClass("none");
});
//取消订阅
$(".shop_read").on("click",".btn_two",function(){
    $(".read").addClass("none");
});

// **********************************
//判断滚动高度 返回顶部出现
$(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num>800){
        $(".return").fadeIn();
    }else{
        $(".return").fadeOut();
    }
});
//鼠标移入 显示客服电话
$(".phone").mouseenter(function(e){
    $(this).addClass("phone_mouseover");
    $(".server_phone").removeClass("none");
});
//鼠标移出 客服电话消失
$(".phone").mouseleave(function(e){
    $(this).removeClass("phone_mouseover");
    $(".server_phone").addClass("none");
});
//点击回到顶部
$(".return").on("click",".top",function (){
    window.scrollTo(0,0);
});


//点击出现筛选框
$(document).on("click",".domain span",function(){
    $(".domain .first").removeClass("none");
});
//鼠标划过出现二级联动
$(".domain .all li").mouseenter(function(e){
    $(".domain .erji").removeClass("none");
    $(".domain .erji").html($(this).find("ul").html());
});
//点击选中显示
$(document).on("click",".erji li",function(){
    $(".domain i").text(($(this).text()));
});
//鼠标移出
$(".first").mouseleave(function(e){
    $(this).addClass("none");
});


//点击出现筛选框2
$(document).on("click",".type span",function(){
    $(".second").removeClass("none");
});
//点击选中显示
$(document).on("click",".second ul li",function(){
    $(".type i").text(($(this).text()));
});
//鼠标移出
$(".second").mouseleave(function(e){
    $(this).addClass("none");
});

//点击出现筛选框3
$(document).on("click",".area span",function(){
    $(".third").removeClass("none");
});
//点击选中显示
$(document).on("click",".third ul li",function(){
    $(".area i").text(($(this).text()));
});
//鼠标移出
$(".third").mouseleave(function(e){
    $(this).addClass("none");
});

//点击出现筛选框4
$(document).on("click",".budget span",function(){
    $(".forth").removeClass("none");
});
//点击选中显示
$(document).on("click",".forth ul li",function(){
    $(".budget i").text(($(this).text()));
});
//鼠标移出
$(".forth").mouseleave(function(e){
    $(this).addClass("none");
});

//订阅选框~~~~~~~~~~
//一级
$(document).on("click",".shop_choice span",function(){
    $(this).parent().find(".kuang").removeClass("none");
});
//点击选中显示
$(document).on("click",".kuang>ul>li",function(){
    $(this).parent().parent().parent().find("input").val(($(this).text()));
});

//鼠标移出
$(".kuang").mouseleave(function(e){
    $(this).addClass("none");
});


// 鼠标划过出现二级联动
$(".list .all>li").mouseenter(function(e){
    $(".list>.erji").removeClass("none");
    $(".list .erji").html($(this).find("ul").html());
});
//点击选中显示
$(document).on("click",".list .erji li",function(){
    //$(".domain i").text(($(this).text()));
    $(this).parent().parent().parent().find("input").val(($(this).text()));
});

//----------------------------------收藏页的货-------------------------------
//收藏页取消收藏
$(".coll_con .bom_right p").click(function(){
    //console.log($(this).parent().parent().parent().parent().index());
    $(".quxiao").removeClass("none");
    setTimeout(function () {
        $(".quxiao").addClass("none");
        $(".coll_con ul li").eq($(this).parent().parent().parent().parent().index()).remove();
    },3000);
});