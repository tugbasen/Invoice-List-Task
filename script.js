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

    // Function to handle clicks outside the sidebar
    function handleClickOutsideSidebar(event) {
      if (!$(event.target).closest("#sidebar-container, .side-arrow").length) {
        $("#sidebar-container").removeClass("active");
        $(".side-arrow").removeClass("active");
        $(".page-container").removeClass("w-wider");
      }
    }

    /************************************************************************************************************************************************/

    // Sidebar operations
    // Function to handle clicks on .nav-link when the sidebar is active
    function handleSideBarNavLinkClick() {
      $("#sidebar-container").removeClass("active");
      $(".side-arrow").removeClass("active");
      $(".page-container").removeClass("w-wider");
    }

    // Check width and bind events
    function checkWidthAndBindSideBarEvents() {
      if (window.matchMedia("(max-width: 599px)").matches) {
        $(document).on("click", handleClickOutsideSidebar);
        $(document).on("click", ".nav-link", handleSideBarNavLinkClick);
      } else {
        $(document).off("click", handleClickOutsideSidebar);
        $(document).off("click", ".nav-link", handleSideBarNavLinkClick);
      }
    }

    // Initial check
    checkWidthAndBindSideBarEvents();

    // Check width on resize
    $(window).resize(checkWidthAndBindSideBarEvents);

    /************************************************************************************************************************************************/

    // Navbar operations
    // Function to handle clicks outside the navbar-collapse
    function handleClickOutsideNavbar(event) {
      if (
        !$(event.target).closest(".navbar-collapse").length &&
        !$(event.target).closest(".navbar-toggler").length
      ) {
        $(".navbar-collapse").removeClass("show");
      }
    }

    // Function to handle clicks on .nav-link
    function handleNavbarNavLinkClick() {
      $(".navbar-collapse").removeClass("show");
    }

    // check if the navbar-toggler is clicked
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggleClass("show");
    });

    // bind events
    $(document).on("click", handleClickOutsideNavbar);
    $(document).on("click", ".nav-link", handleNavbarNavLinkClick);
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
