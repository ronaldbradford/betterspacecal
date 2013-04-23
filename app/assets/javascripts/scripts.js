$(document).ready(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  $('.go-top').click(function(e) {
    e.preventDefault();
    $('body').animate({scrollTop: 0}, 300);
  });

  // show/hide filter fields
  $('#filterdata').click(function(){
    $('.filters').slideToggle();
  });

  // dropdown functionality on the filters
  $(".hotdrop").hover(
    function () {
      $(".opticalDrop").slideToggle(300)
    },
    function () {
      $(".opticalDrop").slideToggle(100)
    }
  );
  var viewportHeight = $(window).height();
});
