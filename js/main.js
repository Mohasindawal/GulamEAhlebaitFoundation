 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();


	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();


$(document).ready(function() {
    // ... (your existing main.js code for Owl Carousel, etc.) ...

    // JavaScript for the Pop-up Donate Button on Page Load
    var popupBtnContainer = document.getElementById("popupDonateButtonContainer");
    var floatingDonateBtn = document.getElementById("floatingDonateBtn");
    var modal = document.getElementById("qrCodeModal"); // Your existing custom modal

    // Get the <span> element that closes the modal (from your custom modal setup)
    var span = document.getElementsByClassName("close-button")[0];

    // Function to show the button after a delay
    setTimeout(function() {
        if (popupBtnContainer) {
            popupBtnContainer.style.display = "block"; // Make the container visible
            // You might want to add a fadeIn effect here with jQuery or CSS transitions
            // e.g., $(popupBtnContainer).fadeIn(500);
        }
    }, 3000); // Show after 3 seconds (3000 milliseconds)

    // When the user clicks the floating donate button, open the modal
    if (floatingDonateBtn) {
        floatingDonateBtn.onclick = function(event) {
            event.preventDefault(); // Prevent default link behavior
            if (modal) {
                modal.style.display = "block";
                $('body').addClass('modal-open-custom'); // Add a class to body to prevent scroll
            }
        }
    }

    // When the user clicks on <span> (x) in the modal, close the modal
    if (span) {
        span.onclick = function() {
            if (modal) {
                modal.style.display = "none";
                $('body').removeClass('modal-open-custom'); // Remove the class from body
            }
        }
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            if (modal) {
                modal.style.display = "none";
                $('body').removeClass('modal-open-custom'); // Remove the class from body
            }
        }
    }

    // ... (end of your existing main.js code) ...
});

// This ensures the script runs only after the entire page (DOM) is loaded.
$(document).ready(function() {

    // Get the modal element by its ID
    var modal = $("#qrCodeModal");

    // Get the "Donate Now" button by its ID
    var btn = $("#donateBtn");

    // Get the close button (the 'x') by its class
    var span = $(".close-button");

    // --- Event Listeners ---

    // When the user clicks the "Donate Now" button, open the modal
    btn.on("click", function(event) {
        event.preventDefault(); // This stops the page from jumping to the top of the screen
        modal.css("display", "flex"); // Change display to 'flex' to make the modal visible and centered
    });

    // When the user clicks on the close button (x), close the modal
    span.on("click", function() {
        modal.css("display", "none"); // Hide the modal
    });

    // When the user clicks anywhere outside of the modal content, close it
    $(window).on("click", function(event) {
        // Check if the click occurred directly on the modal background itself, not on its content
        if ($(event.target).is(modal)) {
            modal.css("display", "none"); // Hide the modal
        }
    });

    // Optional: Allow closing with the Escape key
    $(document).on('keydown', function(event) {
        if (event.key === "Escape" || event.keyCode === 27) { // Check for Escape key press
            if (modal.css("display") === "flex") { // Only close if modal is currently open
                modal.css("display", "none");
            }
        }
    });

}); // End of $(document).ready(function()

})(jQuery);

