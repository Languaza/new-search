$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    });
});
(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};
/*
	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// $('body').toggleClass('fh5co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});	

	}

	

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			}
	    }
		});
	};
*/
	// Animations

	var contentWayPoint = function() {
		//var i = 0;
		$('.animate-box').waypoint( function( direction ) {// the variable animate-box is the variable called by the html to trigger the animation

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {//checks whether it is scrolling down an this element does not has another animation
				
				//i++;

				$(this.element).addClass('item-animate'); //create a variable to the element called item-animate
				setTimeout(function(){ //sets a timeout for the hited class

					$('body .animate-box.item-animate').each(function(k){ //animate each part inside this class ( each class is K)
						var el = $(this);
						setTimeout( function () { //set a timeout for each k inside the class
							el.addClass('bounceIn animated');//animate
							el.removeClass('item-animate');//lose the item
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );//offset will specify how far to apply the animation before the scrooler hits the class
	};
	

	var scheduleTab = function() {
		$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());//set height according the div schedule container to show the content

		$(window).resize(function(){
			$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());//bootstrap related to be responsive on all devices.
		});

		$('.schedule a').on('click', function(event) { // take the mouse click event on the specific a tag
			
			event.preventDefault();

			var $this = $(this),
				sched = $this.data('sched');//take the data inside data-sched

			$('.schedule a').removeClass('active');//remove active from schedule day set
			$this.addClass('active');//set active the event clicked ( the new clicked day)
			$('.schedule-content').removeClass('active');//remove active from the old content

			$('.schedule-content[data-day="'+sched+'"]').addClass('active'); //set active to the new content

		});
	};

	// Document on load.
	$(function(){
		//mainMenu();
		//parallax();
		//offcanvas();
		//mobileMenuOutsideClick();
		contentWayPoint();
		scheduleTab();
	});


}());