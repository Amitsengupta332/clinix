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