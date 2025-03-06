// Toggle for the responsive navbar menu
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});

// Toggle for the dropdown menu
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  dropdownMenu.classList.toggle("show"); // Toggle the dropdown menu
});

// Optional: Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

// slider==============================

let flag = 0;

function controller(x) {
  flag += x;
  slideshow(flag);
}

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");

  if (num >= slides.length) {
    flag = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[flag].style.display = "block";
}

// Call slideshow initially
slideshow(flag);

// Auto-slide every 3 seconds
setInterval(() => {
  flag++;
  slideshow(flag);
}, 3000);

// <!-- ==================================================testimonial-section===================== -->

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const totalCards = cards.length;
  let currentIndex = 0;

  // Function to move the carousel
  function moveCarousel() {
    if (currentIndex >= totalCards - 1) {
      currentIndex = 0; // Reset to the first card after the last
    } else {
      currentIndex++;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the carousel
  }

  // Set interval to auto-slide every 3 seconds
  setInterval(moveCarousel, 3000);
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Loading Animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});
