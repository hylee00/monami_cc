$(function(){
    $(".gnb>li").mouseenter(function(){
        let submenu = $(this).children("ul");
        $(submenu).stop().slideDown(500);
    });
    $(".gnb>li").mouseleave(function(){
        $(".depth2").stop().slideUp(400);
    });
    $(".right>button").click(function(){
        $(".f_list").stop().slideToggle(400);
    });
    $(".popli3").click(function(){
        $(".popup").hide();
    });
    $(".lang").click(function(){
        // 가상선택자 css 바꾸는 법 -> css에서 변경할
        // 가상선택자(::befor)앞에 .changed 적고 제이쿼리에서 .toggleClass('changed')
        $(".lang").toggleClass('changed');
        $(".lang .kor a").toggleClass('changed');
        $(".lang .eng").slideToggle();
    });
    $(".a_menu").click(function(){
        $(".allmenu").stop().slideToggle(400);
        $(".a_menu").toggleClass("on")
    });
    $(".pen_list:gt(0)").hide();
    $(".product_menu>li").click(function(){
        $(this).removeClass("on");
        $(this).addClass("on").siblings().removeClass("on");
        let num = $(this).index();
        console.log(num);
        $(".pen_list").hide();
        $(".pen_list").eq(num).show();
    })
    $('.pen_list').slick({
        dots: false,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll:5,
        variableWidth: true,
        arrows: false,
      });
})