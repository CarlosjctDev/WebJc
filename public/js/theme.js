const elements = Object.freeze({
  dark: document.querySelectorAll(".theme-btn[data-theme='dark']"),
  light: document.querySelectorAll(".theme-btn[data-theme='light']"),
  system: document.querySelectorAll(".theme-btn[data-theme='system']")
});

const root = document.documentElement;

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function updateTheme(theme) {
    root.classList.remove("dark", "light");
    const element  = elements[theme];
    if (element) {
        const activeElements = document.querySelectorAll(".theme-active");
        activeElements.forEach(el => el.classList.remove("theme-active"));
        element.forEach(el => el.classList.add("theme-active"));        
    }

    if (theme === "system") {
        root.classList.add(mediaQuery.matches ? "dark" : "light");
        localStorage.removeItem("theme");
    } else if (theme === "dark" || theme === "light") {
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    } else {
        updateTheme("system");
    }
}

updateTheme(localStorage.getItem("theme") || "system");

mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        updateTheme("system");
    }
});

document.body.addEventListener("click", (e) => {
    const target = e.target;
    if (!target) return;
    const btn = target.closest(".theme-btn");
    if (btn) {
        const theme = btn.getAttribute("data-theme");
        if (theme) updateTheme(theme);
    }
});
window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
        const newTheme = event.newValue || 'system';
        updateTheme(newTheme);
    }
});