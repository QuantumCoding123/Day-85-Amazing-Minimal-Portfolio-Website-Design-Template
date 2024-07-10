(function ($) {
	"use strict";
	//mixItUp Portfolio
	$('.portfolio').mixItUp();
	var width = ($(".text").width() / 2);
	var height = ($(".text").height() / 2);
	$(".text").css({
		'margin-top': -height+'px'	
	});
	
	
	
	
	/* hover 3d init for tilt  */
	if ($('#portfolio .inner-portfolio .portfolio .mix').length > 0) {
		$('#portfolio .inner-portfolio .portfolio .mix').tilt({
			maxTilt: 20,
			perspective: 1000,
			easing: "cubic-bezier(.03,.2,.5,.4)",
			scale: 1,
			speed: 500,
			transition: true,
		});
	}	
		
	/* scrollUp */
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 1000, // Animation in speed (ms)
		animationOutSpeed: 1000, // Animation out speed (ms)
		scrollText: 'UP', // Text for element
	});		
	
	
	
	
	
})(jQuery);	