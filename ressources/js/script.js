$(document).ready(function(){

  $(".thomas").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  })


 $(".js-scroll-team").click(function() {       
      $("html, body").animate({scrollTop: $(".js-section-team").offset().top}, 2000);     });








});
