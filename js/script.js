$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "thanks.html", //Change
			data: th.serialize()
		});
		return false;
	});

});