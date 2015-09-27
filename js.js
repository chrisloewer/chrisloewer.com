var mainDiv = document.getElementById('main');

window.location.hash = 'main';

// page tail
window.onload = function() {
	
	/* Disable middle mouse button */
	document.body.onmousedown = function(e) { if (e.button === 1) return false; }
}

