(function($) {
    "use strict"; // Start of use strict

    // Attach search form(s) to backend
    $('#search_form').submit(function(event) {
        event.preventDefault();
        
        let searchText = $("#search_text_input").val().trim();
        let searchKey = $("#search_key_input").val();
        // cache
        localStorage['searchText'] = searchText;
        localStorage['searchKey'] = searchKey;

        console.log("Search requested");

        let param_string = searchKey.toLowerCase()+'='+searchText.toLowerCase();

        $.get('/search', param_string, function(data, status){
            window.location.replace("/search?" + param_string);
        });
    });

    // Make results clickable
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

    // Allow sorting for results
    $('#sort_by_input').on('change', function() {
      console.log("Sort requested");
        let sortBy = this.value;
        // cache
        localStorage['sortBy'] = sortBy;

        let param_string = localStorage['searchKey'].toLowerCase()+'='+localStorage['searchText'].toLowerCase()+'&sort_by'+'='+sortBy.toLowerCase();
        $.get('/search', param_string, function(data, status){
          window.location.replace("/search?" + param_string);
        });
    })

    // Set 'session' vars
    if (localStorage['sortBy']){
      $('#sort_by_input').val(localStorage['sortBy']);      
    }

    if (localStorage['searchKey']){
      $('#search_key_input').val(localStorage['searchKey']);      
    }

    if (localStorage['searchText']){
      $('#search_text_input').val(localStorage['searchText']);      
    }

})(jQuery); // End of use strict
