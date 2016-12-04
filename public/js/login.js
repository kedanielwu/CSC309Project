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
                // alert(data);
                if (data) {
                    window.location.replace("/");
                } else {
                    $("#error-confirm").text("Username and/or password are invalid.")
                }
            });
        }
    });

})(jQuery); // End of use strict
