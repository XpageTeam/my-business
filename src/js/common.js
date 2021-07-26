import $ from "jquery";
import  is from "is_js"
import Swiper from "swiper/dist/js/swiper.js";
import "./stock-sliders.js";
import "selectize/dist/js/selectize.min.js";

import "./calculator/calc.js";

import "./tabs.js";
import "./accordion.js";
import "./mobile-menu.js";
import "./standart-page.js"
import Sticky from "./x-widgets.js";


window.$ = $;
window.jQuery = $;
window.is = is;

require("./countTo.js");
require("../css/jquery.fancybox.css");

;(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {
	

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

document.addEventListener("DOMContentLoaded", e => {

	$('.search-btn, .search-btn--close').click(function(){
		var $this = $(this);
		$('body').toggleClass('js__search-open');
	})

	// if($(window).width() < 1200){
	// 	var searchBtn = $('.search-btn').clone();
	// }

	if (is.ie())
		$('body').addClass('ie-fix');
	
		$("picture").each(function(){
			$(this).find("img").attr("src", $(this).find("source").attr("srcset"))
		})

	$(".head-contacts__item.ico-special, .header-special__link").click(function(){
		Cookies.set("special", 1);
		location.reload();
	});

	require("./jquery.fancybox.js");
	let swiperMainbanner = new Swiper(".main-slider .swiper-container", {

		effect: "fade",
		a11y:{
			enabled: document.body.classList.contains("special__body")
		},
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		autoplay: true,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			clickable: true
		},
		navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	});

	let swiperPartners = new Swiper(".partners .swiper-container", {
		slidesPerView: 3,
		a11y:{
			enabled: document.body.classList.contains("special__body")
		},
		loop: true,
		roundLengths: true,
		autoplay: true,
		spaceBetween: 40,
		fadeEffect: {
		    crossFade: true
		  },
		navigation: {
	        nextEl: '.partners .swiper-button-next',
	        prevEl: '.partners .swiper-button-prev',
	    },
	    breakpoints: {
			1000: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			660: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			
		}
	});

	let swiperStorySuccess = new Swiper(".story-success .swiper-container", {
		slidesPerView: 1,
		a11y:{
			enabled: document.body.classList.contains("special__body")
		},
		loop: true,
		roundLengths: true,
		// autoplay: true,
		autoHeight: true,
		navigation: {
	        nextEl: '.story-success .swiper-button-next',
	        prevEl: '.story-success .swiper-button-prev',
	      },
	});

	let swiperNewsBanner = new Swiper(".news-slider .swiper-container", {

		effect: "fade",
		a11y:{
			enabled: document.body.classList.contains("special__body")
		},
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		autoplay: true,
		fadeEffect: {
		    crossFade: true
		  },
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			clickable: true
		},
		navigation: {
	        nextEl: '.news-slider .swiper-button-next',
	        prevEl: '.news-slider .swiper-button-prev',
	      },
	});

	let swiperStandartBanner = new Swiper(".standart-slider .swiper-container", {

		effect: "fade",
		a11y:{
			enabled: document.body.classList.contains("special__body")
		},
		slidesPerView: 1,
		loop: true,
		roundLengths: true,
		autoplay: true,
		fadeEffect: {
		    crossFade: true
		  },
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			clickable: true
		},
		navigation: {
	        nextEl: '.standart-slider .swiper-button-next',
	        prevEl: '.standart-slider .swiper-button-prev',
	      },
	});

	let swiperStandartTextSlider = new Swiper(".standart__text-slider  .swiper-container", {

		slidesPerView: 4,
		loop: true,
		roundLengths: true,
		// autoplay: true,
		spaceBetween: 40,
		fadeEffect: {
		    crossFade: true
		  },
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			clickable: true
		},
		navigation: {
	        nextEl: '.standart__text-slider .swiper-button-next',
	        prevEl: '.standart__text-slider .swiper-button-prev',
	      },
	});

	$('.lk-events__item-btn').click(function(){
		var $this = $(this);

		$this.closest('.lk-events__item').toggleClass('js__open');
		$this.closest('.lk-events__item-info').find('.lk-events__item-next').slideToggle();

	})

	

	$('.story-success__btn').click(function(){
		let $this = $(this);

		$this.closest('.story-success__slide').find('.text-page > span:not(:first-child)').slideToggle();

		const parentSlider = $this.closest(".swiper-container")[0].swiper;

		let interval = setInterval(function(){
			parentSlider.updateAutoHeight();
		}, 10)

		setTimeout(function(){
			clearInterval(interval)
		}, 300)

	})

	if($(window).width() < 1000){

		$('.lk-aside__link').click(function(e){
			var $this = $(this);

			if($this.hasClass('active')){
				e.preventDefault();
			}

			$this.closest('.lk-aside__links').toggleClass('js__opened')
			

		})
	}

	$('.contacts-filials__one-title').click(function(){

		var $this = $(this);

		$this.siblings('.contacts-filials__one-info').slideToggle();
	})





	// if ($(".support-stat__item-num").length){
	// 	$(".support-stat__item-num").width($(".support-stat__item-num").width())
	// 	$(".support-stat__item-num").countTo({
	// 		onComplete(){
	// 			$(".support-stat__item-num").width("auto")
	// 		}
	// 	})
	// }

	$(window).on('scroll load', function(){
		if ($(".support-stat__item-num").length)
			if ($(".support-stat__item-num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".support-stat__item-num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.width($this.width())

						$this.countTo({
							speed: speed,
							onComplete(){
								$this.width("auto")
							}
						});

						$this.addClass("countered");
					});
			}

	})


	$('.task__item-top').click(function(){

		var $this = $(this);

		$('.task__item-top').removeClass('js__animate');

		if ($this.next('.task__item-bot').hasClass("js__open")){
			$('.task__item-bot').slideUp(300).removeClass('js__open');
		}else{
			$('.task__item-bot').slideUp(300).removeClass('js__open');
			$this.next('.task__item-bot').slideDown(300).addClass('js__open');
			$this.addClass('js__animate');
		}

		setTimeout(function(){
			$('html,body').animate({
				scrollTop: $('.task__item-top.js__animate').offset().top}, 1000);
		}, 300)


	})

	
	$('.history-item__btn').click(function(){
		let $this = $(this);

		$this.closest('.history-item').toggleClass('js__open');
		$this.closest('.history-item').find('.history-item__text-continuation').slideToggle();

	})

	



	if($('body').hasClass('page-personal')){



		var list = document.querySelector('#filial__list');

		if(list){
			window.observer = new MutationObserver(function(mutations) {
			    mutations.forEach(function(mutation) {
			     let input = mutation.addedNodes[0].querySelector(".forms-input-cont--file:first-child:nth-last-child(2) .forms__input--file");

			     // console.log(mutation, input)

			     if (input)
			     	input.addEventListener("change", InputFileChange);
			    });
			});
			  
			observer.observe(list, {
			  	attributes: false, 
			  	childList: true, 
			  	characterData: false
			})
		  	
		}

		$("body").on("change", ".forms__input--file", function(e){

			var value = $(this)[0].files[0].name;
			// console.log(value);
			var inputHasFile = $(this).next('input[type="text"]').val(value);

			if(inputHasFile.length){
				$(this).nextAll('label').remove();
				// $(this).nextAll(".js__input-del").addClass('close-input');
			}

		});


		$("body").on("click", ".filial__item-el .add-input", function(){

			var time = +new Date(),
				$this = $(this),
				getName = $(this).closest('.forms__input-cont--multiple').find('.forms__input-cont:first-child input').attr("name");


			var inputBlock = $this.closest(".forms__input-cont--multiple").append('<div class="forms__input-cont">\
					<input type="text" id="'+time+'" name="'+getName+'"  class="forms__input">\
					<span class="js__input-del" title="Удалить"></span>\
				</div>');

		});



		$("body").on("click", ".filial__item-el--photo .add-input", function(){

			var time = +new Date();
			var $this = $(this);
			var getName = $(this).closest('.forms__input-cont--multiple').find('.forms__input-cont:first-child input').attr("name");


			var inputBlock = $this.closest(".forms__input-cont--multiple").append('<div class="forms__input-cont forms-input-cont--file">\
					<input class="forms__input forms__input--file" name="'+getName+'" type="file" id="'+time+'" accept="image">\
					<input class="forms__input forms__input--file-support" readonly="" type="text">\
					<label class="forms__label--file" for="'+time+'"></label>\
					<span class="js__input-del" title="Удалить"></span>\
				</div>');

			let newInput = inputBlock.find(".forms-input-cont--file:last-child input[type='file']")[0]

			newInput.addEventListener("change", InputFileChange);

		});



		window.InputFileChange = function () {
		  if (this.files[0]) {

		    var fr = new FileReader(),
		    	$shopBlock = $(this).closest("div[data-id]");

		    // console.log($shopBlock)

		    fr.addEventListener("load", e => {
				let $photos = $shopBlock.find('.filial-load-photo');

	    		$photos.append("<img src='"+fr.result+"' />")
		    }, false);

		    fr.readAsDataURL(this.files[0]);
		  }
		};


		if($(".filial__item-el--photo input[type='file']").length)
			document.querySelector(".filial__item-el--photo input[type='file']").addEventListener("change", InputFileChange);



			$("body").on("click", ".filial__item-el--photo .input-del", function(){
				let $this = $(this).closest(".forms-input-cont--file"),
					$cont = $(this).closest(".filial__item-el--photo"),
					index = $this.index();

				// console.log(index, $this)
				// console.log($cont)

				$cont.nextAll(".filial-load-photo").find("img:eq("+index+")").remove()
			})



		$("body").on("click", ".js__input-del, .input-del", function(){
			var $this = $(this);
			$this.closest('.forms__input-cont').remove();
			
		})



	};


	$('.submenu').each((i,el) => {
		let $this = $(el);

		$this.closest('.head__menu-item').addClass('js__has-submenu');
	})


	$("body").on("click change", ".btn-clear", function(){
		$(this).prevAll('input[type="text"]').val("");
		
	});


	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});


	if($(window).width() <= 667){

    	$('.vino-mobile .item').each(function(i,el){
    		let $this = $(el);

    		$this.find('.text-page p').closest('.item').addClass('js__has-content')
    	})

    	
    	$('.vino-title').click(function(){
    		let $this = $(this);

    		$this.toggleClass('js__open');
    		$this.next('.vino-content').slideToggle();
    	})
	}

	$("body").on("click", ".scroll-top", function(){
        var scrollTop = $(window).scrollTop();
        $("html, body").animate({"scrollTop": 0}, "slow")
    });

	if (!is.touchDevice())
		$('select:not(.no-selectize)').each(function(i,el){
			let $this = $(el);

			$this.selectize({
				create: true,
				// sortField: 'text'
			});

		})

	// selectizeInit();


	// if($(window).width() < 1000) {

	//     $('.head-menu__item.js__has-submenu').each(function(i,el){
	//         var $this = $(el),
	//         	setCloneLink = $this.find('ul').prev('a').clone();

	//         console.log(setCloneLink)

	//         $this.find('ul').prepend('<li class="head-menu__item js__link-parent"></li>');
	//         $this.find('.js__link-parent').prepend(setCloneLink);
	//         $this.find('ul').prepend('<div class="head-menu__item js__back">Назад</div>');

	//     })

	//     $('.head-menu__item.js__has-submenu > a').removeAttr('href');
	//     $('.head-menu__item.js__has-submenu > a').click(function(){
	//         var $this = $(this);
	//         console.log(1);
	//         $this.closest('.js__has-submenu').addClass('js__submenu--open');
	//     })

	//     $('.js__back').click(function(){
	//         var $this = $(this);
	//         $this.closest('.js__has-submenu').removeClass('js__submenu--open');
	//     })

	// }

});

// window.selectizeInit = function() {
// 	// if (is.touchDevice()){
// 		if($(window).width() > 1000){
// 		    $('select').each(function(i,el){
// 		        let $this = $(el);

// 		        $this.selectize({
// 		            create: true,
// 		            // sortField: 'text'
// 		        });

// 		    })
			
// 		}

		
// 	// }
    
// }


$(window).on("load scroll resize touchmove", e => {
	// if ($(window).scrollTop() > 800){
	// 	$(".scroll-top").fadeIn(300);
	// }else{
	// 	$(".scroll-top").fadeOut(300);
	// };



	if($(window).scrollTop() > 100){

		setTimeout(e => {
			$('.history__intro').remove();
			$('body').addClass('js__history-animate');
		}, 200);


	}

	if ($(window).scrollTop() > 800){
		$(".scroll-top").fadeIn(300);
		$(".scroll-top").css({
			'display': 'flex',
		})

	}else{
		$(".scroll-top").fadeOut(300);
		$(".scroll-top").removeClass('js__scrolled');
	};

	
});

$(window).on("load", e => {
	var $video = $('video');

	if(!$video.length){
		return
	}

	var dataSrc = $video.attr('data-src');
	$video.attr('src', dataSrc);
	
	$video[0].play();
		

});