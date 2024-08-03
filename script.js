// Load the sidebar into the index file and Sidebar open/close operations
$(document).ready(function () {
  // Load the sidebar and header files
  $("#sidebar-container").load("components/sidebar.html", function () {
    // Add click event after the sidebar is loaded
    $(document).on("click", ".side-arrow", function () {
      $(this).toggleClass("active");
      $("#sidebar-container").toggleClass("active");
      $(".page-container").toggleClass("w-wider");
    });
  });

  // Load the header file
  $("#header-container").load("components/header.html");

  // Load the contents file
  $("#contents").load("components/contents.html");
});
