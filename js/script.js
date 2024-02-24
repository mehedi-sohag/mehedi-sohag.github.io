const yearEl = document.querySelector(".year");
console.log(yearEl);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector(".header");
let x = header.getBoundingClientRect().height;

// Sticky navigation

const sectionHeroEl = document.querySelector(".hero__section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: `-${x}px`,
  }
);
obs.observe(sectionHeroEl);

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
