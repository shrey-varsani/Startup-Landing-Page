/* ==========================================================================
   MAIN KERNEL CAPABILITY (BOOTSTRAPPER & EVENT DISPATCHER)
   ========================================================================== */

import { initDarkMode } from './darkmode.js';
import { initNavbar } from './navbar.js';
import { initScrollRevealAndCounters } from './counters.js';
import { initLanguageSwitcher, registerLangCallback, setLanguageMode } from './language-switch.js';
import { initAnimations, renderHeroPrompts, renderPlaygroundWorkspace } from './animations.js';
import { initPivotTracks } from './pivot_tracks.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize core system utilities
  initDarkMode();
  initNavbar();
  initScrollRevealAndCounters();
  
  // 2. Initialize interactive dashboards & coaches databases
  initLanguageSwitcher();
  initAnimations();
  initPivotTracks();

  // 3. Coordinate real-time views rendering on language toggle
  registerLangCallback(() => {
    renderHeroPrompts();
    renderPlaygroundWorkspace();
  });

  // 4. Trigger initial rendering
  renderHeroPrompts();
  renderPlaygroundWorkspace();

  // 5. Default to English theme view mode
  setLanguageMode('en');
});
