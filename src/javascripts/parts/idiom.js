
$( '.eng-idioms').on('mouseenter', function(){
	var $this = $(this);
	var ch = $this.children('div:last');
	ch.slideToggle();
});
$('.eng-idioms').on('mouseleave', function(){
	var $this = $(this);
	var ch = $this.children('div:last');
	ch.slideToggle();
})