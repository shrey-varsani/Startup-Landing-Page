/* PIVOT TARGET TRACKS TAB MODULE */
export function initPivotTracks() {
  const tabButtons = document.querySelectorAll(".pivot-tab-btn");
  const panels = document.querySelectorAll(".pivot-panel-box");

  if (!tabButtons.length || !panels.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pivotValue = btn.getAttribute("data-pivot");
      if (!pivotValue) return;

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach((panel) => {
        if (panel.id === `pivot-panel-${pivotValue}`) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });
}
