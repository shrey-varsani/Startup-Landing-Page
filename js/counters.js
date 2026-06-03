/* COUNTERS & SCROLL REVEAL MODULE */

export function animateValue(obj, start, end, duration, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = progress * (end - start) + start;

    if (end % 1 !== 0) {
      obj.innerHTML = value.toFixed(1) + suffix;
    } else {
      obj.innerHTML = Math.floor(value).toLocaleString("en-US") + suffix;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

export function initScrollRevealAndCounters() {
  const animatedNumbers = document.querySelectorAll(".stat-number");
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");

          const stats = entry.target.querySelectorAll(".stat-number");
          stats.forEach((statEl) => {
            if (statEl.getAttribute("data-animated") !== "true") {
              statEl.setAttribute("data-animated", "true");
              const targetVal = parseFloat(
                statEl.getAttribute("data-target") || "0",
              );
              const suffixVal = statEl.getAttribute("data-suffix") || "";
              animateValue(statEl, 0, targetVal, 1500, suffixVal);
            }
          });

          if (entry.target.classList.contains("stat-number")) {
            if (entry.target.getAttribute("data-animated") !== "true") {
              entry.target.setAttribute("data-animated", "true");
              const targetVal = parseFloat(
                entry.target.getAttribute("data-target") || "0",
              );
              const suffixVal = entry.target.getAttribute("data-suffix") || "";
              animateValue(entry.target, 0, targetVal, 1500, suffixVal);
            }
          }
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
  animatedNumbers.forEach((el) => observer.observe(el));
}
