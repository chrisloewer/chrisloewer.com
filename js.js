var mainDiv = document.getElementById('main');

window.location.hash = 'main-tag';

var fillOne, fillTwo;
var borderOne, borderTwo;
var angle;
var pi;
var t;
var leftContent;
var rect;
var body;


function initializeSpinners(){
	fillOne = document.getElementById('fill-1');
	borderOne = document.getElementById('border-1');
	fillTwo = document.getElementById('fill-2');
	borderTwo = document.getElementById('border-2');
	angle = 0;
	pi = Math.PI;
	t = 8;
}

function draw() {
  angle++;

  if(angle > 300) {
  	return 0;
  }

  angle %= 360;
  var r = ( angle * pi / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( angle > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
 
  fillOne.setAttribute( 'd', anim );
  borderOne.setAttribute( 'd', anim );
  fillTwo.setAttribute( 'd', anim );
  borderTwo.setAttribute( 'd', anim );

  // console.log(angle);
  

  setTimeout(draw, t); // Redraw
}

function scrollControll() {
	console.log('scrollControll');

	rect = leftContent.getBoundingClientRect();

	if(rect.left >= 0) {
		initializeSpinners();
		draw();
		body.removeEventListener('scroll', scrollControll);
	}
}




// page tail
window.onload = function() {
	
	
	body = document.getElementById('body-id');
	leftContent = document.getElementById('left-content');
	rect = leftContent.getBoundingClientRect();



	


	/* Disable middle mouse button */
	document.body.onmousedown = function(e) { if (e.button === 1) return false; }

	body.addEventListener('scroll', scrollControll);

}
