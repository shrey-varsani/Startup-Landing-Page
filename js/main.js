/* MAIN KERNEL CAPABILITY (BOOTSTRAPPER & EVENT DISPATCHER) */

import { initDarkMode } from "./darkmode.js";
import { initNavbar } from "./navbar.js";
import { initScrollRevealAndCounters } from "./counters.js";
import {
  initLanguageSwitcher,
  registerLangCallback,
  setLanguageMode,
} from "./language-switch.js";
import {
  initAnimations,
  renderHeroPrompts,
  renderPlaygroundWorkspace,
} from "./animations.js";
import { initPivotTracks } from "./pivot_tracks.js";

document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initNavbar();
  initScrollRevealAndCounters();

  initLanguageSwitcher();
  initAnimations();
  initPivotTracks();

  registerLangCallback(() => {
    renderHeroPrompts();
    renderPlaygroundWorkspace();
  });

  renderHeroPrompts();
  renderPlaygroundWorkspace();

  setLanguageMode("en");
});
