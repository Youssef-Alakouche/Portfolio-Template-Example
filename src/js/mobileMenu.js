export default function mobilemenu(){
    const navMenu = document.getElementById("nav-menu");
    let navLinks = document.querySelectorAll(".nav-link");
    let linkAction = function(){
        //when we click on each nav link, we remove the show menu class
        navMenu.classList.remove("show-menu")
    }
    navLinks.forEach(link => link.addEventListener("click", linkAction));
}