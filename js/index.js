
$(document).ready(function(){
    let windowHeight = $(window).height();

    $(window).scroll(function(){
        if(window.pageYOffset > window.innerWidth *1){
            $("#buttonTop").fadeIn();
        } else {
            $("#buttonTop").fadeOut();
        }
       
    })


    $("#buttonTop").click(function(){
        scrollNav()
    })

    function scrollNav (arg = 0){
        $(" body , html").animate({
            scrollTop: arg ,
        }, 100)
    }
})

$(document).ready(function(){
    $("body, html").on({
        mousemove: function(e){
            $("#onmouse").css({
                "left": e.pageX,
                "top": e.pageY
            })
        },
       
    })
})

$(document).ready(function(){
    $("body, html").on({
        mousemove: function(e){
            $("#onmouse2").css({
                "left": e.pageX,
                "top": e.pageY
            })
        },
      
    })
})

$(document).ready(function(){
    $("body, html").on({
        mousemove: function(e){
            $("#onmouse3").css({
                "left": e.pageX,
                "top": e.pageY
            })
        },
       
    })
})




$(document).ready( function(){
    $("#navbarButton").on("click" , function(){
         $(".menyu__nav").slideToggle(1000)
    })
})


//  wow js start

new WOW().init();

//  wow js end
