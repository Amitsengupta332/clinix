function initNavbar() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const servicesBtn = document.getElementById("servicesBtn");
  const servicesMenu = document.getElementById("servicesMenu");
  const servicesIcon = document.getElementById("servicesIcon");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));

      const icon = menuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });
  }

  if (servicesBtn && servicesMenu && servicesIcon) {
    servicesBtn.addEventListener("click", () => {
      servicesMenu.classList.toggle("hidden");
      servicesIcon.classList.toggle("rotate-180");
    });
  }
}

window.addEventListener("load", () => {
  setTimeout(initNavbar, 300);
});

const heroSlides = [
  {
    subtitle: "Jakobsclean – Ihr Partner für Sauberkeit",
    title: "Glas- & Gebäudereinigung",
    text: "Professionelle Reinigung für Privat, Büro und Gewerbe – zuverlässig, gründlich und flexibel."
  },
  {
    subtitle: "Sauberkeit mit Vertrauen",
    title: "Zuverlässiger Reinigungsservice",
    text: "Wir sorgen für hygienische und gepflegte Räume – individuell auf Ihre Bedürfnisse abgestimmt."
  },
  {
    subtitle: "Ihr Experte in Heppenheim",
    title: "Qualität, die überzeugt",
    text: "Moderne Reinigungstechniken und umweltfreundliche Mittel für beste Ergebnisse."
  }
];

let currentSlide = 0;

function changeHeroText() {
  currentSlide = (currentSlide + 1) % heroSlides.length;

  document.getElementById("hero-subtitle").innerText =
    heroSlides[currentSlide].subtitle;

  document.getElementById("hero-title").innerText =
    heroSlides[currentSlide].title;

  document.getElementById("hero-text").innerText =
    heroSlides[currentSlide].text;
}

// Change every 5 seconds
setInterval(changeHeroText, 5000);