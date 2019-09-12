;(function () {
	
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


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	

	var scheduleTab = function() {
		$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());

		$(window).resize(function(){
			$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
		});

		$('.schedule a').on('click', function(event) {
			
			event.preventDefault();

			var $this = $(this),
				sched = $this.data('sched');

			$('.schedule a').removeClass('active');
			$this.addClass('active');
			$('.schedule-content').removeClass('active');

			$('.schedule-content[data-day="'+sched+'"]').addClass('active');

		});
	};

	// Document on load.
	$(function(){
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		scheduleTab();
	});


	$('.program').each(function(){
		$(this).on('click', function(){
			$('.program').each(function(){
				$(this).css('border', '');
			})
			$(this).css('border', '3px solid rgb(50,205,50)')
		})
	})

let level;
let program;
let preference;
let diet;
	$('#levelsConfirm').on('click', function(){
		if($('#levels input[name="levels"]').length <= 0){
			$('#levels #firstData').each(function(){
				if($(this).css('border') == '3px solid rgb(50, 205, 50)'){
					level = this.dataset.level;
					return;
				}
			})
			if(!level) return;

			const inputLevel = $('<input>').attr('type', 'hidden').attr('name', 'levels').val(level);
			$('#levels').append(inputLevel);
			$('#guides').animate({opacity: 0}, 1500);
	const animation1 = $('#levels #first').each(function(){
				$(this).animate({
					opacity : 0,
					left: '+=500px'
				}, 1500, function(){
						$(this).css('display', 'none')
					})
			});
			$.when(animation1).done(function(){
				$('#guides').animate({opacity: 1}, 1500).html('Please choose what is your objectives');;
				$('#levels #second').each(function(){
					$(this).show();
					$(this).animate({
						opacity: 1,
						left: '0px',
					}, 1500)
				})
			})
		}
		if($('#levels input[name="levels"]').length >= 1 && $('#levels input[name="program"]').length <= 0){
				$('#levels #secondData').each(function(){
					if($(this).css('border') == '3px solid rgb(50, 205, 50)'){
						program = this.dataset.program;
						return;
					}
				})
				if(!program) return;
				const inputProgram = $('<input>').attr('type', 'hidden').attr('name', 'program').val(program);
				$('#levels').append(inputProgram);
				$('#guides').animate({opacity: 0}, 1500);
const animation2 = $('#levels #second').each(function(){
					$(this).animate({
						opacity: 0,
						left: '+=500px'
					}, 1500, function(){
						$(this).css('display', 'none')
					})
				})
				$.when(animation2).done(function(){
					$('#guides').animate({opacity: 1}, 1500).html('Please type of workout you enjoy the most !');
					$('#levels #third').each(function(){
						$(this).show();
						$(this).animate({
							opacity: 1,
							left: '0px',
						}, 1500)
					})
				})
		}
		if($('#levels input[name="program"]').length >= 1 && $('#levels input[name="preference"]').length <= 0){
			$('#levels #thirdData').each(function(){
				if($(this).css('border') == '3px solid rgb(50, 205, 50)'){
					preference = this.dataset.preference;
					return;
				}
			})
			if(!preference) return;
			const inputPreference = $('<input>').attr('type', 'hidden').attr('name', 'preference').val(preference);
			$('#levels').append(inputPreference);
			$('#guides').animate({opacity: 0}, 1500)
const animation3 = $('#levels #third').each(function(){
				$(this).animate({
					opacity: 0,
					left: '+=500px',
				}, 1500, function(){
					$(this).css('display', 'none');
				})
			})
			$.when(animation3).done(function(){
				$('#guides').animate({opacity: 1}).html('Pick a diet type');
				$('#levels #four').each(function(){
					$(this).show();
					$(this).animate({
						opacity: 1,
						left: '0px',
					}, 1500)
				})
			})
		}

		if($('#levels input[name="preference"]').length >= 1 && $('#levels input[name="diet"]').length <= 0){
			$('#levels #fourData').each(function(){
				if($(this).css('border') == '3px solid rgb(50, 205, 50)'){
					diet = this.dataset.diet;
					return;
				}
			})
			if(!diet) return;
			const inputDiet = $('<input>').attr('type', 'hidden').attr('name', 'diet').val(diet);
			$('#levels').append(inputDiet);
			$('#levels').submit()
		}
	})

	$('#getWorkout').on('click', function(){
		const animation = $('#workoutContainer #theWorkout').hide(1500);
		$('#getWorkoutDays').show(300);
		$.when(animation).done(function(){
			$('#workoutContainer .schedule-content ').show(200).fadeTo(200, 1);
		})
	})
}());