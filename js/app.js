// $(".work_descript_text").on('click',function(){
//     $(".work_descript_text").animate({opacity:0});
// });

// $(".work_descript_header").on('click',function(){
//     $(".work_descript_text").animate({opacity:1});
// });

$(".side_line_0").on('click',function(){
    
    if($('.side_line_0').css('width') !== 40){
        $(".side_line_0").animate({
            width:40
        });
    }
    else if($('.side_line_0').css('width') == 40){
        $(".side_line_0").animate({
            width:20
        });
    }
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
        });
    });
});

$('.m_nav_about').on('click',function(){
    $(".m_nav_menu").fadeOut(function(){
        $('#work_container').fadeOut(function(){
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