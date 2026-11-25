// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    '.section, .project-card, .education-card, .contact-section'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// =========================
// NAVIGATION ACTIVE STATE
// =========================

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.forEach(nav => {
            nav.classList.remove('active-link');
        });

        link.classList.add('active-link');

    });

});


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Daholva Ndjahera. Built with curiosity & code.`;
}


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "%cHello, Developer! 👋",
    "color: #8b5cf6; font-size: 20px; font-weight: bold;"
);

console.log(
    "Welcome to Daholva's Portfolio."
);
