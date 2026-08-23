// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ========================================
// HERO NUMBER INTERACTION
// ========================================

const heroNumbers = document.querySelectorAll(".hero-number");

heroNumbers.forEach(item => {

    item.addEventListener("click", () => {

        heroNumbers.forEach(number => {
            number.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .destination-card, .adventure-content, .mini-card, .guide-left, .guide-right"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// WATCH BUTTON
// ========================================

const watchBtn = document.getElementById("watchBtn");

watchBtn.addEventListener("click", () => {

    alert(
        "Bukidnon Journey\n\n" +
        "Adventure awaits. More travel videos coming soon!"
    );

});


// ========================================
// MINI PLAY BUTTONS
// ========================================

const miniPlayButtons = document.querySelectorAll(".mini-play");

miniPlayButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Travel video coming soon!"
        );

    });

});