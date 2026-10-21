function setTheme() {
    const theme = (() => {
        if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    })();
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}
setTheme();
document.addEventListener("astro:after-swap", setTheme);

function initToggle() {
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
        });
    }
}
document.addEventListener("astro:page-load", initToggle);
