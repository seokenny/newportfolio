// $(".work_descript_text").on('click',function(){
//     $(".work_descript_text").animate({opacity:0});
// });

// $(".work_descript_header").on('click',function(){
//     $(".work_descript_text").animate({opacity:1});
// });

$(".side_line_0").on('click',function(){
        $(".side_line_0").animate({
            width:40,
            backgroundColor: '#D02424'
        });
        $(".side_line_1").animate({
            width:20
        });
        $(".side_line_2").animate({
            width:20
        });
        $(".side_line_3").animate({
            width:20
        });
        $(".side_line_4").animate({
            width:20
        });
});

$(".side_line_1").on('click',function(){
        $(".side_line_1").animate({
            width:40
        });
        $(".side_line_0").animate({
            width:20
        });
        $(".side_line_2").animate({
            width:20
        });
        $(".side_line_3").animate({
            width:20
        });
        $(".side_line_4").animate({
            width:20
        });
});

$(".side_line_2").on('click',function(){
    $(".side_line_2").animate({
        width:40
    });
    $(".side_line_0").animate({
        width:20
    });
    $(".side_line_1").animate({
        width:20
    });
    $(".side_line_3").animate({
        width:20
    });
    $(".side_line_4").animate({
        width:20
    });
});

$(".side_line_3").on('click',function(){
    $(".side_line_3").animate({
        width:40
    });
    $(".side_line_0").animate({
        width:20
    });
    $(".side_line_1").animate({
        width:20
    });
    $(".side_line_2").animate({
        width:20
    });
    $(".side_line_4").animate({
        width:20
    });
});

$(".side_line_4").on('click',function(){
    $(".side_line_4").animate({
        width:40
    });
    $(".side_line_0").animate({
        width:20
    });
    $(".side_line_1").animate({
        width:20
    });
    $(".side_line_2").animate({
        width:20
    });
    $(".side_line_3").animate({
        width:20
    });
});


$(".work_circle").on('click',function(){
    $(".rugsusa_work_page").fadeIn();
});

$(".work_page_banner").on('click',function(){
    $(".rugsusa_work_page").fadeOut();
});

$(".m_nav_home").on('click',function(){
    $(".m_nav_menu").fadeOut(function(){
        $("#about_container").fadeOut(function(){
            $("#work_container").fadeIn();
            $('.wc_main').fadeIn();
        });
    });
});

$('.m_nav_about').on('click',function(){
    $(".m_nav_menu").fadeOut(function(){
        $('.wc_main').fadeOut();
        $('.m_work_page').fadeOut(function(){
            $('#about_container').fadeIn();
        });
    });
});

$(".full_burger_line").on('click',function(){
    if($(".m_nav_menu").css('display') == 'block'){
        $(".m_nav_menu").fadeOut();
        $("#container").removeAttr('style'); 
    }
    else {
        $(".m_nav_menu").fadeIn();
        $("#container").css('overflowY','auto');
    }
});
