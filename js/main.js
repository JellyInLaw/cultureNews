let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");
let header = document.querySelector(".header");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  header.classList.toggle("burger-active");
});

burger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
});
