import "../css/main.css";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rvo-alert").forEach(function (alertDiv) {
    const closeButton = alertDiv.querySelector(".rvo-button__close");
    const alertId = alertDiv.getAttribute("data-alert-id");

    if (localStorage.getItem(`alertClosed-${alertId}`) === "true") {
      alertDiv.style.display = "none";
    }

    closeButton.addEventListener("click", function (event) {
      alertDiv.style.display = "none";

      // Set a localStorage item to remember the alert is closed
      localStorage.setItem(`alertClosed-${alertId}`, "true");
    });
  });
});
