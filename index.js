
/**
 * Expose `fullscreen()`.
 */

exports = module.exports = fullscreen;

/**
 * document element.
 */

var element = document.documentElement;

/**
 * fullscreen supported flag.
 */

exports.supported = !!(element.requestFullscreen
  || element.webkitRequestFullscreen
  || element.mozRequestFullScreen);

/**
 * Enter fullscreen mode for `el`.
 *
 * @param {Element} [el]
 * @api public
 */

function fullscreen(el){
  el = el || element;
  if (el.requestFullscreen) return el.requestFullscreen();
  if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
}

/**
 * Exit fullscreen.
 *
 * @api public
 */

exports.exit = function(){
  var doc = document;
  if (doc.exitFullscreen) return doc.exitFullscreen();
  if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen();
  if (doc.webkitCancelFullScreen) return doc.webkitCancelFullScreen();
};
