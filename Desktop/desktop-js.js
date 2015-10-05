var body;
var pageNumber;

window.onload = function() {
	body = document.getElementById('body');

	pageNumber = 1;
	// pgOne_Load();

	pgOne();
}

function reset() {
	console.log('reset');

	var left_divs = document.getElementsByClassName('left');
	var right_divs = document.getElementsByClassName('right');

	var i;
	for(i=0; i<left_divs.length; i++) {
		var element = left_divs[i];
		element.className = 'left';
		element.dataset.active = '0';
		// removeAllEvents(element, 'transitionend');

		element.removeEventListener('transitionend', reset);
		// element.removeEventListener('transitionend', pgOne);
		// element.removeEventListener('transitionend', pgTwo);
		// element.removeEventListener('transitionend', reset);
	}

	for(i=0; i<right_divs.length; i++) {
		right_divs[i].className = 'right';
	}
}

function fadeOut() {
	var activeElement = document.getElementById('left-' + pageNumber);
	var partnerElement = document.getElementById('right-' + pageNumber);
	activeElement.className += ' anim-out';
	partnerElement.className += ' anim-out';
	body.className = 'body page-' + pageNumber;

	activeElement.addEventListener('transitionend', reset);
}

function pgOne_Load() {
	// reset();
	fadeOut();
	// pgOne();
}
function pgOne() {
	console.log('pgOne');

	var element = document.getElementById('left-1');

	element.className += ' anim';
	document.getElementById('right-1').className += ' anim';
	element.dataset.active = '1';

	pageNumber = 1;

	// removeAllEvents(element, 'transitionend');
}

function pgTwo_Load() {
	// reset();
	fadeOut(pgTwo);
	// pgTwo();
}
function pgTwo() {
	console.log('pgTwo');

	var element = document.getElementById('left-2');

	document.getElementById('right-2').className += ' anim';
	element.className += ' anim';
	element.dataset.active = '1';

	pageNumber = 2;

	// removeAllEvents(element, 'transitionend');
}

function msg() {
	console.log('MSG funct');
}
