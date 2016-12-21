// var tl1 = new TimelineLite();
// var	eng_front = $('.eng-front');

// $('.eng-front').on('mouseenter', function(e){
// 	var tl = new TimelineLite();
// 	var	eng_front = $('.eng-front');

// 	tl.to(eng_front, 0.5, {y:50, autoAlpha:1, ease:Power1.easeOut});
// });

// $('.eng-back').on('mouseenter', function(){	
// 	$('.eng-front').slideToggle();
// });
// $('.eng-front').on('mouseleave', function(){
	
// 	$('.eng-front').slideToggle();
// })
$( '.eng-idioms').on('mouseenter', function(){
	var $this = $(this);
	var ch = $this.children('div:last');
	console.log(ch);
	ch.slideToggle();
});
$('.eng-idioms').on('mouseleave', function(){
	var $this = $(this);
	var ch = $this.children('div:last');
	ch.slideToggle();
})