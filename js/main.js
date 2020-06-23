const burger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");

let showBurgerMenu = () => {
  burger.classList.toggle("active");
  header.classList.toggle("burger-active");
  headerNav.classList.toggle("active");
};

burger.addEventListener("click", showBurgerMenu);
