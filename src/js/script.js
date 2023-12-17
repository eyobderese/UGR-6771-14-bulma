let toggler = document.getElementById("burger");
let navbar_menu = document.querySelector(".navbar-menu");
let navbar_end = document.querySelector(".navbar-end");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("is-active");
  navbar_menu.classList.toggle("is-active");
  navbar_end.classList.toggle("is-flex-direction-column");
});
