document.addEventListener('DOMContentLoaded', function () {
  $(".main-container").mousemove(function( event ) {
    var width = $(this).width(),
        height = $(this).height(),
        maxDistance = Math.sqrt(width*width + height*height)
    var x = event.pageX - width/2,
        y = event.pageY - height/2
    var polarCoord = cart2Polar(x, y)
    var percent = Math.round(polarCoord.d*200/maxDistance)*0.4
    var bg = "linear-gradient(" + (polarCoord.deg - 90) + "deg,#cc208e " + (percent) +"%,#6713d2 "+ (100-percent)+ "%)";
        $(".main-container").css("background-image", bg);
  });

  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 700);
      }
  });

  $(function(){
        $(".element").typed({
            strings: ["interacción.^500", "magia.^500", "inteligencia artificial.^500", "Infinit AI.^4000"],
            typeSpeed: 50,
            loop: true,
        });
    });

}, false);

function cart2Polar(x, y){
    distance = Math.sqrt(x*x + y*y)
    radians = Math.atan2(y,x) //This takes y first
    degrees = radians * 360 / (2*Math.PI)
    polarCoord = { d:distance, rad:radians, deg: degrees }
    return polarCoord
}
