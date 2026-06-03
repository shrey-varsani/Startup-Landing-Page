/* NAVBAR MODULE */

let siteHeader = null;
let mobileMenuToggle = null;
let navLinksMobile = null;

export function initNavbar() {
  siteHeader = document.getElementById("site-header");
  mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  navLinksMobile = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }
  });

  if (mobileMenuToggle && navLinksMobile) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinksMobile.classList.toggle("mobile-open");
      mobileMenuToggle.classList.toggle("mobile-open");
    });

    const innerLinks = navLinksMobile.querySelectorAll("a");
    innerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinksMobile.classList.remove("mobile-open");
        mobileMenuToggle.classList.remove("mobile-open");
      });
    });
  }
}
export function closeMobileMenu() {
  if (navLinksMobile) navLinksMobile.classList.remove("mobile-open");
  if (mobileMenuToggle) mobileMenuToggle.classList.remove("mobile-open");
}
