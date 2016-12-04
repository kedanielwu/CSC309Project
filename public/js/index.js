(function($) {
    "use strict"; // Start of use strict

    $.get('/listings', "", function(data, status) {
        // console.log(JSON.stringify(data));
        // console.log(JSON.stringify(data.sort(GetSortOrder("date"))));

        let sortedByDate = data.sort(GetSortOrder("date"));
        for (let i=0; i < 12; i++) {
            if (sortedByDate[i] != undefined) {
                $("#recent").append(
                    "<div class='col-sm-4 col-lg-4 col-md-4' class='recent-row'>"+
                        "<div class='thumbnail'>"+
                            "<img src='"+sortedByDate[i].picture+"' alt='listing-image' class='recent-img'>"+
                            "<div class='caption'>"+
                                "<h3 class='pull-right'>"+sortedByDate[i].price+"</h3>"+
                                "<h2 style='text-align: left; font-size: 19px;'><a href='/listings?id="+
                                sortedByDate[i]._id+"'>"+sortedByDate[i].title+"</a></h2>"+
                                "<p style='font-size: 13px; text-align: left'>Posted on "+sortedByDate[i].date+
                                " by <a href='/users?username="+sortedByDate[i].username+"'>"+sortedByDate[i].username+"</a> </p>"+
                                "<p style='font-size: 15px; text-align: left' class='description'>"+sortedByDate[i].description+"</p>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
                );
            }
        }
    });

    function GetSortOrder(prop) {  
        return function(a, b) {  
            if (a[prop] < b[prop]) {  
                return 1;  
            } else if (a[prop] > b[prop]) {  
                return -1;  
            }  
            return 0;  
        }  
    } 

})(jQuery); // End of use strict
