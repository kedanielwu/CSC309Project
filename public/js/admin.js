(function($) {
    "use strict"; // Start of use strict

    $.get('/currentUser', "", function(data, status) { //check if current user has signed up
        if (data) {
            $("#navbar").append("<li><a class='page-scroll' href='/admin'>DASHBOARD</a></li>");
            $("#navbar").append("<li><a class='page-scroll' href='/profile?username='"+data+">PROFILE</a></li>");
            $("#navbar").append("<li><a class='page-scroll' href='/logout'>LOGOUT</a></li>");
        }
    });

    $('#delete-database').on('click', function(event) {
        event.preventDefault();
        // $.delete("/users","?id=all", function(data, status) {
        //     console.log(data);
        // });
       // TODO
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
