/* ==========================================================================
   DARKMODE MODULE
   ========================================================================== */

let currentAppearance = 'dark';
let themeToggleBtn = null;

export function getAppearance() {
  return currentAppearance;
}

export function setAppearanceMode(appearance, savePreference = true) {
  currentAppearance = appearance;
  document.body.setAttribute('data-appearance', appearance);
  
  // Update canvas background glow also
  const ambientGlow = document.getElementById('ambient-glow');
  if (ambientGlow) {
    ambientGlow.style.background = 'var(--hero-glow-grad)';
  }

  if (savePreference) {
    localStorage.setItem('sprechen-appearance', appearance);
  }
}

export function toggleAppearance() {
  const nextAppearance = currentAppearance === 'dark' ? 'light' : 'dark';
  setAppearanceMode(nextAppearance);
}

export function initDarkMode() {
  themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  const savedAppearance = localStorage.getItem('sprechen-appearance');
  if (savedAppearance === 'light' || savedAppearance === 'dark') {
    setAppearanceMode(savedAppearance, false);
  } else {
    setAppearanceMode('dark', false); // default mode
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleAppearance);
  }
}
