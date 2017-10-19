var draw = SVG("drawing");
window.onload = svginit;
    
function svginit() {
  console.log("svg init");
  animatePollen(0);
}

function animatePollen (currentFrame) {
  var timer = 500;
  console.log(currentFrame);
  var frames = SVG.select(".pollinering");
  frames.removeClass("current");

  frames.each(
    function(i, children) {
      var current_frame_el =  SVG.select("#p" + currentFrame);
      console.log(i + " : " + currentFrame);

      if( i == (currentFrame - 1)) {
        current_frame_el.addClass("current");
      }
    });

    var nextFrame = currentFrame + 1;

    if (nextFrame > frames.length()) {
      nextFrame = 0;
      timer = 1500;
    }

    window.setTimeout(
      function() {
        animatePollen(nextFrame);
      }, timer);
}