/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const closeButton =
    document.getElementById("closeButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});


closeButton.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


/* CLOSE MENU AFTER CLICKING LINK */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



/* =====================================================
   EXPLORE BUTTON
===================================================== */

const exploreButton =
    document.getElementById("exploreButton");


exploreButton.addEventListener("click", () => {

    document
        .getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =====================================================
   VIEW ALL DESTINATIONS
===================================================== */

const viewAllButton =
    document.getElementById("viewAll");

const hiddenCards =
    document.querySelectorAll(".hidden-card");

let expanded = false;


viewAllButton.addEventListener("click", () => {

    expanded = !expanded;


    hiddenCards.forEach(card => {

        card.style.display =
            expanded ? "block" : "";

    });


    if (expanded) {

        viewAllButton.innerHTML =
            'SHOW LESS <span>↑</span>';

    } else {

        viewAllButton.innerHTML =
            'VIEW ALL <span>→</span>';

    }

});



/* =====================================================
   PLAN MODAL
===================================================== */

const modal =
    document.getElementById("modal");

const letsGo =
    document.getElementById("letsGo");

const modalClose =
    document.getElementById("modalClose");


letsGo.addEventListener("click", () => {

    modal.classList.add("active");

});


modalClose.addEventListener("click", () => {

    modal.classList.remove("active");

});



/* CLOSE MODAL OUTSIDE */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

        modal.classList.remove("active");

    }

});