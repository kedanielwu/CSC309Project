(function($) {
    "use strict"; // Start of use strict
    
    function createUser() {
        let username = $("#username-input").val();
        let password = $("#password-input").val();
        let confirm_password = $("#confirm-password-input").val();
        let email = $("#email-input").val();
        let phone =  $("#phone-input").val();
        let area = $("#area-input").val();
        let url = $("#picture-input").val();
        $(".error").text("");
        $("#error-confirm").text("");

        //VALIDATING PASSWORD
        if (password == "") {
            $("#error-password").append("Password is required.<br>");
            return false;
        } 
        if (password.length < 5) {
            $("#error-password").append("Password must be at least 5 characters.");
            return false;
        }
        if (confirm_password != password){
            $("#error-confirm").append("Passwords do not match.");
            return false;
        }

        $.post('/users',
            {
            "username": username,
            "password": password,
            "email": email,
            "phone": phone,
            "area": area,
            "picture": url,
            "userType": "user",
            }, 
            function(data, status) {
                console.log("Data: "+data+" and status: "+status);
                //clear form fields
                $.get('/loginCheck', 'username='+username+'&password='+password, function(data, status){
                    if (data) {
                        window.location.replace("/");
                    }
                });
            }
        );        
    }

    function validateEmail() {
        let email = $("#email-input").val();
        $.get('/users', "&email="+email, function(data, status) {
            if (data.length > 0) { //email is invalid
                $("#error-email").append("This email already has an account.");
                return false;
            } else {
                createUser(); //check the rest of the fields, then add user
                return true;
            }
        });
    }

    $('#signup-form').submit(function(event) {
        event.preventDefault();
        
        let username = $("#username-input").val();
        let password = $("#password-input").val();
        let confirm_password = $("#confirm-password-input").val();
        let email = $("#email-input").val();
        $(".error").text("");
        $("#error-confirm").text("");

        //VALIDATING USERNAME, must be unique
        if (username == "") {
            $("#error-username").append("Username is required.");
        } else {
            $.get('/users', "&username="+username, function(data, status) {
                console.log(JSON.stringify(data));
                if (data.length > 0) { //username is invalid
                    $("#error-username").text("Username is already taken.");
                    return false;
                } else {
                    validateEmail();
                    return true;
                }
            });
        }

        //VALIDATING EMAIL,must be unique
        if (email == ""){
            $("#error-email").append("Email is required.");
            return false;
        } else {
            validateEmail();
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
