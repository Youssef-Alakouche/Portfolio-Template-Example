
function themeHandler(){

    const bg1 = document.querySelector(".bg-1");
    const bg2 = document.querySelector(".bg-2");
    const bg3 = document.querySelector(".bg-3");
    var root = document.querySelector(":root");

    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;
    
    //change background color
    const changeBG = () => {
        root.style.setProperty("--light-color-lightness", lightColorLightness);
        root.style.setProperty("--white-color-lightness", whiteColorLightness);
        root.style.setProperty("--dark-color-lightness", darkColorLightness);
    }
    
    bg1.addEventListener("click", () => {
     
        //add active class
        bg1.classList.add("active");
        // remove active class from the others
        bg2.classList.remove("active");
        bg3.classList.remove("active");
        
        //remove customized changes from local storage
        window.location.reload();
    })
    
    bg2.addEventListener("click", () => {
        darkColorLightness = "95%";
        whiteColorLightness = "20%";
        lightColorLightness = "15%";
    
        //add active class
        bg2.classList.add("active");
        // remove active class from the others
        bg1.classList.remove("active");
        bg3.classList.remove("active");
        changeBG();
    })
    
    bg3.addEventListener("click", () => {
        darkColorLightness = "95%";
        whiteColorLightness = "10%";
        lightColorLightness = "0%";
    
        //add active class
        bg3.classList.add("active");
        // remove active class from the others
        bg1.classList.remove("active");
        bg2.classList.remove("active");
        changeBG();
    })

}    

export default themeHandler;