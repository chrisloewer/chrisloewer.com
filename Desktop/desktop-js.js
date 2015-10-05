var body;
var destPageNumber;
var activePageNumber;

window.onload = function() {
	body = document.getElementById('body');

	destPageNumber = 1;
	loadPage();
}

function reset() {
	var left_divs = document.getElementsByClassName('left');
	var right_divs = document.getElementsByClassName('right');

	var i;
	for(i=0; i<left_divs.length; i++) {
		var element = left_divs[i];
		element.className = 'left';
		element.removeEventListener('transitionend', reset);
	}
	for(i=0; i<right_divs.length; i++) {
		right_divs[i].className = 'right';
	}

	loadPage();
}

function fadeOut() {
	var activeElement = document.getElementById('left-' + activePageNumber);
	var partnerElement = document.getElementById('right-' + activePageNumber);

	activeElement.className += ' anim-out';
	partnerElement.className += ' anim-out';
	body.className = 'body page-' + activePageNumber;

	activeElement.addEventListener('transitionend', reset);
}

// CLICK HANDLERS
function pgOne_Click() {
	if(activePageNumber != 1) {
		destPageNumber = 1;
		fadeOut();
	}
}
function pgTwo_Click() {
	if(activePageNumber != 2){
		destPageNumber = 2;
		fadeOut();
	}
}

// LOAD PAGE
function loadPage() {
	document.getElementById('left-' + destPageNumber).className += ' anim';
	document.getElementById('right-' + destPageNumber).className += ' anim';
	activePageNumber = destPageNumber;
}
