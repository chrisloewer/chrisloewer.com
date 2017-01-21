
// ------------------------------------ BASE CONTENT ----------------------------------------- //

// LocalStorage IDS
const newsID = 'newsSources';
const redditID = 'redditSources';

const defaultNews = [
  'http://feeds.bbci.co.uk/news/world/rss.xml',
  'https://medium.com/feed/tech-talk',
  'http://www.engadget.com/rss.xml',
  'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml',
  'http://feeds.abcnews.com/abcnews/topstories'
];
const defaultReddit = [
  'https://www.reddit.com/r/todayilearned/.rss',
  'https://www.reddit.com/r/worldnews/.rss',
  'https://www.reddit.com/r/mildlyinteresting/.rss',
  'https://www.reddit.com/r/science/.rss',
  'https://www.reddit.com/r/funny/.rss'
];


// ------------------------------------ APPLICATION CONTEXT ---------------------------------- //

var app = {
  initialize: function() {
    this.bindEvents();
    this.setDefaultSources();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    setTimeout(function() {
      hideSplash();
      nextPage();
    }, 1200);
  },

  setDefaultSources: function() {
    // If they haven't updated sources, initialize sources to default
    if(localStorage.getItem(newsID) == null) {
      localStorage.setItem(newsID, JSON.stringify(defaultNews));
    }
    if(localStorage.getItem(redditID) == null) {
      localStorage.setItem(redditID, JSON.stringify(defaultReddit));
    }
  },

  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
  },
  historyStack: [],
  page: 0,
  newsUrls: getNewsSources(),
  redditUrls: getRedditSources(),
  updateSources: function() {
    this.newsUrls = getNewsSources();
    this.redditUrls = getRedditSources();
  }
};

app.initialize();

window.onload = function() {

  document.addEventListener('touchstart', touchHandler, false);
  document.addEventListener('touchmove', touchHandler, false);
  document.addEventListener('touchend', touchHandler, false);
  document.addEventListener('click', touchHandler, false);
  document.addEventListener('keyup', keyHandler, false);
};


// ------------------------------------ KEY EVENT HANDLERS ----------------------------------- //

function keyHandler(e) {

  switch(e.keyCode) {
    case 37:  // Left Key
      prevPage();
      break;
    case 39:  // Right Key
      nextPage();
      break;
  }
}


// ------------------------------------ TOUCH EVENT HANDLERS --------------------------------- //

touches = {
  "touchstart": {"x":-1, "y":-1},
  "touchmove" : {"x":-1, "y":-1},
  "touchend"  : false,
  "direction" : "undetermined"
};

var minTouchDistance = 100;

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
          if (touches.touchstart.y > -1 && touches.touchmove.y > -1) {
            touches.direction = touches.touchstart.x < touches.touchmove.x ? "right" : "left";
            var swipeDistX = Math.abs(touches.touchstart.x - touches.touchmove.x);
            var swipeDistY = Math.abs(touches.touchstart.y - touches.touchmove.y);

            if(touches.direction == 'left' && swipeDistX > minTouchDistance && swipeDistX > swipeDistY) {
              nextPage();
            }
            else if(touches.direction == 'right' && swipeDistX > minTouchDistance && swipeDistX > swipeDistY) {
              prevPage();
            }
          }

          // Reset
          touches = {
            "touchstart": {"x":-1, "y":-1},
            "touchmove" : {"x":-1, "y":-1},
            "touchend"  : false,
            "direction" : "undetermined"
          };
          break;
        default:
          break;
      }
    }
  }
}


// ------------------------------------ PAGE TRANSITION ANIMATIONS --------------------------- //

function showPage(pageId) {
  var page = document.getElementById(pageId);

  addClass(page, 'current');
  addClass(page, 'anim-in');
  page.addEventListener('animationend', animHelper);

  function animHelper() {
    removeClass(this, 'anim-in');
    this.removeEventListener('animationend',animHelper);
  }
}

function hidePage(pageId) {
  var page = document.getElementById(pageId);
  addClass(page, 'anim-out');
  page.addEventListener('animationend', resetPage);
}

function resetPage() {
  removeClass(this, 'current');
  removeClass(this, 'anim-in');
  removeClass(this, 'anim-out');
  this.removeEventListener('animationend', resetPage);
}


// ------------------------------------ STORE LISTS OF FEEDS --------------------------------- //

function getNewsSources() {
  if (localStorage.getItem(newsID) != null) {
    return JSON.parse(localStorage.getItem(newsID));
  }
  // this backup should only ever be called in case local storage is cleared for w/e reason
  return defaultNews;
}

function getRedditSources() {
  if (localStorage.getItem(redditID) != null) {
    return JSON.parse(localStorage.getItem(redditID));
  }
  // this backup should only ever be called in case local storage is cleared for w/e reason
  return defaultReddit;
}