(function($) {
    "use strict"; // Start of use strict

    // Attach search form(s) to backend
    $('#search_form').submit(function(event) {
        event.preventDefault();
        
        let searchText = $("#search_text_input").val().trim();
        let searchKey = $("#search_key_input").val().toLowerCase();

        $.get('/search', searchKey+'='+searchText, function(data, status){
            window.location.replace("/search?" + searchKey+'='+searchText);

            // if (data == "login success") {
            //     window.location.replace("/");
            // } else {
            //     $("#error-confirm").text("Username and/or password are invalid.")
            // }
        });
        //TODO: validate for security? does mongo take care of this?
    });

    // Make results clickable
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

})(jQuery); // End of use strict
