(function($) {
    "use strict"; // Start of use strict

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
                                "<h3 style='text-align: left; font-size: 19px;'><a href='/listings?id="+data[i]._id+"'>"+data[i].title+"</a></h3>"+
                                // "<p style='font-size: 12px; text-align: left'>Posted by "+data[i].user_id+" on "+data[i].date+"</p>"+
                                "<p style='font-size: 14px; text-align: left'>"+data[i].description+"</p>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
                );
            }
        }
    });

})(jQuery); // End of use strict
