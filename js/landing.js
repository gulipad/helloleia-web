document.addEventListener('DOMContentLoaded', function () {
  // particleground(document.getElementById('particles'), {
  //   dotColor: '#ffffff',
  //   lineColor: '#ffffff',
  // });
  // var intro = document.getElementById('intro');
  // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

  var pct = 180
  $("body").mousemove(function( event ) {
    pct += 1
    var width = $(this).width()
    var height = $(this).height()
    var x = event.pageX - width/2
    var y = event.pageY - height/2
    var polarCoord = cart2Polar(x, y)
    
    var bg = "linear-gradient(" + (polarCoord.deg - 90) + "deg,#f43b47,#453a94)";
        $("body").css("background-image", bg);
  });

}, false);

function cart2Polar(x, y){
    distance = Math.sqrt(x*x + y*y)
    radians = Math.atan2(y,x) //This takes y first
    degrees = radians * 360 / (2*Math.PI)
    polarCoord = { d:distance, rad:radians, deg: degrees }
    return polarCoord
}
