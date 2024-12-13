//Header effect scroll

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  window.scrollY > 1
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

//Nagigation meny active
window.addEventListener("scroll", function () {
  const section = document.querySelectorAll("section");
  const scrollY = this.window.scrollY;

  section.forEach(function (current) {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`);

    if (navItem) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  });
});

//scrollToTop
const scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", function () {
  scrollToTop.classList.toggle("active", this.window.scrollY > 500);
});

scrollToTop.addEventListener("click", function () {
  document.scrollToTop = 0;
  document.documentElement.scrollTop = 0;
});
//Responsive navigation menu togle

const navBtn = document.querySelector(".nav-menu-btn");
const navBar = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("close");
  navBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navBtn.classList.remove("close");
    navBar.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//Service section - Modal
const serviceModal = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

const modal = function (modalClick) {
  serviceModal[modalClick].classList.add("active");
};

learnMoreBtn.forEach((button, i) => {
  button.addEventListener("click", function () {
    modal(i);
  });
});

modalCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    serviceModal.forEach((modal) => {
      modal.classList.remove("active");
    });
  });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

const portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCard.forEach((button, i) => {
  button.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    portfolioModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// Swiper initialization

let swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});
ScrollReveal().reveal(".inner-title, .inner-second-title", {
  opacity: 0,
  delay: 500,
});
ScrollReveal().reveal(".home-info h1  , .about-img", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home-img, .description ", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".media-icons a , .list-item", {
  delay: 700,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".home-info h3, .home-info p , .inner-info-link", {
  delay: 600,
  origin: "left",
});
