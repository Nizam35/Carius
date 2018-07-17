$(window).scroll( function() {
  if($(document).scrollTop() > 50) {
      $('header').addClass('navshrink');
  }
  else{
        $('header').removeClass('navshrink');
  }
  
});