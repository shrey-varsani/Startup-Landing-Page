/* ==========================================================================
   ANIMATIONS & HIGH-FIDELITY INTERACTION CONTROLLER
   ========================================================================== */

import { COACHES_DB, getLanguage } from "./language-switch.js";

// --- Global Animation States ---
let isHeroTalking = false;
let isPlaygroundTalking = false;
let activeTab = "pro"; // 'pro' or 'casual'
let selectedCoachId = "sarah"; // DEFAULT COACH

// Wave visualizer configuration
let canvas = null;
let ctx = null;
let wavePos = 0;
let animationFrameId = null;

// Amplitude pixel indicator interval
let amplitudeInterval = null;

/**
 * Aesthetic Sine Wave Canvas Loop
 */
function drawWaves() {
  if (!canvas || !ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Read current display dimensions
  const width = canvas.width;
  const height = canvas.height;

  // Track color theme from CSS classes dynamically
  const isGerman = getLanguage() === "de";
  const primaryColor = isGerman
    ? "rgba(185, 28, 28, 0.4)"
    : "rgba(0, 112, 187, 0.35)";
  const secondaryColor = isGerman
    ? "rgba(212, 160, 23, 0.2)"
    : "rgba(139, 92, 246, 0.18)";

  // Draw 3 layers of overlaying curves
  const curves = [
    {
      amplitude: isHeroTalking ? 24 : 6,
      wavelength: 120,
      speed: 0.08,
      color: primaryColor,
      lineWidth: 2,
    },
    {
      amplitude: isHeroTalking ? 16 : 4,
      wavelength: 80,
      speed: -0.06,
      color: secondaryColor,
      lineWidth: 1.5,
    },
    {
      amplitude: isHeroTalking ? 30 : 8,
      wavelength: 160,
      speed: 0.04,
      color: isGerman ? "rgba(212, 160, 23, 0.12)" : "rgba(6, 182, 212, 0.15)",
      lineWidth: 1,
    },
  ];

  wavePos += 0.5;

  curves.forEach((curve) => {
    ctx.beginPath();
    ctx.strokeStyle = curve.color;
    ctx.lineWidth = curve.lineWidth;

    for (let x = 0; x < width; x++) {
      const angle = x / curve.wavelength + wavePos * curve.speed;
      const y = height / 2 + Math.sin(angle) * curve.amplitude;

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  });

  animationFrameId = requestAnimationFrame(drawWaves);
}

/**
 * Handle dynamic high DPI canvas sizing
 */
function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  if (ctx) {
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
}

/**
 * Animate the LED block level meters inside the immersive classroom
 */
function startAmplitudeSimulation() {
  stopAmplitudeSimulation();
  const pixels = document.querySelectorAll("#amplitude-row .amplitude-pixel");
  if (pixels.length === 0) return;

  amplitudeInterval = setInterval(() => {
    pixels.forEach((pixel) => {
      // Create organic bouncing vocal amplitudes
      const shouldActivate = Math.random() > 0.45;
      pixel.classList.toggle("active", shouldActivate);
    });
  }, 90);
}

function stopAmplitudeSimulation() {
  if (amplitudeInterval) {
    clearInterval(amplitudeInterval);
    amplitudeInterval = null;
  }
  const pixels = document.querySelectorAll("#amplitude-row .amplitude-pixel");
  pixels.forEach((p) => p.classList.remove("active"));
}

/**
 * Render quick conversational inputs inside the Hero Card
 */
export function renderHeroPrompts() {
  const scaffold = document.getElementById("hero-prompts-scaffold");
  if (!scaffold) return;

  const lang = getLanguage();
  // Sarah acts as Default for English, Elsbeth acts as Default for German on hero warmup card
  const activeCoachId = lang === "en" ? "sarah" : "elsbeth";
  const coach = COACHES_DB.find((c) => c.id === activeCoachId) || COACHES_DB[0];
  const list = coach.prompts[lang] || [];

  scaffold.innerHTML = "";

  list.forEach((prompt, index) => {
    const btn = document.createElement("button");
    btn.className = "prompt-choice reveal-on-scroll revealed";
    btn.id = `hero-prompt-${index}`;
    btn.style.width = "100%";

    btn.innerHTML = `
      <span>${prompt.text}</span>
      <span class="prompt-arrow">→</span>
    `;

    btn.addEventListener("click", () => {
      if (isHeroTalking) return;
      simulateHeroExchange(prompt);
    });

    scaffold.appendChild(btn);
  });
}

/**
 * Execute simulated speech recognition feedback inside the Hero Card
 */
function simulateHeroExchange(prompt) {
  isHeroTalking = true;

  // Audio state visual feedback
  const statusEl = document.getElementById("visualizer-status-text");
  const dialogueEl = document.getElementById("hero-dialogue-bubble");
  const feedbackOverlay = document.getElementById("hero-feedback-overlay");

  if (feedbackOverlay) feedbackOverlay.style.display = "none";

  if (statusEl) {
    statusEl.innerHTML =
      getLanguage() === "en"
        ? "Analyzing sentence cadence and phonemes..."
        : "Analysiere Satzmelodie und Betonungsmuster...";
  }

  if (dialogueEl) {
    dialogueEl.innerHTML =
      getLanguage() === "en"
        ? '"Speaking simulated... processing speech structures."'
        : '"Sprech-Simulation aktiv... verarbeite Lautbildung."';
  }

  // Simulation timeline
  setTimeout(() => {
    isHeroTalking = false;

    if (statusEl) {
      statusEl.innerHTML =
        getLanguage() === "en"
          ? "Speech resonance review complete"
          : "Lautbildungsanalyse abgeschlossen";
    }

    if (dialogueEl) {
      dialogueEl.innerHTML = `"${prompt.response}"`;
    }

    // Populate feedback overlays
    const diagnosticsText = document.getElementById("hero-diagnostics-text");
    const fluencyEl = document.getElementById("hero-score-fluency");
    const accentEl = document.getElementById("hero-score-accent");
    const syntaxEl = document.getElementById("hero-score-syntax");

    if (diagnosticsText) diagnosticsText.innerHTML = prompt.diagnostics;
    if (fluencyEl) fluencyEl.innerText = prompt.fluency;
    if (accentEl) accentEl.innerText = prompt.accent;
    if (syntaxEl) syntaxEl.innerText = prompt.syntax;

    if (feedbackOverlay) {
      feedbackOverlay.style.display = "grid";
      feedbackOverlay.classList.remove("fade-in-switch");
      void feedbackOverlay.offsetWidth; // Force Reflow
      feedbackOverlay.classList.add("fade-in-switch");
    }
  }, 1700);
}

/**
 * Initial Render & Event Listeners for Classroom
 */
export function renderPlaygroundWorkspace() {
  const listTarget = document.getElementById("coaches-list-target");
  if (!listTarget) return;

  const lang = getLanguage();
  const filtered = COACHES_DB.filter((c) => c.category === activeTab);

  listTarget.innerHTML = "";

  // Draw bento style selection items
  filtered.forEach((coach, index) => {
    const isActive = coach.id === selectedCoachId;
    const item = document.createElement("div");
    item.className = `coach-item-row ${isActive ? "active" : ""}`;
    item.id = `coach-row-${coach.id}`;
    item.setAttribute("data-id", coach.id);

    const accentLabel = lang === "en" ? coach.accentEn : coach.accentDe;

    item.innerHTML = `
      <div class="coach-meta-data">
        <div class="coach-avatar-circle">
          ${coach.avatar}
          <span class="coach-status-dot-avatar"></span>
        </div>
        <div class="coach-bio-text">
          <h4>${coach.name}</h4>
          <p>${accentLabel}</p>
        </div>
      </div>
      <div class="checkmark-select-icon">
        ✓
      </div>
    `;

    item.addEventListener("click", () => {
      selectCoach(coach.id);
    });

    listTarget.appendChild(item);
  });

  // Ensure selected coach is synchronized on render change
  const currentCoach =
    COACHES_DB.find((c) => c.id === selectedCoachId) || filtered[0];
  if (currentCoach) {
    updateImmersiveClassroom(currentCoach);
  }
}

/**
 * Change the active tutor and reset screens
 */
function selectCoach(coachId) {
  selectedCoachId = coachId;

  // Highlight visually
  const rows = document.querySelectorAll(
    "#coaches-list-target .coach-item-row",
  );
  rows.forEach((row) => {
    const isTarget = row.getAttribute("data-id") === coachId;
    row.classList.toggle("active", isTarget);
  });

  const coach = COACHES_DB.find((c) => c.id === coachId);
  if (coach) {
    updateImmersiveClassroom(coach);
  }
}

/**
 * Synchronize UI panels for selected coach properties
 */
function updateImmersiveClassroom(coach) {
  const lang = getLanguage();

  const avatar = document.getElementById("pm-active-avatar");
  const name = document.getElementById("pm-active-name");
  const details = document.getElementById("pm-active-details");
  const responseText = document.getElementById("pm-response-text");
  const feedbackReport = document.getElementById("pm-feedback-report");
  const promptContainer = document.getElementById(
    "playground-prompts-container",
  );
  const promptScaffold = document.getElementById("playground-prompts-scaffold");

  if (avatar) avatar.innerText = coach.avatar;
  if (name) name.innerHTML = `${coach.name} <span class="status-dot"></span>`;
  if (details)
    details.innerText = lang === "en" ? coach.accentEn : coach.accentDe;
  if (responseText) {
    responseText.innerHTML = `"${lang === "en" ? coach.greetingEn : coach.greetingDe}"`;
  }

  // Clear previous reports immediately
  if (feedbackReport) feedbackReport.style.display = "none";

  // Render selection options list
  if (promptScaffold) {
    promptScaffold.innerHTML = "";
    const prompts = coach.prompts[lang] || [];

    prompts.forEach((prompt, index) => {
      const btn = document.createElement("button");
      btn.className = "prompt-choice";
      btn.id = `pm-prompt-${index}`;
      btn.style.width = "100%";

      btn.innerHTML = `
        <span>${prompt.text}</span>
        <span class="prompt-arrow">→</span>
      `;

      btn.addEventListener("click", () => {
        if (isPlaygroundTalking) return;
        executeClassroomExchange(prompt);
      });

      promptScaffold.appendChild(btn);
    });

    if (promptContainer) {
      promptContainer.style.display = "block";
    }
  }
}

/**
 * Classroom prompt selection transaction simulation
 */
function executeClassroomExchange(prompt) {
  isPlaygroundTalking = true;

  const responseText = document.getElementById("pm-response-text");
  const micBtn = document.getElementById("pm-mic-btn");
  const promptScaffold = document.getElementById("playground-prompts-scaffold");
  const feedbackReport = document.getElementById("pm-feedback-report");

  if (feedbackReport) feedbackReport.style.display = "none";

  // Toggle active styling
  if (micBtn) {
    micBtn.innerHTML = "⚡";
    micBtn.style.animation = "pulse-green-glow 0.8s infinite";
  }

  if (responseText) {
    responseText.innerHTML =
      getLanguage() === "en"
        ? '<em>"Analyzing vocal stream, measuring syntactic placement..."</em>'
        : '<em>"Vektoranalyse der Tonspur... bewerte syntaktische Komplexität..."</em>';
  }

  // Deactivate other inputs
  if (promptScaffold) {
    const btns = promptScaffold.querySelectorAll(".prompt-choice");
    btns.forEach((b) => {
      b.style.pointerEvents = "none";
      b.style.opacity = "0.5";
    });
  }

  // Run bouncing volume visualizer
  startAmplitudeSimulation();

  setTimeout(() => {
    isPlaygroundTalking = false;
    stopAmplitudeSimulation();

    if (micBtn) {
      micBtn.innerHTML = "🎙️";
      micBtn.style.animation = "none";
    }

    if (responseText) {
      responseText.innerHTML = `"${prompt.response}"`;
    }

    // Populate feedback parameters
    const diagnosticsBody = document.getElementById("pm-diagnostics-body");
    const flu = document.getElementById("pm-stats-fluency");
    const acc = document.getElementById("pm-stats-accent");
    const syn = document.getElementById("pm-stats-syntax");

    if (diagnosticsBody) diagnosticsBody.innerHTML = prompt.diagnostics;
    if (flu) flu.innerText = prompt.fluency;
    if (acc) acc.innerText = prompt.accent;
    if (syn) syn.innerText = prompt.syntax;

    if (feedbackReport) {
      feedbackReport.style.display = "block";
      feedbackReport.classList.remove("fade-in-switch");
      void feedbackReport.offsetWidth; // Force Reflow
      feedbackReport.classList.add("fade-in-switch");
    }

    // Restore interactive prompts
    if (promptScaffold) {
      const btns = promptScaffold.querySelectorAll(".prompt-choice");
      btns.forEach((b) => {
        b.style.pointerEvents = "auto";
        b.style.opacity = "1";
      });
    }
  }, 1900);
}

/**
 * Global App Initialization
 */
export function initAnimations() {
  // Setup wave canvas drawing elements
  canvas = document.getElementById("hero-wave-canvas");
  if (canvas) {
    ctx = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawWaves();
  }

  // Establish Corporate/Social tab selectors in classroom view
  const tabPro = document.getElementById("playground-tab-pro");
  const tabCasual = document.getElementById("playground-tab-casual");

  if (tabPro && tabCasual) {
    tabPro.addEventListener("click", () => {
      if (activeTab === "pro") return;
      activeTab = "pro";
      tabPro.classList.add("active");
      tabCasual.classList.remove("active");

      // Auto switch default coach when changing tabs to prevent state overlap
      selectedCoachId = "sarah";
      renderPlaygroundWorkspace();
    });

    tabCasual.addEventListener("click", () => {
      if (activeTab === "casual") return;
      activeTab = "casual";
      tabCasual.classList.add("active");
      tabPro.classList.remove("active");

      selectedCoachId = "hannes";
      renderPlaygroundWorkspace();
    });
  }

  // Make the mic button respond organically by simulating a prompt submission
  const pmMicBtn = document.getElementById("pm-mic-btn");
  if (pmMicBtn) {
    pmMicBtn.addEventListener("click", () => {
      if (isPlaygroundTalking) return;

      // Run speaking on the first available prompt option in current list
      const firstPromptBtn = document.querySelector(
        "#playground-prompts-scaffold .prompt-choice",
      );
      if (firstPromptBtn) {
        firstPromptBtn.click();
      }
    });
  }
}
