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


	// --- KEEP YOUR EXISTING MAGNIFIC POPUP, DATEPICKER, AND TIMEPICKER CODE HERE ---
// (These are generally fine as they are, outside or at the very top of your document.ready)
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
// --- END OF EXISTING CODE ---


// --- START OF THE MAIN CONSOLIDATED DOCUMENT READY FUNCTION ---
$(document).ready(function() {

    // --- Custom QR Code Modal Logic ---
    // Get references to elements once for efficiency
    var qrCodeModal = document.getElementById("qrCodeModal");
    var closeButton = document.getElementsByClassName("close-button")[0];
    var popupDonateButtonContainer = document.getElementById("popupDonateButtonContainer"); // The container for the floating button

    // Function to open the modal
    function openQrCodeModal() {
        if (qrCodeModal) {
            qrCodeModal.style.display = "block"; // Make sure your modal CSS uses display: block for showing
            $('body').addClass('modal-open-custom'); // Add class to body to prevent scroll

            // ACTION: Hide the floating donate button container when modal opens
            if (popupDonateButtonContainer) {
                popupDonateButtonContainer.style.display = "none";
            }
        }
    }

    // Function to close the modal
    function closeQrCodeModal() {
        if (qrCodeModal) {
            qrCodeModal.style.display = "none";
            $('body').removeClass('modal-open-custom'); // Remove class from body

            // ACTION: Show the floating donate button container when modal closes
            // Only show if it's supposed to be visible on the current screen size (i.e., not hidden by Bootstrap's d-lg-none)
            if (popupDonateButtonContainer && window.innerWidth < 992) { // The <992px breakpoint aligns with Bootstrap's d-lg-none
                popupDonateButtonContainer.style.display = "block";
            }
        }
    }

    // --- Attach Click Listeners to ALL Donate Buttons ---
    // Using addEventListener for better practice and consistency

    // Navbar Donate Button (on all pages)
    var navbarDonateBtn = document.getElementById("navbarDonateBtn");
    if (navbarDonateBtn) {
        navbarDonateBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (like jumping to top)
            openQrCodeModal(); // Call our common open function
        });
    }

    // Floating Pop-up Donate Button (on all pages)
    var floatingDonateBtn = document.getElementById("floatingDonateBtn");
    if (floatingDonateBtn) {
        floatingDonateBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openQrCodeModal(); // Call our common open function
        });
    }

    // Hero Section Donate Button (if you have one, e.g., on index.html)
    var heroDonateButton = document.getElementById("heroDonateButton");
    if (heroDonateButton) {
        heroDonateButton.addEventListener('click', function(event) {
            event.preventDefault();
            openQrCodeModal();
        });
    }

    // Generic Donate Button (if you have any other with ID "donateBtn")
    var genericDonateBtn = document.getElementById("donateBtn"); // From your old script, if this button exists
    if (genericDonateBtn) {
        genericDonateBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openQrCodeModal();
        });
    }


    // --- Modal Close Listeners ---

    // When the user clicks on the <span> (x) close button inside the modal
    if (closeButton) {
        closeButton.addEventListener('click', closeQrCodeModal); // Call our common close function
    }

    // When the user clicks anywhere outside of the modal content (on the overlay)
    window.addEventListener('click', function(event) {
        if (event.target == qrCodeModal) { // Check if the click was directly on the modal background
            closeQrCodeModal(); // Call our common close function
        }
    });

    // Optional: Allow closing with the Escape key
    $(document).on('keydown', function(event) {
        if (event.key === "Escape" || event.keyCode === 27) { // Check for Escape key press (key for modern, keyCode for older)
            if (qrCodeModal && qrCodeModal.style.display === "block") { // Only close if modal is currently open
                closeQrCodeModal(); // Call our consistent close function
            }
        }
    });


    // --- Pop-up Donate Button Initial Display Logic ---

    // Ensure the floating button is hidden by default when script loads, if not already by CSS.
    // Ideally, #popupDonateButtonContainer should have `display: none;` in your CSS for initial state.
    if (popupDonateButtonContainer) {
         popupDonateButtonContainer.style.display = "none";
    }

    // Show the floating button after a delay (e.g., 3 seconds)
    // Only if the screen size is small (less than 992px) AND the modal is NOT already open
    setTimeout(function() {
        if (popupDonateButtonContainer && window.innerWidth < 992) {
            // Check if the modal is currently NOT open before showing the floating button
            if (qrCodeModal && qrCodeModal.style.display !== "block") {
                popupDonateButtonContainer.style.display = "block";
                // Optional: You can add jQuery's fadeIn effect here for a smoother appearance:
                // $(popupDonateButtonContainer).fadeIn(500);
            }
        }
    }, 3000); // 3000 milliseconds = 3 seconds delay

}); // --- END OF THE MAIN CONSOLIDATED DOCUMENT READY FUNCTION ---

})(jQuery);

