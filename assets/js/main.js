(function () {
  "use strict";

  document
    .getElementById("sidebarCollapse")
    .addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("active");
    });
})();
