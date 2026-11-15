
// =============================
// NOIR CAFE - JAVASCRIPT
// =============================

const languageButton = document.querySelector(".language-btn");
const menuButton = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

// LANGUAGE SWITCHER

let currentLanguage = "en";

languageButton.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "fa" : "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "fa" ? "rtl" : "ltr";

    document.body.dir =
        currentLanguage === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-fa]").forEach(element => {
        element.textContent = element.dataset[currentLanguage];
    });

    languageButton.textContent =
        currentLanguage === "en" ? "FA" : "EN";

});

// MOBILE MENU

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("nav-open");
    });

});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section, .hero-content, .menu-card, .gallery-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
