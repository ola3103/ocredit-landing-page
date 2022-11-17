if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// Nav Bar
const nav = document.querySelector(".nav--item--box");
const iconBox = document.querySelector(".nav--icon--box");
const menuIcon = document.querySelector(".menu--icon");
const closeIcon = document.querySelector(".close--icon");

iconBox.addEventListener("click", function () {
  nav.classList.toggle("show--nav");
  menuIcon.classList.toggle("icon--hidden");
  closeIcon.classList.toggle("icon--hidden");
});

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav--links");
  console.log(clicked);
  nav.classList.remove("show--nav");
  menuIcon.classList.toggle("icon--hidden");
  closeIcon.classList.toggle("icon--hidden");
});

// DarkTheme
const themeBox = document.querySelector(".theme");
const darkIcon = document.querySelector(".dark--theme--icon");
const lightIcon = document.querySelector(".light--theme--icon");
const body = document.querySelector("body");

themeBox.addEventListener("click", function () {
  body.classList.toggle("dark--theme--active");
  lightIcon.classList.toggle("theme--icon--hidden");
  darkIcon.classList.toggle("theme--icon--hidden");
});

// STICKY NAV
const navBar = document.querySelector(".nav--header");
const hero = document.querySelector(".hero");
const navSticky = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add("sticky--nav");
  } else {
    navBar.classList.remove("sticky--nav");
  }
};
const navOptions = {
  root: null,
  threshold: 0.18,
};
const navObserver = new IntersectionObserver(navSticky, navOptions);
navObserver.observe(hero);

// Animate On Scroll
const translateSections = document.querySelectorAll(".opacity--on--scroll");
translateSections.forEach((sec) => sec.classList.add("removesection"));
const translateSectionsAOS = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("translate--up");
  observer.unobserve(entry.target);
};
const translateOptions = {
  root: null,
  threshold: 0.3,
};
const translateSectionsObserver = new IntersectionObserver(
  translateSectionsAOS,
  translateOptions
);
translateSections.forEach((sec) => translateSectionsObserver.observe(sec));
// FAQ
const faqIconBox = document.querySelectorAll(".faq--icon--box");
const answerFaq = document.querySelectorAll(".answer--faq");
const faqBox = document.querySelector(".faq--box");

faqBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq--icon--box");
  if (!clicked) return;

  document
    .querySelector(`.faq--${clicked.dataset.faq}`)
    .classList.toggle("show--faq");
  clicked.classList.toggle("rotate--icon");
});

// Get Started Animation

const getStarted = document.querySelector(".get--started--step");
const singleStep = document.querySelectorAll(".single--step");

const getStartedFunc = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  singleStep.forEach((sin) => sin.classList.add("single--step--animate"));
  getStarted.style.setProperty("--animate--", "moveline 3.5s linear forwards");
  getStarted.style.setProperty("--opacity--", 1);
};

const getStartedObserver = new IntersectionObserver(getStartedFunc, {
  root: null,
  threshold: 0.3,
});

getStartedObserver.observe(getStarted);
