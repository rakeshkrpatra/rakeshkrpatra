
"use strict";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Close mobile navigation menu
function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Toggle mobile navigation menu
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside navigation
document.addEventListener("click", function (event) {
  if (
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

// Close mobile menu when switching to desktop view
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
