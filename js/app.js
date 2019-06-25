// $(".work_descript_text").on('click',function(){
//     $(".work_descript_text").animate({opacity:0});
// });

// $(".work_descript_header").on('click',function(){
//     $(".work_descript_text").animate({opacity:1});
// });

$(".side_line_0").on('click',function(){
        $(".fuyu_wc_main").fadeOut(function(){
            $(".rugs_wc_main").fadeIn();
        });
        $(".mystic_wc_main").fadeOut(function(){
            $(".rugs_wc_main").fadeIn();
        });
        $(".zombie_wc_main").fadeOut(function(){
            $(".rugs_wc_main").fadeIn();
        });
        $(".guesser_wc_main").fadeOut(function(){
            $(".rugs_wc_main").fadeIn();
        });
        $(".side_line_0").animate({
            width:40,
            backgroundColor: '#D02424'
        });
        $(".side_line_1").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_2").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_3").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_4").animate({
            width:20,
            backgroundColor: 'white'
        });
});

$(".side_line_1").on('click',function(){
        $(".rugs_wc_main").fadeOut(function(){
            $(".fuyu_wc_main").fadeIn();
        });
        $(".mystic_wc_main").fadeOut(function(){
            $(".fuyu_wc_main").fadeIn();
        });
        $(".zombie_wc_main").fadeOut(function(){
            $(".fuyu_wc_main").fadeIn();
        });
        $(".guesser_wc_main").fadeOut(function(){
            $(".fuyu_wc_main").fadeIn();
        });
        $(".side_line_1").animate({
            width:40,
            backgroundColor: '#FFA53C'
        });
        $(".side_line_0").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_2").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_3").animate({
            width:20,
            backgroundColor: 'white'
        });
        $(".side_line_4").animate({
            width:20,
            backgroundColor: 'white'
        });
});

$(".side_line_2").on('click',function(){
    $(".fuyu_wc_main").fadeOut(function(){
        $(".mystic_wc_main").fadeIn();
    });
    $(".rugs_wc_main").fadeOut(function(){
        $(".mystic_wc_main").fadeIn();
    });
    $(".zombie_wc_main").fadeOut(function(){
        $(".mystic_wc_main").fadeIn();
    });
    $(".guesser_wc_main").fadeOut(function(){
        $(".mystic_wc_main").fadeIn();
    });
    $(".side_line_2").animate({
        width:40,
        backgroundColor:'#2556D4'
    });
    $(".side_line_0").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_1").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_3").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_4").animate({
        width:20,
        backgroundColor: 'white'
    });
});

$(".side_line_3").on('click',function(){
    $(".fuyu_wc_main").fadeOut(function(){
        $(".zombie_wc_main").fadeIn();
    });
    $(".rugs_wc_main").fadeOut(function(){
        $(".zombie_wc_main").fadeIn();
    });
    $(".mystic_wc_main").fadeOut(function(){
        $(".zombie_wc_main").fadeIn();
    });
    $(".guesser_wc_main").fadeOut(function(){
        $(".zombie_wc_main").fadeIn();
    });
    $(".side_line_3").animate({
        width:40,
        backgroundColor:'#19BE6F'
    });
    $(".side_line_0").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_1").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_2").animate({
        width:20,
        backgroundColor: 'white'
    });
    $(".side_line_4").animate({
        width:20,
        backgroundColor: 'white'
    });
});

$(".side_line_4").on('click',function(){
    $(".fuyu_wc_main").fadeOut(function(){
        $(".guesser_wc_main").fadeIn();
    });
    $(".rugs_wc_main").fadeOut(function(){
        $(".guesser_wc_main").fadeIn();
    });
    $(".mystic_wc_main").fadeOut(function(){
        $(".guesser_wc_main").fadeIn();
    });
    $(".zombie_wc_main").fadeOut(function(){
        $(".guesser_wc_main").fadeIn();
    });
    $(".side_line_4").animate({
        width:40,
        backgroundColor:'#9319BE'
    });
    $(".side_line_0").animate({
        width:20,
        backgroundColor:'white'
    });
    $(".side_line_1").animate({
        width:20,
        backgroundColor:'white'
    });
    $(".side_line_2").animate({
        width:20,
        backgroundColor:'white'
    });
    $(".side_line_3").animate({
        width:20,
        backgroundColor:'white'
    });
});


$(".work_page_banner").on('click',function(){
    $(".rugsusa_circle").fadeIn();
    $(".rugsusa_work_page").fadeOut();
});

$(".rugsusa_circle").on('click',function(){
    $(".rugsusa_circle").fadeOut();
    $(".rugsusa_work_page").fadeIn();
});

$(".fuyuramen_circle").on('click',function(){
    $(".fuyuramen_work_page").fadeIn();
});

$(".mystic_circle").on('click',function(){
    $(".mystic_work_page").fadeIn();
});

$(".zombiedice_circle").on('click',function(){
    $(".zombiedice_work_page").fadeIn();
});

$(".guesser_circle").on('click',function(){
    $(".guesser_work_page").fadeIn();
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
