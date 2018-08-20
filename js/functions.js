$(function() {


	function show(){
		$(".panel").removeClass('active');
		$(".subpanel").addClass('active');
		$(".back a").fadeIn('slow').css("display", "flex");
	}

	function hide(){
		$(".panel").addClass('active');
		$(".subpanel").removeClass('active');
		$(".back a").fadeOut('slow');
	}

	$(".cover").click(function(){
		show()
	})

	$(".back a").click(function(){
		hide()
	})


}); // ---------------- FONCTION GLOBALE  ----------------- //