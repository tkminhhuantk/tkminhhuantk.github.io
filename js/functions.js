(function ($) {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
	

	
	// portfolio
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }

        });

        $('#filter a').click(function(){

            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
        
}  

	// fancybox
	jQuery(".fancybox").fancybox();
		
    $('.bxslider').bxSlider({
        auto: true,
		mode: 'horizontal',
		useCSS: false,
		hideControlOnEnd: true,
		easing: 'easeOutBack',
        stopAutoOnClick: false,
        tickerHover: true,
	});

    // Dịch vụ  
    wow = new WOW(
        {
                
        }   ) 
    .init();

    // Menu Affix Top 0
    window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("menunav");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("affix")
            } else {
                navbar.classList.remove("affix");
            }
        }

    //Click menu
    $(function() {
        $(".menu ul li:nth-child(1) a").click(function() {
            location.reload();
        });
        $(".menu ul li:nth-child(2) a").click(function() {
            event.preventDefault();
            $('html').animate({
                scrollTop: $("#gioithieu").offset().top -55 }, 400);
        });
        $(".menu ul li:nth-child(3) a").click(function() {
            event.preventDefault();
            $('html').animate({
                scrollTop: $("#dichvu").offset().top -35 }, 400);
        });
        $(".menu ul li:nth-child(4) a").click(function() {
            event.preventDefault();
            $('html').animate({
                scrollTop: $("#lienhe").offset().top -80 }, 400);
        });
    });
})(jQuery);



