$(document).ready(function () {
    var user_id = $("#user_id").text();
    $.get("/api/users", {username: user_id},
        function (data) {
            var user = data[0];
            $("#user_description").text(user.description);
            $("#user_phone").text(user.phoneNumber);
            $("#user_email").text(user.email);
            $("#user_name").text(user.username);
            $("#profilePicture").attr("src", user.picture);
        }
    );

    $("#delete").click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "delete",
            url: "/listing",
            data: {id: $("#listing_id").text()},
            dataType: "dataType",
            success: function (response) {
                console.log("success");
            }
        });
    });
});