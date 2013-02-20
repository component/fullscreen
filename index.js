
/**
 * Expose `fullscreen()`.
 */

exports = module.exports = fullscreen;

/**
 * Enter fullscreen mode for `el`.
 *
 * @param {Element} [el]
 * @api public
 */

function fullscreen(el){
  el = el || document.documentElement;
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
