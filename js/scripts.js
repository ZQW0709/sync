(function($){

	"use strict";

	$(window).load(function() {

		// Preloader
		$('.loader').fadeOut();
		$('.loader-mask').delay(350).fadeOut('slow');

		$(window).trigger("resize");
		masonry();
		initOwlCarousel();

		setTimeout(function() {
			$.stellar('refresh');
		}, 1000);
	});


	$(window).resize(function(){

		container_full_height_init();
		$.stellar('refresh');
		$('.equal-height').matchHeight();
		
		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
			$('.navigation-overlay').removeClass("sticky");	
		}

		/* Mobile Menu Resize
		-------------------------------------------------------*/
		$(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
		
	});


	// Sticky menu
	$(window).scroll(function(){

		var windowWidth = $(window).width();

		if ($(window).scrollTop() > 10 & windowWidth > 974){
			$('.navigation-overlay, .navbar-fixed-top').addClass("sticky");
			$('.logo-wrap').addClass("shrink");
		}else{
			$('.navigation-overlay, .navbar-fixed-top').removeClass("sticky");
			$('.logo-wrap').removeClass("shrink");
		}
	});

	/* Onepage Nav
	-------------------------------------------------------*/
	$('.onepage-nav .navbar-collapse ul li a').on('click',function() {
		$(".navbar-collapse").collapse('hide');
	});


	// Smooth Scroll Navigation
	$('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});












	


})(jQuery);


