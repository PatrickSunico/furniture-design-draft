$(document).ready(function() {
  // sidebar animation
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      // Main Wrapper
      $("#wrapper").toggleClass("toggled");
      // Footer
      $('#footer').toggleClass("footer-toggled");
  });
});
