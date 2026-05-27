/* ==========================================================================
   LANGUAGE ACTION MODULE
   ========================================================================== */

// --- High-Fidelity Pre-Populated Coaches Database ---
export const COACHES_DB = [
  {
    id: "sarah",
    name: "Sarah",
    category: "pro",
    avatar: "S",
    accentEn: "British Executive Accent (London)",
    accentDe: "Investoren- & CEO-Ausrichtung, Frankfurt",
    detailsEn:
      "Sarah specializes in VC pitching, recruitment drills, and tech terminology.",
    detailsDe:
      "Unterstützt Sie bei Investoren-Pitches und geschäftlichen Diskursen.",
    greetingEn:
      "Hello! I am Sarah. Let’s prep your startup pitch. Can you introduce your team’s scaling and technology strategy?",
    greetingDe:
      "Guten Tag. Ich bin Sarah. Bereiten wir Ihren Pitch vor. Wie beabsichtigen Sie, das produkt technisch zu skalieren?",
    prompts: {
      en: [
        {
          text: "We plan to scale our core service globally via geodistributed serverless edge compute structures.",
          response:
            "Excellent! That is high-impact delivery. Your phrasing was incredibly sharp.",
          diagnostics:
            'Excellent word selection! Syntax review: <span class="highlight-ok">Excellent</span>. No hesitation words detected. Clear rhythm.',
          fluency: "96%",
          accent: "94%",
          syntax: "95%",
        },
        {
          text: "Uhh, we’ll build some extra servers, I guess. It is probably gonna scale, uhm, somehow okay.",
          response:
            'I see. Let’s clean that up. We need to eliminate redundant filler sounds like "uhh" to sound convincing.',
          diagnostics:
            'Vocabulary warnings: hesitation syllable <span class="highlight-err">"uhh"</span> and <span class="highlight-err">"uhm"</span> detected. Recommended phrasing: Replace "somehow okay" with "satisfactorily". Pause rhythm could be cleaner.',
          fluency: "68%",
          accent: "72%",
          syntax: "64%",
        },
      ],
      de: [
        {
          text: "Wir beabsichtigen, die Kernarchitektur über geo-verteilte Serverless-Edge-Instanzen global zu skalieren.",
          response:
            "Phantastisch! Das ist ein hochgradig professioneller Vortragsstil. Absolut flüssig artikuliert.",
          diagnostics:
            'Satzgliederung: <span class="highlight-ok">Exzellent</span>. Die Betonung ist perfekt ausbalanciert. Keine Füllwörter erkannt.',
          fluency: "95%",
          accent: "92%",
          syntax: "96%",
        },
        {
          text: "Ja also... wir bauen halt noch mehr Server, schätze ich. Wird schon irgendwie skalieren, denke ich.",
          response:
            'Verstanden. Das korrigieren wir sofort. Vermeiden Sie relativierende Floskeln wie "ja also" und "irgendwie".',
          diagnostics:
            'Vermeidbare Ausdrücke: <span class="highlight-err">"ja also"</span> und <span class="highlight-err">"irgendwie"</span> verwendet. Klare Satzverbindungen stärken Ihren Redefluss.',
          fluency: "65%",
          accent: "74%",
          syntax: "68%",
        },
      ],
    },
  },
  {
    id: "elsbeth",
    name: "Dr. Elsbeth",
    category: "pro",
    avatar: "E",
    accentEn: "Formal RP Academic (Cambridge)",
    accentDe: "Medizinisches & Wissenschaftliches Hochdeutsch",
    detailsEn:
      "Dr. Elsbeth trains doctors, medical applicants, and PhD students.",
    detailsDe:
      "Spezialisiert auf ärztliche Fachsprachenprüfungen und universitäre Diskurse.",
    greetingEn:
      "Good day. I am Dr. Elsbeth. Let us practice delivering clinical diagnosis findings. What is the patient state?",
    greetingDe:
      "Einen schönen guten Tag. Dr. Elsbeth hier. Gehen wir den klinischen Befund durch. Wie bewerten Sie Patient Meyer?",
    prompts: {
      en: [
        {
          text: "The patient presented severe neurological indications, requiring an immediate spinal neuro-imaging scan.",
          response:
            "Spot on. Highly technical tone, pronounced with impeccable clarity and accurate syllable stress.",
          diagnostics:
            'Lesson Review: Use of technical term <span class="highlight-ok">neurological</span> was highly precise. Word selection and sentence flow are of professional standards.',
          fluency: "97%",
          accent: "95%",
          syntax: "98%",
        },
        {
          text: "Uhm, the guy felt like pretty sick, so we had to basically take a fast look at his head.",
          response:
            'We should elevate this phrasing. "The guy" is far too informal for clinical networks. Try again.',
          diagnostics:
            'Style warning: replace <span class="highlight-err">"the guy"</span> with "the patient" and <span class="highlight-err">"basically take a fast look"</span> with "perform immediate triage neuroimaging".',
          fluency: "62%",
          accent: "70%",
          syntax: "58%",
        },
      ],
      de: [
        {
          text: "Der Patient zeigt akute neurologische Auffälligkeiten, die eine sofortige Magnetresonanztomographie erfordern.",
          response:
            "Exzellente Diagnoseübermittlung. Fachlich souveräne, ruhige Aussprache ohne unnatürliche Betonungen.",
          diagnostics:
            'Strukturgutachten: Fachausdruck <span class="highlight-ok">neurologische Auffälligkeiten</span> perfekt angewendet. Wortwahl ist präzise.',
          fluency: "96%",
          accent: "94%",
          syntax: "95%",
        },
        {
          text: "Na ja, dem Mann ging es irgendwie ziemlich schlecht, deshalb mussten wir mal schnell in den Kopf gucken.",
          response:
            "Das formulieren wir umgehend akademischer. Umgangssprachliche Phrasen beeinträchtigen die ärztliche Souveränität.",
          diagnostics:
            'Stilgutachten: Mangelnde Präzision. Umgangssprachliche Phrasen wie <span class="highlight-err">"Kopf gucken"</span> und Füllung <span class="highlight-err">"Na ja"</span> beeinträchtigen den Ton.',
          fluency: "58%",
          accent: "64%",
          syntax: "55%",
        },
      ],
    },
  },
  {
    id: "hannes",
    name: "Hannes",
    category: "casual",
    avatar: "H",
    accentEn: "Casual American Peer (Seattle)",
    accentDe: "Natürliches Berliner Networking, Umgangssprache",
    detailsEn:
      "Hannes guides social fluency, networking after parties, and everyday idioms.",
    detailsDe:
      "Stärkt Ihr lockeres Netzwerken, Small Talk beim Feierabendbier und Alltagsdeutsch.",
    greetingEn:
      "Hey there! Hannes here. What did you get up to on the weekend? Any cool trips or just chilling?",
    greetingDe:
      "Hi, freut mich! Was ging bei dir am Wochenende so ab? Warst du unterwegs oder hast du nur entspannt?",
    prompts: {
      en: [
        {
          text: "I spent the entire weekend exploring local coastal trails, then cooked an amazing dinner.",
          response:
            "Awesome! That sounds super vibrant and sounds like natural, effortless colloquial flow.",
          diagnostics:
            'Conversation Review: Flawless relaxed speech patterns. Phrasing: <span class="highlight-ok">highly idiomatic</span>. Sound cadence is energetic.',
          fluency: "94%",
          accent: "92%",
          syntax: "93%",
        },
        {
          text: "I, like... didn’t do much, basically. Just sat around, you know, watching some TV or whatever.",
          response:
            'No worries, but using "like" and "you know" too often makes you sound hesitant. Try spacing things out.',
          diagnostics:
            'Expression warnings: excessive informal loops <span class="highlight-err">"like"</span>, <span class="highlight-err">"you know"</span>. Try to pause naturally instead of vocally wandering.',
          fluency: "73%",
          accent: "80%",
          syntax: "71%",
        },
      ],
      de: [
        {
          text: "Ich war das ganze Wochenende auf Wanderwegen am See unterwegs und habe abends lecker gekocht.",
          response:
            "Klasse gesprochen! Klingt super natürlich, flüssig und nah am echten Alltagsgespräch.",
          diagnostics:
            'Umgangssprachlicher Stil: <span class="highlight-ok">Ausgezeichnet</span>. Rhythmischer Redefluss. Keine unnatürlichen Pausen oder auffällige Grammatikdefizite.',
          fluency: "92%",
          accent: "88%",
          syntax: "93%",
        },
        {
          text: "Ich habe halt... sozusagen nichts gemacht. Nur rumgehangen und wie gesagt, ein bisschen Fernsehen geschaut.",
          response:
            'Entspannt, aber pass auf: zu viele "halts" und "sozusagens" machen dich im Dialog etwas unsicher.',
          diagnostics:
            'Füllwort-Frequenz hoch: <span class="highlight-err">"halt"</span> und <span class="highlight-err">"sozusagen"</span> stören den Rederhythmus. Konjunktionen könnten gestärkt werden.',
          fluency: "71%",
          accent: "82%",
          syntax: "74%",
        },
      ],
    },
  },
];

let currentLang = "en";

let btnLangEn = null;
let btnLangDe = null;
let heroDialogueBubble = null;
let heroFeedbackOverlay = null;

let languageChangeCallbacks = [];

export function getLanguage() {
  return currentLang;
}

export function registerLangCallback(callback) {
  languageChangeCallbacks.push(callback);
}

export function setLanguageMode(lang) {
  currentLang = lang;
  document.body.setAttribute("data-theme", lang);

  // Transition glowing background accents using custom properties
  const ambientGlow = document.getElementById("ambient-glow");
  if (
    ambientGlow &&
    getComputedStyle(document.documentElement).getPropertyValue(
      "--hero-glow-grad",
    )
  ) {
    ambientGlow.style.background = "var(--hero-glow-grad)";
  }

  // Redraw language controls pill placement
  if (btnLangEn && btnLangDe) {
    btnLangEn.classList.toggle("active", lang === "en");
    btnLangDe.classList.toggle("active", lang === "de");
  }

  // Trigger smooth DOM text fade on language-gated elements
  const languageGatedItems = document.querySelectorAll(".lang-en, .lang-de");
  languageGatedItems.forEach((item) => {
    item.classList.remove("fade-in-switch");
    void item.offsetWidth; // Reflow
    item.classList.add("fade-in-switch");
  });

  // Set default welcome message on language swap
  if (heroDialogueBubble) {
    heroDialogueBubble.innerHTML =
      lang === "en"
        ? '"Welcome to your speaking lab! Click on a reply prompt below to test your conversational flow."'
        : '"Willkommen beim Sprech-Workspace! Wählen Sie unten eine Antwort aus, um Ihre Redegewandtheit zu testen."';
    if (heroFeedbackOverlay) heroFeedbackOverlay.style.display = "none";
  }

  // Invoke subscribers
  languageChangeCallbacks.forEach((cb) => cb(lang));
}

export function initLanguageSwitcher() {
  btnLangEn = document.getElementById("btn-lang-en");
  btnLangDe = document.getElementById("btn-lang-de");
  heroDialogueBubble = document.getElementById("hero-dialogue-bubble");
  heroFeedbackOverlay = document.getElementById("hero-feedback-overlay");

  if (btnLangEn) {
    btnLangEn.addEventListener("click", () => setLanguageMode("en"));
  }
  if (btnLangDe) {
    btnLangDe.addEventListener("click", () => setLanguageMode("de"));
  }

  // Double trigger on segmented controller outer frame clicks
  const toggleBox = document.getElementById("lang-toggle-box");
  if (toggleBox) {
    toggleBox.addEventListener("click", (e) => {
      const target = e.target;
      const btn = target.closest("button");
      if (btn) {
        const langValue = btn.getAttribute("data-lang");
        if (langValue) setLanguageMode(langValue);
      }
    });
  }
}
