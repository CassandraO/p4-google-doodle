




//Animate vcdDoodle
var $vcdDoodle = $('#vcdDoodle');

// DOM Element, Duration, CSS Properties
TweenMax.to($vcdDoodle, 2, {
    opacity: 100,
    
	y: 200
});

//Animate thumbtack
var $thumbtack = $('#thumbtack');

// DOM Element, Duration, CSS Properties
TweenMax.from($thumbtack, 3, {
    opacity: 0,
	delay: 1,
	ease: Linear.easeIn,
    y: 300,
	x: 445
	
});