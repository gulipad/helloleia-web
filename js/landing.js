document.addEventListener('DOMContentLoaded', function () {
  // particleground(document.getElementById('particles'), {
  //   dotColor: '#ffffff',
  //   lineColor: '#ffffff',
  // });
  // var intro = document.getElementById('intro');
  // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

  $("body").mousemove(function( event ) {
    var width = $(this).width(),
        height = $(this).height(),
        maxDistance = Math.sqrt(width*width + height*height)
    var x = event.pageX - width/2,
        y = event.pageY - height/2
    var polarCoord = cart2Polar(x, y)
    var percent = Math.round(polarCoord.d*200/maxDistance)*0.4
    var bg = "linear-gradient(" + (polarCoord.deg - 90) + "deg,#f43b47 " + (percent) +"%,#453a94 "+ (100-percent)+ "%)";
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
