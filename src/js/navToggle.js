export default function navToggle(){
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    /*=============== SHOW MENU ===============*/
    // validation if constant exixt
    if(navToggle){
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        })
    }
    /*============== MENU HIDDEN ===============*/
    //validation if constant exist
    if(navClose){
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        })
    }
}