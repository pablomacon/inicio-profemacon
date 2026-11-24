(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "profemacon-theme";
  let preference;
  try { preference = localStorage.getItem(storageKey); } catch { /* Storage is optional. */ }

  function applyTheme() {
    const theme = preference === "light" || preference === "dark"
      ? preference : (systemTheme.matches ? "dark" : "light");
    root.dataset.theme = theme;
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
    });
  }

  applyTheme();
  systemTheme.addEventListener("change", applyTheme);
  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector(".theme-selector");
    selector.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theme-choice]");
      if (!button) return;
      preference = button.dataset.themeChoice;
      try { localStorage.setItem(storageKey, preference); } catch { /* Keep it for this visit. */ }
      applyTheme();
    });
    applyTheme();
    selector.hidden = false;
  });
})();
