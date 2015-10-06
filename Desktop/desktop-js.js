var body;
var destPageNumber;
var activePageNumber;
var buttons;
var NUM_PAGES = 4;

window.onload = function() {
  body = document.getElementById('body');
  body.addEventListener('wheel', mouseWheelController);
  buttons = document.getElementsByClassName('pgButton');

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

function updatePageButtons() {
  var i;
  for(i=0; i<buttons.length; i++) {
    buttons[i].className = 'pgButton';
  }
  buttons[activePageNumber-1].className += ' active';
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
function pg_click(n) {
  if(activePageNumber != n) {
    destPageNumber = n;
    fadeOut();
  }
}

function mouseWheelController(e) {
  if(e.deltaY > 0) {
    nextPage();
  }
  else if(e.deltaY < 0) {
    prevPage();
  }
}

// LOAD PAGE
function loadPage() {
  document.getElementById('left-' + destPageNumber).className += ' anim';
  document.getElementById('right-' + destPageNumber).className += ' anim';
  activePageNumber = destPageNumber;
  updatePageButtons()
}

function nextPage() {
  if(activePageNumber < NUM_PAGES && destPageNumber < NUM_PAGES) {
    destPageNumber++;
    fadeOut();
  }
}

function prevPage() {
  if(activePageNumber > 1 && destPageNumber > 1) {
    destPageNumber--;
    fadeOut();
  }
}

