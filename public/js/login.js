(function($) {
    "use strict"; // Start of use strict

    $('#login-form').submit(function(event) {
        event.preventDefault();
        
        let username = $("#username-input").val();
        let password = $("#password-input").val();
        $(".error").text("");
        $("#error-confirm").text("");

        //VALIDATING USERNAME, must be unique
        if (username == "") {
            $("#error-username").append("Username is missing.");
        }
        if (password == "") {
            $("#error-password").append("Password is missing.");
        } 
        if (username && password) {
            $.get('/loginCheck', 'username='+username+'&password='+password, function(data, status){
                if (data) {
                    window.location.replace("/");
                } else {
                    $("#error-confirm").text("Username and/or password are invalid.")
                }
            });
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
