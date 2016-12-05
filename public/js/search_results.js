(function($) {
    "use strict"; // Start of use strict

    // Make results clickable
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

    // $(".page").click(function() {
    //     href = "";
    //     href += "/search?";
    //     href += localStorage['searchKey'] + "=" localStorage['searchText'];
    //     href += "&page="

    //     window.document.location = $(this).data("href");
    // });

    // // Allow sorting for results
    // $('#sort_by_input').on('change', function() {
    //   console.log("Sort requested");
    //     let sortBy = this.value;
    //     // cache
    //     localStorage['sortBy'] = sortBy;

    //     let param_string = localStorage['searchKey'].toLowerCase()+'='+localStorage['searchText'].toLowerCase()+'&sort_by'+'='+sortBy.toLowerCase();
    //     $.get('/search', param_string, function(data, status){
    //       window.location.replace("/search?" + param_string);
    //     });
    // })

    // Attach search form(s) to backend
    $('#sort_results_form').submit(function(event) {
        event.preventDefault();
        
        let sortBy = $('#sort_by_input').val().toLowerCase();
        let orderBy = $('#order_by_input').val().toLowerCase();

        // cache
        localStorage['sortBy'] = sortBy;
        localStorage['orderBy'] = orderBy;

        console.log("Search requested");

        // let param_string = 
        //   localStorage['searchKey'].toLowerCase()+'='+localStorage['searchText'].toLowerCase()+
        //   '&sort_by'+'='+sortBy+localStorage['searchText'].toLowerCase()+
        //   '&order_by'+'='+orderBy;

        let param_string = localStorage['searchKey'].toLowerCase()+'='+localStorage['searchText'].toLowerCase()+'&sort_by'+'='+sortBy+localStorage['searchText'].toLowerCase()+'&order_by'+'='+orderBy;

          console.log("TEST", param_string);
        
        $.get('/search', param_string, function(data, status){
          window.location.replace("/search?" + param_string);
        });
    });

    // Set 'session' vars
    if (localStorage['sortBy']){
      $('#sort_by_input').val(localStorage['sortBy']);      
    }

    // Set 'session' vars
    if (localStorage['orderBy']){
      $('#order_by_input').val(localStorage['orderBy']);      
    }

    if (localStorage['searchKey']){
      $('#search_key_input').val(localStorage['searchKey']);      
    }

    if (localStorage['searchText']){
      $('#search_text_input').val(localStorage['searchText']);      
    }

})(jQuery); // End of use strict
