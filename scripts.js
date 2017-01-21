var body;
var destPageNumber;
var activePageNumber;
var buttons;
var NUM_PAGES = 4;
touches = {
    "touchstart": {"x":-1, "y":-1}, 
    "touchmove" : {"x":-1, "y":-1}, 
    "touchend"  : false,
    "direction" : "undetermined"
  }

window.onload = function() {
  body = document.getElementById('body');
  buttons = document.getElementsByClassName('pgButton');

  body.addEventListener('wheel', mouseWheelController);
  document.addEventListener('touchstart', touchHandler);
  document.addEventListener('touchmove', touchHandler);
  document.addEventListener('touchend', touchHandler);

  destPageNumber = 1;
  loadPage();
  pageLoadComplete();
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

// INTERACTION HANDLERS
function pg_click(n) {
  if(activePageNumber != n) {
    body.removeEventListener('wheel', mouseWheelController);
    document.removeEventListener('touchstart', touchHandler);
    document.removeEventListener('touchmove', touchHandler);
    document.removeEventListener('touchend', touchHandler);
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

function touchHandler(e) {
  var touch;
  if (typeof e !== 'undefined'){  
    // e.preventDefault(); 
    if (typeof e.touches !== 'undefined') {
      touch = e.touches[0];
      switch (e.type) {
        case 'touchstart':
        case 'touchmove':
          touches[e.type].x = touch.pageX;
          touches[e.type].y = touch.pageY;
          break;
        case 'touchend':
          touches[e.type] = true;
          if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
            touches.direction = touches.touchstart.y < touches.touchmove.y ? "down" : "up";
            var swipeDist = Math.abs(touches.touchstart.y - touches.touchmove.y);
            
            if(touches.direction == 'up' && swipeDist > 200) {
              nextPage();
            }
            else if(touches.direction == 'down' && swipeDist > 200) {
              prevPage();
            }
          }
        default:
          break;
      }
    }
  }
}

// LOAD PAGE
function loadPage() {
  document.getElementById('left-' + destPageNumber).addEventListener('transitionend', pageLoadComplete);
  document.getElementById('left-' + destPageNumber).className += ' anim';
  document.getElementById('right-' + destPageNumber).className += ' anim';
  activePageNumber = destPageNumber;
  updatePageButtons();
}

function pageLoadComplete() {
  document.getElementById('left-' + destPageNumber).removeEventListener('transitionend', pageLoadComplete);
  body.addEventListener('wheel', mouseWheelController);
  document.addEventListener('touchstart', touchHandler);
  document.addEventListener('touchmove', touchHandler);
  document.addEventListener('touchend', touchHandler);
  document.getElementById('left-' + destPageNumber).className += ' loaded';
  document.getElementById('right-' + destPageNumber).className += ' loaded';
}

function nextPage() {
  if(activePageNumber < NUM_PAGES && destPageNumber < NUM_PAGES) {
    body.removeEventListener('wheel', mouseWheelController);
    document.removeEventListener('touchstart', touchHandler);
    document.removeEventListener('touchmove', touchHandler);
    document.removeEventListener('touchend', touchHandler);
    destPageNumber++;
    fadeOut();
  }
}

function prevPage() {
  if(activePageNumber > 1 && destPageNumber > 1) {
    body.removeEventListener('wheel', mouseWheelController);
    document.removeEventListener('touchstart', touchHandler);
    document.removeEventListener('touchmove', touchHandler);
    document.removeEventListener('touchend', touchHandler);
    destPageNumber--;
    fadeOut();
  }
}
