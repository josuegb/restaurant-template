
$(document).ready(function(){
    "use strict"; // Start of use strict

	//Hide mobile menu on click
	$('.navbar-collapse ul li a').on('click', function(event) {
		if (window.matchMedia("(max-width: 760px)").matches) {
			$(this).closest('.collapse').collapse('toggle');
		}
	});

	//Update the active section
	$(window).on('load hashchange', function() {
		var bodyLocation = $('body').scrollTop();
		location.hash === '#contact' ? bodyLocation+=65 : bodyLocation-=65;
		$('body').scrollTop(bodyLocation);
	});
	$('body').scrollspy({target: ".navbar", offset: 180}); 

	//Script to Activate the Carousel
	$('.carousel').carousel({
		interval: 5000, // Changes the speed
		pause:null  // If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to null, hovering over the carousel won't pause it.
	});

	// Offset for Main Navigation
    $('#header-main-nav').affix({
        offset: {
            top: 100
        }
    })
	 
}); // End of use strict
