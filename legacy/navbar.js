document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const nav = document.getElementById("navbarNav");

  toggler.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
