$(document).ready(function() {
  // sidebar animation
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      // Main Wrapper
      $("#wrapper").toggleClass("toggled");
      // Footer
      $('#footer').toggleClass("footer-toggled");
  });

  // Disable Zoom on scroll
  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $( ".maps" ).mouseleave(function() {
    $('.maps iframe').css("pointer-events", "none");
  });

  // Footer
  $('.footer-links-holder h3').click(function () {
    $(this).parent().toggleClass('active');
  });

  
});


// $(function() {
//   $('.footer-links-holder h3').click(function () {
//     $(this).parent().toggleClass('active');
//   });
// });
