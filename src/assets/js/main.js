import "../css/main.css";

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".rvo-alert .rvo-button__close")
    .addEventListener("click", function (event) {
      const parrent = event.target.closest(".rvo-alert");
      parrent.style.display = "none";
    });
});
