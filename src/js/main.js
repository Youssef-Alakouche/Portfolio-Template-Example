import themeHandler from "./themeHandler";
import scrollHeaderHandler from "./scrollHeaderHandler";
import navToggle from "./navToggle";
import navHighlighter from "./navHighlighter";
import themeFilter from "./themeFilter";
import customization from "./customization";
import mobilemenu from "./mobileMenu";



/*=============== SHOW MENU ===============*/
navToggle();

/*=============== REMOVE MENU MOBILE ===============*/
mobilemenu();

/*=============== CHANGE BACKGROUND HEADER ===============*/
scrollHeaderHandler();

/*=============== TESTIMONIAL SWIPER ===============*/
let swiper = new Swiper(".testimonial-wrapper", {
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.addEventListener("scroll", navHighlighter);


/*=============== PORTFOLIO ITEM FILTER ===============*/
themeFilter();

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
customization();

/*===== THEME BACKGROUNDS =====*/
themeHandler();