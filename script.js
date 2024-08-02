// Sidebar'ı index dosyasına yükleme ve Sidebar açma/kapama işlemleri
$(document).ready(function () {
  // Sidebar ve header dosyalarını yükle
  $("#sidebar-container").load("components/sidebar.html", function () {
    // Sidebar yüklendikten sonra tıklama olayını ekle
    $(document).on("click", ".side-arrow", function () {
      $(this).toggleClass("active");
      $("#sidebar-container").toggleClass("active");
      $(".page-container").toggleClass("w-wider");
    });
  });

  //Header dosyasını yükle
  $("#header-container").load("components/header.html");
});
