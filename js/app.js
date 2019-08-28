$(document).ready(function(){
    $(".side_line_0").on('click',function(){
            $(".konditori_wc_main").fadeOut(function(){
                $(".rugs_wc_main").fadeIn();
            });
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
            rugsusaSideLine();
    });

    $(".side_line_1").on('click',function(){
        $(".rugs_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".fuyu_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".mystic_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".zombie_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".guesser_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        konditoriSideLine();
    });

    $(".side_line_2").on('click',function(){
            $(".rugs_wc_main").fadeOut(function(){
                $(".fuyu_wc_main").fadeIn();
            });
            $(".konditori_wc_main").fadeOut(function(){
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
            fuyuramenSideLine();
    });

    $(".side_line_3").on('click',function(){
        $(".fuyu_wc_main").fadeOut(function(){
            $(".mystic_wc_main").fadeIn();
        });
        $(".konditori_wc_main").fadeOut(function(){
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
        mysticSideLine();
    });

    $(".side_line_4").on('click',function(){
        $(".fuyu_wc_main").fadeOut(function(){
            $(".zombie_wc_main").fadeIn();
        });
        $(".konditori_wc_main").fadeOut(function(){
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
        zombieSideLine();
    });

    $(".side_line_5").on('click',function(){
        $(".fuyu_wc_main").fadeOut(function(){
            $(".guesser_wc_main").fadeIn();
        });
        $(".konditori_wc_main").fadeOut(function(){
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
        guesserSideLine();
    });

    $(".go_back p").on('click',function(){
        $("html, body").animate({
            scrollTop: $(".m_work_page").offset().top
        },750, 'easeOutExpo', function(){
            $(".swipe_overlay").show();
            $(".rugsusa_circle").fadeIn();
            $(".konditori_circle").fadeIn();
            $(".fuyuramen_circle").fadeIn();
            $(".mystic_circle").fadeIn();
            $(".zombiedice_circle").fadeIn();
            $(".guesser_circle").fadeIn();
            $(".go_back").fadeOut();
            $(".side_line_nav").fadeIn();
            $(".rugsusa_work_page").fadeOut();
            $(".konditori_work_page").fadeOut();
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

    $(".konditori_down_arrow").on('click',function(){
        $("html, body").animate({
            scrollTop: $(".konditori_work_descript").offset().top - 100},750,
            'easeOutExpo');
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
            console.log("asdasdsadsa");
    });

    $(".guesser_down_arrow").on('click',function(){
        $("html, body").animate({
            scrollTop: $(".guesser_work_descript").offset().top - 100},750,
            'easeOutExpo');
    });

    $(".work_circle, .work_company").on('click',function(){
        $(".go_back").fadeIn();
        $(".social_list").fadeOut();
        $(".swipe_overlay").hide();
        $(".swipe_overlay").removeClass("activeOverlay");
        $(".desk_nav_item").css({
            opacity: 0
        });
    });

    /**WORK CIRCLE**/
    $(".rugsusa_circle, .rugsusa_company").on('click',function(){
        $(".rugsusa_circle").fadeOut();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".rugsusa_work_page").fadeIn();
        $("#container").css("overflow","unset");
    });

    $(".konditori_circle, .konditori_company").on('click',function(){
        $(".konditori_work_page").fadeIn();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".konditori_circle").fadeOut();
        $("#container").css("overflow","unset");
    });

    $(".fuyuramen_circle, .fuyuramen_company").on('click',function(){
        $(".fuyuramen_work_page").fadeIn();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".fuyuramen_circle").fadeOut();
        $("#container").css("overflow","unset");
    });

    $(".mystic_circle, .mystic_company").on('click',function(){
        $(".mystic_work_page").fadeIn();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".mystic_circle").fadeOut();
        $("#container").css("overflow","unset");
    });

    $(".zombiedice_circle, .zombiedice_company").on('click',function(){
        $(".zombiedice_work_page").fadeIn();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".zombiedice_circle").fadeOut();
        $("#container").css("overflow","unset");
    });

    $(".guesser_circle, .guesser_company").on('click',function(){
        $(".guesser_work_page").fadeIn();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".guesser_circle").fadeOut();
        $("#container").css("overflow","unset");
    });

    /**NAVIGATION**/
    $(".m_nav_home").on('click',function(){
        goBackMenu();
        whiteTextHome();
        $(".black_overlay").fadeIn(function(){
            $(".m_nav_menu").toggleClass("hidden", 700);
            $(".side_line_nav").fadeIn();
            $(".m_nav_menu").removeClass("bounceInRight");
            $(".m_nav_menu").addClass("bounceOutRight");
            $("#about_container").addClass("hidden");
            $("#contact_container").addClass("hidden",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });
    });

    $(".desk_nav_home").on('click',function(){
        goBackMenu();
        whiteTextHome();
        $(".black_overlay").fadeIn(function(){
            $(".side_line_nav").fadeIn();
            $(".work_circle").fadeIn();
            $(".work_text").fadeIn();
            $("#about_container").removeClass("fadeIn");
            $("#about_container").addClass("fadeOut");
            $("#about_container").addClass("hidden");
            $("#contact_container").removeClass("fadeIn");
            $("#contact_container").addClass("fadeOut");
            $("#contact_container").addClass("hidden",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });
    });

    $(".m_nav_about").on('click',function(){
        goBackMenu();
        whiteTextAbout();
        $(".black_overlay").fadeIn(function(){
            $(".m_nav_menu").toggleClass("hidden", 700);
            $(".side_line_nav").hide();
            $(".m_nav_menu").removeClass("bounceInRight");
            $(".m_nav_menu").addClass("bounceOutRight");
            $("#about_container").removeClass("hidden");
            $("#about_container").removeClass("fadeOut");
            $("#about_container").addClass("fadeIn");
            $("#contact_container").removeClass("fadeIn");
            $("#contact_container").addClass("fadeOut");
            $("#contact_container").addClass("hidden",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });
    });

    $(".desk_nav_about").on('click',function(){
        // pageChange();
        goBackMenu();
        whiteTextAbout();
        $(".black_overlay").fadeIn(function(){
            $(".side_line_nav").fadeOut();
            $(".work_circle").fadeOut();
            $(".work_text").fadeOut();
            $("#about_container").removeClass("hidden");
            $("#about_container").removeClass("fadeOut");
            $("#about_container").addClass("fadeIn");
            $("#contact_container").removeClass("fadeIn");
            $("#contact_container").addClass("fadeOut");
            $("#contact_container").addClass("hidden",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });

    });

    $(".m_nav_contact").on('click',function(){
        goBackMenu();
        whiteTextContact();
        $(".black_overlay").fadeIn(function(){
            $(".m_nav_menu").toggleClass("hidden", 700);
            $(".side_line_nav").hide();
            $(".m_nav_menu").removeClass("bounceInRight");
            $(".m_nav_menu").addClass("bounceOutRight");
            $("#about_container").removeClass("fadeIn");
            $("#about_container").addClass("fadeOut");
            $("#about_container").addClass("hidden");
            $("#contact_container").removeClass("hidden");
            $("#contact_container").removeClass("fadeOut");
            $("#contact_container").removeClass("hidden",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });
    });

    $(".desk_nav_contact").on('click',function(){
        goBackMenu();
        whiteTextContact();
        $(".black_overlay").fadeIn(function(){
            $(".side_line_nav").fadeOut();
            $(".work_circle").fadeOut();
            $(".work_text").fadeOut();
            $("#about_container").removeClass("fadeIn");
            $("#about_container").addClass("fadeOut");
            $("#about_container").addClass("hidden");
            $("#contact_container").removeClass("hidden");
            $("#contact_container").removeClass("fadeOut");
            $("#contact_container").addClass("fadeIn",function(){
                $(".black_overlay").delay(550).fadeOut();
            });
        });
    });

    $(".full_burger_line").on('click',function(){
        if($(".m_nav_menu").hasClass("bounceInRight")){
            $(".m_nav_menu").removeClass("bounceInRight");
            $(".m_nav_menu").addClass("bounceOutRight");
        }
        else {
            $(".m_nav_menu").removeClass("hidden");
            $(".m_nav_menu").removeClass("bounceOutRight");
            $(".m_nav_menu").addClass("bounceInRight");
        }
    });

    function whiteTextHome() {
        $(".desk_nav_home").addClass("whiteText");
        $(".desk_nav_about").removeClass("whiteText");
        $(".desk_nav_contact").removeClass("whiteText");
    }

    function whiteTextAbout() {
        $(".desk_nav_home").removeClass("whiteText");
        $(".desk_nav_about").addClass("whiteText");
        $(".desk_nav_contact").removeClass("whiteText");
    }

    function whiteTextContact() {
        $(".desk_nav_home").removeClass("whiteText");
        $(".desk_nav_about").removeClass("whiteText");
        $(".desk_nav_contact").addClass("whiteText");
    }

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


    /**CIRCLE SWIPING**/
    $(".swipe_overlay").stop().touchwipe({
        wipeDown: function(){
            if($(".rugs_wc_main").css("display") == "block"){
                $(".rugs_wc_main").fadeOut(function(){
                    $(".konditori_wc_main").fadeIn();
                    konditoriSideLine();
                });
            }
            else if($(".konditori_wc_main").css("display") == "block"){
                $(".konditori_wc_main").fadeOut(function(){
                    $(".fuyu_wc_main").fadeIn();
                    fuyuramenSideLine();
                });
            }
            else if($(".fuyu_wc_main").css("display") == "block"){
                $(".fuyu_wc_main").fadeOut(function(){
                    $(".mystic_wc_main").fadeIn();
                    mysticSideLine();
                });
            }
            else if($(".mystic_wc_main").css("display") == "block"){
                $(".mystic_wc_main").fadeOut(function(){
                    $(".zombie_wc_main").fadeIn();
                    zombieSideLine();
                });
            }
            else if($(".zombie_wc_main").css("display") == "block"){
                $(".zombie_wc_main").fadeOut(function(){
                    $(".guesser_wc_main").fadeIn();
                    guesserSideLine();
                });
            }
        },
        wipeUp: function(){
            if($(".konditori_wc_main").css("display") == "block"){
                $(".konditori_wc_main").fadeOut(function(){
                    $(".rugs_wc_main").fadeIn();
                    rugsusaSideLine();
                });
            }
            else if($(".fuyu_wc_main").css("display") == "block"){
                $(".fuyu_wc_main").fadeOut(function(){
                    $(".konditori_wc_main").fadeIn();
                    konditoriSideLine();
                });
            }
            else if($(".mystic_wc_main").css("display") == "block"){
                $(".mystic_wc_main").fadeOut(function(){
                    $(".fuyu_wc_main").fadeIn();
                    fuyuramenSideLine();
                });
            }
            else if($(".zombie_wc_main").css("display") == "block"){
                $(".zombie_wc_main").fadeOut(function(){
                    $(".mystic_wc_main").fadeIn();
                    mysticSideLine();
                });
            }
            else if($(".guesser_wc_main").css("display") == "block"){
                $(".guesser_wc_main").fadeOut(function(){
                    $(".zombie_wc_main").fadeIn();
                    zombieSideLine();
                });
            }
        }
    });

function pageChange() {

        $(".trans1").stop().delay(100).animate({
            left:"0"
        }, "easeOutExpo");
        $(".trans2").stop().delay(200).animate({
            left:"0"
        }, "easeOutExpo");
        $(".trans3").stop().delay(300).animate({
            left:"0"
        }, "easeOutExpo");
        $(".trans1, .trans2, .trans3").delay(450).fadeOut(function(){
            $(".trans1, .trans2, .trans3").css('left','-100%').fadeIn();
        });
  
}

    // $(".m_nav_about, .m_nav_home, .m_nav_contact, .desk_nav_home, .desk_nav_about, .desk_nav_contact").on("click",function(){
    //     $(".trans1").stop().delay(100).animate({
    //         left:"0"
    //     }, "easeOutExpo");
    //     $(".trans2").stop().delay(200).animate({
    //         left:"0"
    //     }, "easeOutExpo");
    //     $(".trans3").stop().delay(300).animate({
    //         left:"0"
    //     }, "easeOutExpo");
    //     $(".trans1, .trans2, .trans3").delay(450).fadeOut();
    // });

    /**Navigation desktop slide down animation */
    // $(".desk_nav_home").on('mouseover',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'blue',
    //         marginTop: '10px'
    //     });
    // });
    // $(".desk_nav_home").on('mouseout',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'transparent',
    //         marginTop: '0px'
    //     });
    // });

    // $(".desk_nav_about").on('mouseover',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'blue',
    //         marginTop: '10px'
    //     });
    // });
    // $(".desk_nav_about").on('mouseout',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'transparent',
    //         marginTop: '0px'
    //     });
    // });

    // $(".desk_nav_contact").on('mouseover',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'blue',
    //         marginTop: '10px'
    //     });
    // });
    // $(".desk_nav_contact").on('mouseout',function(){
    //     $(this).stop().animate({
    //         backgroundColor: 'transparent',
    //         marginTop: '0px'
    //     });
    // });

    var scroll_pos = 0;
        $(document).stop().scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 50) {
                $(".desk_menu").stop().animate({
                    backgroundColor: "#131313"
                });
            }
            else $(".desk_menu").stop().animate({
                backgroundColor: 'transparent'
            });
        });
});

$(".preventDef").on('click',function(){
    event.preventDefault;
});

$(".go_back p").on('click',function(){
    goBack();
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       console.log("down");
   } else {
      // upscroll code
      console.log("up");
   }
   lastScrollTop = st;
});


window.addEventListener('wheel', function(e) {
    if($(".swipe_overlay").hasClass("activeOverlay")){
        if (e.deltaY < 0) {
            console.log('scrolling up');
            if($(".side_line_1").hasClass("currentLine")){
                $(".konditori_wc_main").fadeOut(function(){
                  $(".rugs_wc_main").fadeIn();
                  rugsusaSideLine();
              });
            }
            else if ($(".side_line_2").hasClass("currentLine")){
                $(".fuyu_wc_main").fadeOut(function(){
                  $(".konditori_wc_main").fadeIn();
                  konditoriSideLine();
                });
            }
            else if ($(".side_line_3").hasClass("currentLine")){
                $(".mystic_wc_main").fadeOut(function(){
                  $(".fuyu_wc_main").fadeIn();
                  fuyuramenSideLine();
                });
            }
            else if ($(".side_line_4").hasClass("currentLine")){
                $(".zombie_wc_main").fadeOut(function(){
                    $(".mystic_wc_main").fadeIn();
                    mysticSideLine();
                });
            }
            else if ($(".side_line_5").hasClass("currentLine")){
                $(".guesser_wc_main").fadeOut(function(){
                    $(".zombie_wc_main").fadeIn();
                    zombieSideLine();
                });
            }
          }
          if (e.deltaY > 0) {
            console.log('scrolling down');
            if($(".side_line_0").hasClass("currentLine")){
              $(".rugs_wc_main").fadeOut(function(){
                $(".konditori_wc_main").fadeIn();
                konditoriSideLine();
            });
          }
          else if ($(".side_line_1").hasClass("currentLine")){
            $(".konditori_wc_main").fadeOut(function(){
              $(".fuyu_wc_main").fadeIn();
              fuyuramenSideLine();
            });
        }
          else if ($(".side_line_2").hasClass("currentLine")){
              $(".fuyu_wc_main").fadeOut(function(){
                $(".mystic_wc_main").fadeIn();
                mysticSideLine();
              });
          }
          else if ($(".side_line_3").hasClass("currentLine")){
              $(".mystic_wc_main").fadeOut(function(){
                  $(".zombie_wc_main").fadeIn();
                  zombieSideLine();
              });
          }
          else if ($(".side_line_4").hasClass("currentLine")){
              $(".zombie_wc_main").fadeOut(function(){
                  $(".guesser_wc_main").fadeIn();
                  guesserSideLine();
              });
          }
          }
    }
  });

/**FUNCTIONS**/
function rugsusaSideLine(){
    $(".side_line_0").animate({
        width:40,
        backgroundColor: "#D02424"
    });
    document.querySelector(".side_line_0").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 0){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}

function konditoriSideLine(){
    $(".side_line_1").animate({
        width:40,
        backgroundColor: '#FFD166'
    });
    document.querySelector(".side_line_1").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 1){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}

function fuyuramenSideLine(){
    $(".side_line_2").animate({
        width:40,
        backgroundColor: '#06D6A0'
    });
    document.querySelector(".side_line_2").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 2){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}

function mysticSideLine(){
    $(".side_line_3").animate({
        width:40,
        backgroundColor:'#118AB2'
    });
    document.querySelector(".side_line_3").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 3){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}

function zombieSideLine(){
    $(".side_line_4").animate({
        width:40,
        backgroundColor:'#073B4C'
    });
    document.querySelector(".side_line_4").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 4){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}

function guesserSideLine(){
    $(".side_line_5").animate({
        width:40,
        backgroundColor:'#9319BE'
    });
    document.querySelector(".side_line_5").classList.add("currentLine");
    for(var i = 0; i < 6; i++){
        if(i !== 5){
            $(".side_line_" + i).animate({
                width:20,
                backgroundColor:'white'
            });
            document.querySelector(".side_line_" + i).classList.remove("currentLine");
        }
    }
}


function sideLine0() {
    $(".side_line_0").on('click',function(){
        $(".konditori_wc_main").fadeOut(function(){
            $(".rugs_wc_main").fadeIn();
        });
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
        rugsusaSideLine();
    });
}

function sideLine1() {
    $(".side_line_1").on('click',function(){
        $(".rugs_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".fuyu_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".mystic_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".zombie_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        $(".guesser_wc_main").fadeOut(function(){
            $(".konditori_wc_main").fadeIn();
        });
        konditoriSideLine();
    });
}

function sideLine2() {
    $(".side_line_2").on('click',function(){
        $(".rugs_wc_main").fadeOut(function(){
            $(".fuyu_wc_main").fadeIn();
        });
        $(".konditori_wc_main").fadeOut(function(){
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
        fuyuramenSideLine();
    });
}

function sideLine3() {
    $(".side_line_3").on('click',function(){
        $(".konditori_wc_main").fadeOut(function(){
            $(".mystic_wc_main").fadeIn();
        });
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
        mysticSideLine();
        }); 
}

function sideLine4() {
    $(".side_line_4").on('click',function(){
        $(".konditori_wc_main").fadeOut(function(){
            $(".zombie_wc_main").fadeIn();
        });
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
        zombieSideLine();
        });
}

function sideLine5() {
    $(".side_line_5").on('click',function(){
        $(".konditori_wc_main").fadeOut(function(){
            $(".guesser_wc_main").fadeIn();
        });
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
        guesserSideLine();
        });
}

function goBack() {
    $(".go_back").hide();
    $("html, body").animate({
        scrollTop: $(".m_work_page").offset().top
    },750, 'easeOutExpo', function(){
        $(".swipe_overlay").show();
        $(".rugsusa_circle").fadeIn();
        $(".konditori_circle").fadeIn();
        $(".fuyuramen_circle").fadeIn();
        $(".mystic_circle").fadeIn();
        $(".zombiedice_circle").fadeIn();
        $(".guesser_circle").fadeIn();
        $(".go_back").fadeOut();
        $(".side_line_nav").fadeIn();
        $(".rugsusa_work_page").fadeOut();
        $(".konditori_work_page").fadeOut();
        $(".fuyuramen_work_page").fadeOut();
        $(".mystic_work_page").fadeOut();
        $(".zombiedice_work_page").fadeOut();
        $(".guesser_work_page").fadeOut();
        $(".social_list").fadeIn();
        $(".swipe_overlay").show();
        $(".swipe_overlay").addClass("activeOverlay");
        $(".desk_nav_item").css({
            opacity: 100
        })
    });
}

function goBackMenu() {
    $("html, body").animate({
        scrollTop: $(".m_work_page").offset().top
    },750, 'easeOutExpo', function(){
        $(".swipe_overlay").show();
        $(".rugsusa_circle").fadeIn();
        $(".konditori_circle").fadeIn();
        $(".fuyuramen_circle").fadeIn();
        $(".mystic_circle").fadeIn();
        $(".zombiedice_circle").fadeIn();
        $(".guesser_circle").fadeIn();
        $(".go_back").fadeOut();
        $(".rugsusa_work_page").fadeOut();
        $(".konditori_work_page").fadeOut();
        $(".fuyuramen_work_page").fadeOut();
        $(".mystic_work_page").fadeOut();
        $(".zombiedice_work_page").fadeOut();
        $(".guesser_work_page").fadeOut();
        $(".social_list").fadeIn();
    });
}

function fadeInner() {
    $(".cover").fadeIn(100);
    $(".cover").delay(300).fadeOut();
}

$(".code_link").stop().on("mouseover",function(){
    $(this).stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".code_link").stop().on("mouseout",function(){
    $(this).stop().animate({
        backgroundColor: '#131313',
        color: 'white'
    });
});