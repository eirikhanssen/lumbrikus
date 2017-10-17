/*
    Functions
*/

/**
  path is the path we wish with to animate along
  element is the element we want to animate
  start is the frame we wish to start the animation on
  dur is the duration in milliseconds
  callback is a function we wish to call once the animation has finished
**/


animateGroupAlongPath = function (path, element, start, dur, callback) {
    var len = Snap.path.getTotalLength(path);

    console.log(len, path);
    Snap.animate(start, len, function (value) {
      var movePoint = Snap.path.getPointAtLength(path, value);

      element.transform('t' + movePoint.x + ', ' + -movePoint.y);
    }, dur, mina.easeinout, function () {
      callback(path);
    });
  };

  animateAlongPath = function (path, element, start, dur, callback) {
    var len = Snap.path.getTotalLength(path);
    console.log("animateAlongPath() len, path: " + len, path);
    Snap.animate(start, len, function (value) {
      var movePoint = Snap.path.getPointAtLength(path, value);


      element.attr({ cx: movePoint.x, cy: movePoint.y });
    }, dur, mina.easeinout, function () {
      callback(path);
    });
  };


window.addEventListener('load', befrukting_init, false);

var s, player, mpath, start, duration;

var complete = function () {
        console.log("animation completed!");
    }

function befrukting_init () {
    //console.log("called: befruktning_init();");
    s = new Snap('#befruktning_anim_svg');
    player = s.select("#player");
    var cannon = s.circle(10,10,10);
    mpath = s.select("#def_mpath_pollenkorn");
    var start = 0;
    var duration = 10000;
    
    
    console.log("calling: animateAlongPath(mpath, player, start, dur, complete);");
    animateAlongPath(s.select('#bane'), cannon, start, duration, complete);
}





