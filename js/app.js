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

$(".go_back p").on('click',function(){
    $("html, body").animate({
        scrollTop: $(".m_work_page").offset().top
    },750, 'easeOutExpo', function(){
        $(".rugsusa_circle").fadeIn();
        $(".fuyuramen_circle").fadeIn();
        $(".mystic_circle").fadeIn();
        $(".zombiedice_circle").fadeIn();
        $(".guesser_circle").fadeIn();
        $(".go_back").fadeOut();
        $(".side_line_nav").fadeIn();
        $(".rugsusa_work_page").fadeOut();
        $(".fuyuramen_work_page").fadeOut();
        $(".mystic_work_page").fadeOut();
        $(".zombiedice_work_page").fadeOut();
        $(".guesser_work_page").fadeOut();
    });
});

function scrollDownward() {
    $("html, body").stop().animate({
        scrollTop: $(".rugsusa_work_descript").stop().offset().top - 100},750,
        'easeOutExpo');
        console.log('working');
}

$(".rugsusa_down_arrow").on('click',function(){
    scrollDownward();
});

$(".fuyuramen_down_arrow").on('click',function(){
    $("html, body").animate({
        scrollTop: $(".fuyuramen_work_descript").offset().top - 100},750,
        'easeOutExpo');
});

$(".mystiq_down_arrow").on('click',function(){
    $("html, body").animate({
        scrollTop: $(".mystiq_work_descript").offset().top - 100},750,
        'easeOutExpo');
});

$(".zombiedice_down_arrow").on('click',function(){
    $("html, body").animate({
        scrollTop: $(".zombiedice_work_descript").offset().top - 100},750,
        'easeOutExpo');
});

$(".guesser_down_arrow").on('click',function(){
    $("html, body").animate({
        scrollTop: $(".guesser_work_descript").offset().top - 100},750,
        'easeOutExpo');
});

$(".work_circle").on('click',function(){
    $(".go_back").fadeIn();
});

$(".rugsusa_circle").on('click',function(){
    $(".rugsusa_circle").fadeOut();
    $(".side_line_nav").fadeOut();
    $(".rugsusa_work_page").fadeIn();
});

$(".fuyuramen_circle").on('click',function(){
    $(".fuyuramen_work_page").fadeIn();
    $(".fuyuramen_circle").fadeOut();
});

$(".mystic_circle").on('click',function(){
    $(".mystic_work_page").fadeIn();
    $(".mystic_circle").fadeOut();
});

$(".zombiedice_circle").on('click',function(){
    $(".zombiedice_work_page").fadeIn();
    $(".zombiedice_circle").fadeOut();
});

$(".guesser_circle").on('click',function(){
    $(".guesser_work_page").fadeIn();
    $(".guesser_circle").fadeOut();
});

/**NAVIGATION */
// $(".m_nav_home").stop().on('click',function(){
//     $(".m_nav_menu").stop().fadeOut(function(){
//         $("#contact_container").stop().fadeOut();
//         $("#about_container").stop().fadeOut(function(){
//             $('.work_circle_contain').stop().fadeIn();
//         });
//     });
// });

// $('.m_nav_about').stop().on('click',function(){
//     $(".m_nav_menu").stop().fadeOut(function(){
//         $('.work_circle_contain').stop().fadeOut();
//         $(".rugsusa_work_page").fadeOut();
//         $('.m_work_page').stop().fadeOut(function(){
//             $('#about_container').stop().fadeIn();
//         });
//     });
// });


// $(".m_nav_contact").on('click',function(){
//     $(".m_nav_menu").fadeOut(function(){
//         $(".work_circle_contain").fadeOut();
//         $("#about_container").fadeOut(function(){
//             $("#contact_container").fadeIn();
//         });
//     });
// });

// $(".full_burger_line").on('click',function(){
//     if($(".m_nav_menu").css('display') == 'block'){
//         $(".m_nav_menu").fadeOut();
//         $("#container").removeAttr('style'); 
//     }
//     else {
//         $(".m_nav_menu").fadeIn();
//         $("#container").css('overflowY','auto');
//     }
// });

$(".m_nav_home").on('click',function(){
    $(".m_nav_menu").toggleClass("hidden");
    $(".work_circle_contain").removeClass("fadeOut");
    $(".work_circle_contain").addClass("fadeIn");
    $("#about_container").removeClass("fadeIn");
    $("#about_container").addClass("fadeOut");
});

$(".m_nav_about").on('click',function(){
    $(".m_nav_menu").toggleClass("hidden");
    $(".work_circle_contain").addClass("fadeOut");
    $("#about_container").removeClass("hidden");
    $("#about_container").removeClass("fadeOut");
    $("#about_container").addClass("fadeIn");
});

$(".full_burger_line").on('click',function(){
    $(".m_nav_menu").toggleClass("hidden");
    $(".m_nav_menu").toggleClass("slideInRight");
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});