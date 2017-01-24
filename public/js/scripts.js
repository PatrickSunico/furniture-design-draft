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
});
