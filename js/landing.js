document.addEventListener('DOMContentLoaded', function () {

  $('.main-container').biutifulGradient({color1: '#cc208e',color2: '#6713d2',angleDeg: '180'})

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
        })
    })

  $(function(){
    $('#mobile-menu').slicknav({
      prependTo: '.main-container', 
    });
  })

}, false);

function cart2Polar(x, y){
    distance = Math.sqrt(x*x + y*y)
    radians = Math.atan2(y,x) //This takes y first
    degrees = radians * 360 / (2*Math.PI)
    polarCoord = { d:distance, rad:radians, deg: degrees }
    return polarCoord
}
