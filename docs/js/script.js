let toggler = document.querySelector(".burger");
let navbar_menu = document.querySelector(".navbar-menu");
let navbar_end = document.querySelector(".navbar-end");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("is-active");
  navbar_menu.classList.toggle("is-active");
  navbar_end.classList.toggle("is-flex-direction-column");
});

var readMoreButtons = document.querySelectorAll(".button");

readMoreButtons.forEach(function (button) {
  let isHidden = true;
  button.addEventListener("click", function () {
    if (isHidden) {
      button.innerHTML = "Read Less";
    } else {
      button.innerHTML = "Read More";
    }
    isHidden = !isHidden;
    var hiddenParagraph = button.previousElementSibling;
    hiddenParagraph.classList.toggle("is-hidden");
  });
});
