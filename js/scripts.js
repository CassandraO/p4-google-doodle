




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
TweenMax.to($thumbtack, 1, {
    opacity: 100,
	delay: 1,
	ease: Linear.easeIn,
    y: -100,
	x: -239
	
});

var $grade = $('#grade');


TweenMax.to($grade, 2.5, {
    opacity: 100,
	delay: 1,
	ease: Linear.easeIn,
    y: -188,
	x: -145
	
});
