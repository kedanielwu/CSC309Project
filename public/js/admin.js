(function($) {
    "use strict"; // Start of use strict

    $.get('/users', "", function(data, status) {
        $("#total-users").append(" "+data.length);
    });
    $.get('/listings', "", function(data, status) {
        $("#total-listings").append(" "+data.length);
    });

    $('#pop-database').on('click', function(event) {
        let arr;
        try {
            arr = JSON.parse($('#pop-input').val());
        } catch(err) {
            $("#pop-confirm").text(err);
            return false;
        }

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
           $.ajax({
                type: 'POST',
                url: '/users',
                data: arr[i],
                success: function() {
                    $("#pop-confirm").text("Database successfully populated.");
                }
            });            
        }

    });

    $('#delete-database').on('click', function(event) {
        event.preventDefault();
        $("#delete-confirm").text("");
        if (confirm("Are you sure you want to delete all listings and users?")) {
           $.ajax({
                type: 'DELETE',
                url: '/users?all=all',
                success: function() {
                    $("#delete-confirm").text("Database successfully deleted");
                }
            });
        }
    });

})(jQuery); // End of use strict
