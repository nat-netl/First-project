$(document).ready(function(){
	$('.exemples-cotainer__elements').slick({
		arrows:true,
		slidesToShow:3,
		adaptiveHeight:true,
		slidesToScroll:1,
		speed:1000,
		autoplay:true,
		autoplaySpeed:5000,
		draggable:false,
		responsive:[
			{
				breakpoint: 1250,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow:2,
					slidesToScroll:2,
				}
			},
			{
				breakpoint: 817,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow:1,
				}
			}
		]
	});

	$('.header-contact_button, .profession-information__button, .skills-cost, .exemples-container__button, .call-contacts__button, .header-call').click(function(e){
        e.preventDefault();
        $('.shadow').fadeIn(297,function(){
            $('.popup-container') 
            .css('display', 'block',)
			.animate({opacity: 1}, 198)	
            $('html, body').css('overflow' , 'hidden');
          });

          $('.shadow, .popup-container').bind('mousewheel DOMMouseScroll', function(e) {
            var scrollTo = null;
            if (e.type == 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            } else if (e.type == 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            if (scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
			}
		});
		
    })

    $('.close, .shadow').click(function(){
        $('.popup-container').animate({opacity: 0}, 198, function(){
            $(this).css('display', 'none');
			$('.shadow').fadeOut(297);
            $('html, body').css('overflow-y' , 'auto');
        })
    })
    
    var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1500);
            return false;
        });

	$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});
    
    $('form').each(function () {
        $(this).validate({
            errorPlacement(error, element) {
                return true;
            },
            focusInvalid: false,
            rules: {
                Телефон: {
                    required: true,
                },
                Имя: {
                    required: true,
                }
            },
            submitHandler(form) {
                let th = $(form);

            $.ajax({
                type: 'POST',
                url: '/process.php',
                data: th.serialize(),
                
            })
            .done(function() {
            setTimeout(function(){
                $('.shadow').fadeIn(297,function(){
                    $('.overlay') 
                    .css('display', 'block',)
                    .animate({opacity: 1}, 198)	
                    $('html, body').css('overflow' , 'hidden');
                  });
        
                $('.shadow, .overlay').bind('mousewheel DOMMouseScroll', function(e) {
                    var scrollTo = null;
                    if (e.type == 'mousewheel') {
                        scrollTo = (e.originalEvent.wheelDelta * -1);
                    } else if (e.type == 'DOMMouseScroll') {
                        scrollTo = 40 * e.originalEvent.detail;
                    }
                    if (scrollTo) {
                        e.preventDefault();
                        $(this).scrollTop(scrollTo + $(this).scrollTop());
                    }
                }); 

                $('.overlay-popup__button, .shadow').click(function(){
                    $('.overlay').animate({opacity: 0}, 198, function(){
                        $(this).css('display', 'none');
                        $('.shadow').fadeOut(297);
                        $('html, body').css('overflow-y' , 'auto');
                    })
                })

                setTimeout(function() { 
                    jQuery(".overlay, .shadow").hide();  
                    $(this).css('display', 'none');
                        $('html, body').css('overflow-y' , 'auto');
                    }, 3000);3
            }, 300) 

                setTimeout(function(){
                    $('.popup-container').animate({opacity: 0}, 198, function(){                                    
                        $(this).css('display', 'none');
                        $('form').trigger('reset');                   
                    })
                }, 300)                
                
                
            });           
            return false;
        }
    });
    });

    $(function(e){
    $('.adaptetion-menu').on('click', function(){
        $('.main-nav').slideToggle(500, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });

    $('.main-nav__link').on('click', function(){
        $('.main-nav').slideToggle(500, function(){
            $('.main-nav').hide();
            
        });
    });
});
});


















