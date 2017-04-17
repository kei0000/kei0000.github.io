$(document).ready(function(){

	// Navigation menu scrollTo
	$('header nav ul li a').click(function(event){
		event.preventDefault();
		var section = $(this).attr('href');
		var section_pos = $(section).position();

		if(section_pos){
			$(window).scrollTo({top:section_pos.top, left:'0px'}, 1000);
		}
	});


	//Show & Hide menu on mobile
	$('.burger_icon').click(function(){
		$('header nav').toggleClass('show');
		$('header .burger_icon').toggleClass('active');
	});


	//wow.js on scroll animations initialization
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 50
		}
	);
	wow.init();


	//parallax effect initialization
	$('.hero').parallax("50%", 0.3);

    //  https://memocarilog.info/jquery/3074 
	//Nice scroll initialization
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});


	//Testimonials slider initialization
	$("#tslider").owlCarousel({
		items : 1,
		navigation : true,
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		responsive: true,
		autoPlay : true,
		transitionStyle : "fade"
	});

});