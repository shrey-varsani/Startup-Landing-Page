/* ==========================================================================
   NAVBAR MODULE
   ========================================================================== */

let siteHeader = null;
let mobileMenuToggle = null;
let navLinksMobile = null;

export function initNavbar() {
  siteHeader = document.getElementById('site-header');
  mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  navLinksMobile = document.getElementById('nav-links');

  // Sticky navbar scroll listener
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  });

  // Mobile navigation slide transitions
  if (mobileMenuToggle && navLinksMobile) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinksMobile.classList.toggle('mobile-open');
      mobileMenuToggle.classList.toggle('mobile-open');
    });

    // Close mobile overlay card when clicking links
    const innerLinks = navLinksMobile.querySelectorAll('a');
    innerLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksMobile.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('mobile-open');
      });
    });
  }
}
export function closeMobileMenu() {
  if (navLinksMobile) navLinksMobile.classList.remove('mobile-open');
  if (mobileMenuToggle) mobileMenuToggle.classList.remove('mobile-open');
}
