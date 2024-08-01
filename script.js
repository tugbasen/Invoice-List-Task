// Sidebarı index dosyasına yükleme ve Sidebar açma/kapama işlemleri
$(document).ready(function () {
  // Sidebar dosyasını yükle
  $("#sidebar-container").load("components/sidebar.html", function () {
    // Sidebar yüklendikten sonra tıklama olayını ekle
    $("#sidebar-container").on("click", ".side-arrow", function () {
      $(this).toggleClass("active");
      $("#sidebar-container").toggleClass("active");
      $(".page-container").toggleClass("w-wider");
    });
  });

  //Header dosyasını yükle
  $("#header-container").load("components/header.html");

  // Ekran genişliğine göre sidebarı açık/kapa
  $(document).ready(function () {
    function checkWidth() {
      if ($(window).width() <= 599) {
        $("#sidebar-container").addClass("active");
        $(".page-container").addClass("w-wider");
      } else {
        $("#sidebar-container").removeClass("active");
        $(".page-container").removeClass("w-wider");
      }
    }

    // Sayfa yüklendiğinde ve pencere yeniden boyutlandırıldığında kontrol et
    checkWidth();
    $(window).resize(checkWidth);
  });
});
