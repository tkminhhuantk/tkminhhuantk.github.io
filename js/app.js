$(document).ready(function() {
	jQuery(function($) {
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    autoplay: true,
		    margin:0,
		    animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
		    nav:true,
		    autoplayHoverPause: true,
		    items: 1,
		    responsive:{
		      0:{
		        items:1,
		        nav:false
		      },
		      600:{
		        items:1,
		        nav:false
		      },
		      1000:{
		        items:1,
		        nav:true
		      }
		    }
		});
	}),
	jQuery(function($) {
		$('.main--review').owlCarousel({
			loop:true,
			autoplay: true,
			margin:0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav:true,
			autoplayHoverPause: true,
			items: 1,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:true
				}
			}
		});
	}),
	jQuery(function($){
		$('.post-related').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});
	});
})

$(document).ready(function () {
	jQuery("#nav__toggle").on("click", function (e) {
		jQuery("#logo").addClass("hidelogo");
		var t = jQuery(".nav-bottom").find("ul");
		jQuery(".js_overlay").addClass("active"),
			jQuery(".js_nav").addClass("active"),
			jQuery(".js__mobile li.menu-item-has-children>a").on("click", function () {
				jQuery(this).removeAttr("href");
				var e = jQuery(this).parent("li");
				e.hasClass("open") ? (e.removeClass("open"), e.find("li").removeClass("open"), e.find("ul").slideUp()) : (e.addClass("open"), e.children("ul").slideDown(), e.siblings("li").children("ul").slideUp(), e.siblings("li").removeClass("open"), e.siblings("li").find("li").removeClass("open"), e.siblings("li").find("ul").slideUp())
			}),
			jQuery(".js__mobile li.menu-item-has-children.open> ul > li.menu-item-has-children > a").on("click", function () {
				jQuery(this).removeAttr("href");
				var e = jQuery(this).parent("li");
				e.hasClass("open") ? (e.removeClass("open"), e.find("li").removeClass("open"), e.find("ul").slideUp()) : (e.addClass("open"), e.children("ul").slideDown(), e.siblings("li").children("ul").slideUp(), e.siblings("li").removeClass("open"), e.siblings("li").find("li").removeClass("open"), e.siblings("li").find("ul").slideUp())
			})
	}),
		jQuery(".js_overlay").on("click", function () {
			jQuery("#logo").removeClass("hidelogo"),
				jQuery(".js_overlay").removeClass("active"),
				jQuery(".js_nav").removeClass("active")
		}),
		jQuery('.js_search_mobile').popover({
			container: "body",
			html: !0,
			placement: "bottom",
			template: '<div class="popover search__mobile" role="tooltip"><div class="arrow__search"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			content: function () {
				return jQuery("#search__form").html()
			}
		}),
		jQuery('.js_search_mobile').click(function (e) {
			e.stopPropagation()
		}),
		jQuery(document).click(function (e) {
			(0 == jQuery(".popover").has(e.target).length || jQuery(e.target).is(".close")) && jQuery('.js_search_mobile').popover("hide")
		})
});
