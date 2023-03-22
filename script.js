const navbar = document.querySelector("header");
const logo = document.querySelector(".logo-img");
const hamburgerButton = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
let hamburgerOpen = false;

// Change logo size and the navbar position & opacity when scrolling down
document.addEventListener("scroll", function () {
  if (window.scrollY > 80 && window.innerWidth > 600) {
    navbar.classList.add("nav-scroll");
    logo.style.cssText = "height: 70%; width: 70%";
  } else {
    navbar.classList.remove("nav-scroll");
    logo.style.cssText = "height: inherit; width: inherit";
  }
});

// controlling the hamburger dropdown for mobile screens
hamburgerButton.addEventListener("click", function () {
  if (!hamburgerOpen) {
    hamburgerButton.classList.add("open");
    mobileNav.style.display = "block";
    hamburgerOpen = true;
  } else {
    hamburgerButton.classList.remove("open");
    mobileNav.style.display = "none";
    hamburgerOpen = false;
  }
});
