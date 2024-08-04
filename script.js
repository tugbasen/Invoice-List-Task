// Mobile-Desktop Sidebar and Page Container Modifiers
function updateSidebarMod() {
  const sidebar = document.getElementById("sidebar-container");
  const pageContainer = document.querySelector(".page-container");

  if (sidebar && pageContainer) {
    if (window.innerWidth <= 600) {
      sidebar.setAttribute("data-mod", "mobile");
      pageContainer.setAttribute("data-mod", "mobile");
    } else {
      sidebar.setAttribute("data-mod", "desktop");
      pageContainer.setAttribute("data-mod", "desktop");
    }
  } else {
    console.error("Elements not found");
  }
}

// Load the sidebar into the index file and Sidebar open/close operations
$(document).ready(function () {
  // Load the sidebar and header files
  $("#sidebar-container").load("components/sidebar.html", function () {
    // console.log("Sidebar loaded");

    // Update sidebar and page container attributes after loading
    updateSidebarMod();

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

  // Update sidebar and page container attributes on resize
  $(window).resize(updateSidebarMod);

  // Initial update on page load
  updateSidebarMod();
});
