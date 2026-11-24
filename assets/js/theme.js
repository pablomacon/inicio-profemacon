(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "profemacon-theme";
  let preference;

  try {
    preference = localStorage.getItem(storageKey);
  } catch {
    // The selector still works when storage is blocked.
  }

  function applyTheme() {
    const dark = preference === "dark" ||
      (preference !== "light" && systemTheme.matches);

    root.dataset.theme = dark ? "dark" : "light";
    document.getElementById("theme-toggle")?.setAttribute("aria-pressed", String(dark));
  }

  applyTheme();
  systemTheme.addEventListener("change", applyTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("click", () => {
      preference = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selection for the current visit.
      }
      applyTheme();
    });

    applyTheme();
    toggle.hidden = false;
  });
})();
