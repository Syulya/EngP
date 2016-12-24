
$(window).scroll(function (){
        $('.eng-main__title').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass('animated bounce');
            }
            else if(imagePos > topOfWindow+405){
            	 console.log('else');
            	 $(this).removeClass('animated bounce');
            }
        });
    });﻿
$('.eng-item').on('mouseenter', function(){
    $(this).addClass('animated bounce');
});
$('.eng-item').on('mouseleave',function(){
	$(this).removeClass('animated bounce');
});
$('.movprep').on('mouseenter', function(){    
    $(this).addClass('animated tada');
});
$('.movprep').on('mouseleave',function(){
	$(this).removeClass('animated tada');
});
