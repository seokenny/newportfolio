$(document).ready(function(){
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
            rugsusaSideLine();
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
            fuyuramenSideLine();
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
        mysticSideLine();
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
        zombieSideLine();
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
        guesserSideLine();
    });

    $(".go_back p").on('click',function(){
        $("html, body").animate({
            scrollTop: $(".m_work_page").offset().top
        },750, 'easeOutExpo', function(){
            $(".swipe_overlay").show();
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
            console.log("asdasdsadsa");
    });

    $(".guesser_down_arrow").on('click',function(){
        $("html, body").animate({
            scrollTop: $(".guesser_work_descript").offset().top - 100},750,
            'easeOutExpo');
    });

    $(".work_circle, .work_company").on('click',function(){
        $(".go_back").fadeIn();
    });

    /**WORK CIRCLE**/
    $(".rugsusa_circle, .rugsusa_company").on('click',function(){
        $(".rugsusa_circle").fadeOut();
        $(".side_line_nav").fadeOut();
        $(".swipe_overlay").fadeOut();
        $(".rugsusa_work_page").fadeIn();
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
        $(".m_nav_menu").toggleClass("hidden", 300);
        $(".side_line_nav").fadeIn();
        $(".m_nav_menu").removeClass("slideInRight");
        $("#about_container").removeClass("fadeIn");
        $("#about_container").addClass("fadeOut");
        $("#about_container").addClass("hidden");
        $("#contact_container").removeClass("fadeIn");
        $("#contact_container").addClass("fadeOut");
        $("#contact_container").addClass("hidden");
    });

    $(".desk_nav_home").on('click',function(){
        $(".side_line_nav").fadeIn();
        $("#about_container").removeClass("fadeIn");
        $("#about_container").addClass("fadeOut");
        $("#about_container").addClass("hidden");
        $("#contact_container").removeClass("fadeIn");
        $("#contact_container").addClass("fadeOut");
        $("#contact_container").addClass("hidden");
    });

    $(".m_nav_about").on('click',function(){
        $(".m_nav_menu").toggleClass("hidden", 300);
        $(".side_line_nav").fadeOut();
        $(".m_nav_menu").removeClass("slideInRight");
        $("#about_container").removeClass("hidden");
        $("#about_container").removeClass("fadeOut");
        $("#about_container").addClass("fadeIn");
        $("#contact_container").removeClass("fadeIn");
        $("#contact_container").addClass("fadeOut");
        $("#contact_container").addClass("hidden");
    });

    $(".desk_nav_about").on('click',function(){
        $(".side_line_nav").fadeOut();
        $("#about_container").removeClass("hidden");
        $("#about_container").removeClass("fadeOut");
        $("#about_container").addClass("fadeIn");
        $("#contact_container").removeClass("fadeIn");
        $("#contact_container").addClass("fadeOut");
        $("#contact_container").addClass("hidden"); 
    });

    $(".m_nav_contact").on('click',function(){
        $(".m_nav_menu").toggleClass("hidden", 300);
        $(".side_line_nav").fadeOut();
        $(".m_nav_menu").removeClass("slideInRight");
        $("#contact_container").removeClass("hidden");
        $("#contact_container").removeClass("fadeOut");
        $("#contact_container").addClass("fadeIn");
    });

    $(".desk_nav_contact").on('click',function(){
        $(".side_line_nav").fadeOut();
        $("#contact_container").removeClass("hidden");
        $("#contact_container").removeClass("fadeOut");
        $("#contact_container").addClass("fadeIn");
    });

    $(".full_burger_line").on('click',function(){
            $(".m_nav_menu").toggleClass("hidden");
            $(".m_nav_menu").removeClass("slideOutRight");
            $(".m_nav_menu").addClass("slideInRight");
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


    /**CIRCLE SWIPING**/
    $(".swipe_overlay").stop().touchwipe({
        wipeDown: function(){
            if($(".rugs_wc_main").css("display") == "block"){
                $(".rugs_wc_main").fadeOut(function(){
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
            if($(".fuyu_wc_main").css("display") == "block"){
                $(".fuyu_wc_main").fadeOut(function(){
                    $(".rugs_wc_main").fadeIn();
                    rugsusaSideLine();
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

    /**FUNCTIONS**/
    function rugsusaSideLine(){
        $(".side_line_0").animate({
            width:40,
            backgroundColor: "#D02424"
        });
        for(var i = 0; i < 5; i++){
            if(i !== 0){
                $(".side_line_" + i).animate({
                    width:20,
                    backgroundColor:'white'
                });
            }
        }
    }

    function fuyuramenSideLine(){
        $(".side_line_1").animate({
            width:40,
            backgroundColor: '#FFA53C'
        });
        for(var i = 0; i < 5; i++){
            if(i !== 1){
                $(".side_line_" + i).animate({
                    width:20,
                    backgroundColor:'white'
                });
            }
        }
    }

    function mysticSideLine(){
        $(".side_line_2").animate({
            width:40,
            backgroundColor:'#2556D4'
        });
        for(var i = 0; i < 5; i++){
            if(i !== 2){
                $(".side_line_" + i).animate({
                    width:20,
                    backgroundColor:'white'
                });
            }
        }
    }

    function zombieSideLine(){
        $(".side_line_3").animate({
            width:40,
            backgroundColor:'#19BE6F'
        });
        for(var i = 0; i < 5; i++){
            if(i !== 3){
                $(".side_line_" + i).animate({
                    width:20,
                    backgroundColor:'white'
                });
            }
        }
    }

    function guesserSideLine(){
        $(".side_line_4").animate({
            width:40,
            backgroundColor:'#9319BE'
        });
        for(var i = 0; i < 5; i++){
            if(i !== 4){
                $(".side_line_" + i).animate({
                    width:20,
                    backgroundColor:'white'
                });
            }
        }
    }

    $(".rugsusa_circle").on('click',function(){
        console.log('asdas');
    });

    $(".m_nav_about, .m_nav_home, .m_nav_contact, .desk_nav_home, .desk_nav_about, .desk_nav_contact").on("click",function(){
        $(".trans1").stop().delay(100).animate({
            left:"100%"
        }, 2000, "easeOutExpo");
        $(".trans2").stop().delay(200).animate({
            left:"100%"
        }, 2000, "easeOutExpo");
        $(".trans3").stop().delay(300).animate({
            left:"100%"
        }, 2000, "easeOutExpo");

        $(".transition").stop().delay(350).css("left","-100%");
    });

    $(".desk_nav_about").on('click',function(){
        console.log("sdasdsad");
        if($(".trans2").css("left") !== "-100%"){
            console.log('asd');
        }
        else console.log("mmm");
    });


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