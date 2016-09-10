$(document).ready(function() {

	$(".custom-navigation").hide();
	$(".navbar-toggle").click(function(){
		$(".custom-navigation").animate({width: "toggle"}, 1000);
	});


	 $(".clear-navigation").click(function(){
	 	$(".custom-navigation").animate({width:"toggle"}, 1000);
	 });


 


});

