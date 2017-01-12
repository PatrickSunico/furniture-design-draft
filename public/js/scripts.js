// javascript here
$(document).ready(function() {
  $('span.hamburger-button').click(function(e) {
    $('.offcanvas').toggleClass('hideSidenav');
    $('.content-wrapper').toggleClass('wrapper-no_margin');
    e.preventDefault();
  });
});

// $(window).resize(function(){
//   if($(window).width() > 991) {
//     $('.sidenav').show();
//     $('span.hamburger-button').hide();
//   } else if($(window).width() < 990 ) {
//     $('.sidenav').hide();
//     $('span.hamburger-button').show();
//   }
// });
