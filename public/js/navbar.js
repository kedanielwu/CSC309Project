(function($) {
    "use strict"; // Start of use strict    

    $.get('/currentUserType', "", function(data, status) {
        // alert(data);
        if (data) {
            //IN NAVBAR
            //add admin link
            $("#navbar").append("<li><a class='page-scroll' href='/admin'>DASHBOARD</a></li>"); 
            $("#signup-button").hide();
            $("#login-button").hide();
        }
    });

    $.get('/currentUser', "", function(data, status) { //check if current user has signed up
        if (!data) {
            // $("#navbar").append("<li><a class='page-scroll' href='/search'>SEARCH</a></li>");
        }
        else if (data) {
            //IN NAVBAR
            //add profile link
            $("#navbar").append("<li><a class='page-scroll' href='/users?username="+data+"'>PROFILE</a></li>");
            //add logout link
            $("#navbar").append("<li><a class='page-scroll' href='/logout'>LOGOUT</a></li>");
            $("#welcome").text("Welcome back, "+data+"!");
            $("#signup-button").hide();
            $("#login-button").hide();
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
