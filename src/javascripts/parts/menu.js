var menu_links = $('.menu-links'),
	burger = $('.menu-sign'),
	word = $('.menu-letters')
	li =$('.limenu'),
	tl = new TimelineLite();

$('.link_burger').on('click', function(e){
	if(burger.text() == 'X'){
		burger.html('&#9776');
		burger.css("color","#fff");
		word.css("color","#fff");
		tl
			//.staggerTo(li, 0.3, {x: -50, autoAlpha: 0, ease:Power1.easwOut}, 0.1)
			.staggerFromTo(li, 0.5, {cycle:{
				x: [0, 0],
				scale: [1, 1]}, autoAlpha: 1},
				{cycle:{
				x: [-20, 20],
				scale: [2, 0.5]}, autoAlpha: 0, ease:Power1.easeOut}, 0.1)
			.to(menu_links, 0.1, {x: 0, autoAlpha: 0, ease:Power1.easeOut});
		//menu_links.removeClass('active');	

	}
	else{
		burger.css("color","#6d9966");
		word.css("color","#6d9966");
		burger.text('X');
		menu_links.css('display', 'block')
		tl
			.to(menu_links, 0.2, {x: 20, autoAlpha: 1, ease:Power1.easeOut})
			.staggerFromTo(li, 0.5, {cycle:{
				x: [-20, 20],
				scale: [2, 0.5]}, autoAlpha: 0},
				{cycle:{
				x: [0, 0],
				scale: [1, 1]}, autoAlpha: 1, ease:Power1.easeOut}, 0.1);

	}
	
});

var drop = $('.eng-drop'),
	list = $('.eng-sidenav__but');
drop.hide();
list.on('click', function(){
	$(this).next().slideToggle();
	return false;	
})

