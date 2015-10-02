var mainDiv = document.getElementById('main');

window.location.hash = 'main-tag';

var leftContent;
var rect;
var body;

function scrollControll() {

	rect = leftContent.getBoundingClientRect();

	if(rect.left >= 0) {
		document.getElementById('html-skill').className += ' anim-1';
		document.getElementById('js-skill').className += ' anim-2';
		document.getElementById('c-skill').className += ' anim-3';
		document.getElementById('java-skill').className += ' anim-4';
		document.getElementById('ruby-skill').className += ' anim-5';

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
