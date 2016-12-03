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
            $("#navbar").append("<li><a class='page-scroll' href='/search'>SEARCH</a></li>");
        }
        else if (data) {
            //IN NAVBAR
            //add search link
            $("#navbar").append("<li><a class='page-scroll' href='/search'>SEARCH</a></li>");
            //add profile link
            $("#navbar").append("<li><a class='page-scroll' href='/profile?username='"+data+">PROFILE</a></li>");
            //add logout link
            $("#navbar").append("<li><a class='page-scroll' href='/logout'>LOGOUT</a></li>");
            $("#welcome").text("Welcome back, "+data+"!");
            $("#signup-button").hide();
            $("#login-button").hide();
        }
    });

    

    $.get('/listings', "", function(data, status) {
        
        for (let i=0; i < 12; i++) {
            if (data[i] != undefined) {
                console.log(JSON.stringify(data[i]));
                $("#recent").append(
                    "<div class='col-sm-4 col-lg-4 col-md-4' class='recent-row'>"+
                        "<div class='thumbnail'>"+
                            "<img src='"+data[i].picture+"' alt='listing-image' class='recent-img'>"+
                            "<div class='caption'>"+
                                "<h3 class='pull-right'>"+data[i].price+"</h3>"+
                                "<h3 style='text-align: left; font-size: 19px;'><a href='/listing?id="+data[i]._id+"'>"+data[i].title+"</a></h3>"+
                                // "<p style='font-size: 12px; text-align: left'>Posted by "+data[i].user_id+" on "+data[i].date+"</p>"+
                                "<p style='font-size: 14px; text-align: left'>"+data[i].description+"</p>"+
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
