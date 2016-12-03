(function($) {
    "use strict"; // Start of use strict

    $.get('/currentUser', "", function(data, status) { //check if current user has signed up
        if (data) {
            $("#welcome").text("Welcome back, "+data+"!");
            $("#signup-button").hide();
            $("#login-button").hide();
        }
    });

    $.get('/listings', "", function(data, status) {
        
        for (let i=0; i < 4; i++) {
            if (data[i] != undefined) {
                // console.log(JSON.stringify(data[i]));
                $("#recent").append(
                    "<div class='col-sm-4 col-lg-4 col-md-5'>"+
                        "<div class='thumbnail'>"+
                            "<img src='"+data[i].picture+"' alt='listing-image'>"+
                            "<div class='caption'>"+
                                "<h4 class='pull-right'>"+JSON.stringify(data[i].price)+"</h4>"+
                                "<h4><a href='#''>"+JSON.stringify(data[i].title)+"</a>"+
                                "</h4>"+
                                "<p>"+JSON.stringify(data[i].description)+"</p>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
                );
            }
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict
