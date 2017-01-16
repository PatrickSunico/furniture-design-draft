$(document).ready(function() {
  // sidebar animation
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
});
