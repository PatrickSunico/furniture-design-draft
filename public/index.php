<?php
  include('includes/header.php');
?>
  <!-- Page Content -->
  <div id="page-content-wrapper">
      <!-- <span href="#menu-toggle" id="menu-toggle">
        &#9776;
      </span> -->
      <div id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Underlined text header -->
      <h1 id="about"class="h1">Furniture Design</h1>
      <?php include("includes/sections/about-services.php"); ?>
      <?php include ("includes/sections/showcase.php"); ?>
      <!-- Google Maps -->
      <?php include ("includes/sections/contact.php"); ?>
  </div>
  <!-- /#page-content-wrapper -->

<?php
  // Footer
  include('includes/footer.php');
?>
