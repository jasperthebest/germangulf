	/* Build-in */

	/* Ready function */
	$(function() {

		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);
		
		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')'});
		});
		/* Scroll Animation */ 
		$('*[data-animated]').addClass('animated');
			function animated_contents() {
			$(".animated:appeared").each(function (i) {
				var $this    = $(this),
					animated = $(this).data('animated');
				setTimeout(function () {
					$this.addClass(animated);
				}, 70 * i);
			});
		}

		$('#nav-icon').click(function(){
			$('nav, #nav-icon').toggleClass('active');
		});

		$('.envpolicyslider').slick({
		  autoplay: false,
		  dots: false,
		  infinite: true,
		  fade: false,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  adaptiveHeight: true
		});
		$('.policyicon div').click(function(){
			$('.policyicon div').removeClass('active');
			$(this).addClass('active');
			$('.envpolicyslider').slick('slickGoTo', $(this).index());
		});
		
		$('body').click(function(){
			$('.lightpopup').removeClass('active');
		});
		$('.planttop > div').click(function(e){
			e.stopImmediatePropagation();
		});
		$('.socialbtn').click(function(){
			$('.lightpopup').addClass('active');
			return false;
		});
		$('.descpopshow').click(function(){
			$('.lightpopup').addClass('active');
			return false;
		});

		/* Init Function */
		animated_contents();
		$(window).scroll(function() {
			animated_contents();
		});
	});

	/* Scroll */
	$(window).scroll(function() {
		
	});
	
	/* Resize */
	$(window).resize(function(){

		/* Init Function */
	});

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */
	});
