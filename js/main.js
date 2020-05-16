const burger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  header.classList.toggle("burger-active");
});

burger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
});
