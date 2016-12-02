
$(document).ready(function() {

	$("#addListing").submit(function (e) {
	    e.preventDefault();

	    let formData = $('form').serialize();
	    formData += "&user_id=58373d247e59312c4772d231";
	    console.log(formData);
	    $.post('/createlisting', formData);
	});

});