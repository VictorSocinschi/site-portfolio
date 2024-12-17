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
//Theme button Light/Dark
const themeBtn = document.querySelector(".theme-btn");

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
//Function to fing icon
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";
//Function switch theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getIcon("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Service section - Modal
const serviceModal = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

const modal = function (modalClick) {
  serviceModal[modalClick].classList.add("active");
  disableScrollReveal();
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
    enableScrollReveal();
  });
});
//initial ScrollReveal
const revealConfiguration = [
  {
    selector: ".inner-title, .inner-second-title",
    config: {
      opacity: 0,
      delay: 500,
    },
  },
  {
    selector: ".home-info h1  , .about-img , .contact-card .title , ",
    config: {
      delay: 500,
      origin: "left",
    },
  },
  {
    selector: ".home-img, .description ",
    config: {
      delay: 600,
      origin: "right",
    },
  },
  {
    selector:
      ".skills-description , .work-exp-title, .services-description , .contact-right p , .contact-left h2 ",
    config: {
      delay: 600,
      origin: "top",
    },
  },
  {
    selector: ".media-icons a , .list-item , .inner-info-link ",
    config: {
      delay: 700,
      origin: "bottom",
      interval: 300,
    },
  },
  {
    selector: ".education",
    config: {
      delay: 600,
      origin: "bottom",
      interval: 300,
    },
  },
  {
    selector:
      ".work-exp, .experience-card , .services-container, .portfolio-img-card , .contact-list li , .first-row ,.second-row , .third-row",
    config: {
      origin: "top",
      delay: 600,
      interval: 300,
    },
  },
  {
    selector: ".home-info h3, .home-info p , .inner-info-link",
    config: {
      delay: 600,
      origin: "left",
    },
  },
];

function initializeScrollReveal() {
  window.sr = ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100,
  });
  revealConfiguration.forEach(({ selector, config }) => {
    sr.reveal(selector, config);
  });
}
initializeScrollReveal();

//disable ScrollReveal
function disableScrollReveal() {
  sr.clean(); // Очистка элементов от анимаций
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";
  revealConfiguration.forEach(({ selector }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.transform = "";
      el.style.opacity = "";
      el.style.transition = "";
      el.style.visibility = "";
    });
  });
  console.log("function off");
}
// Enable ScrollReveal

function enableScrollReveal() {
  document.documentElement.style.overflowY = "";
  document.body.style.overflowY = "";
  initializeScrollReveal();
  console.log("function work");
}

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

const portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
  disableScrollReveal();
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
    enableScrollReveal();
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
