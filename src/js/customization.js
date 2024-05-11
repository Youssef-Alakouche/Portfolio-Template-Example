export default function customization(){
    const theme = document.getElementById("theme-button");
    const themeModal = document.querySelector(".customize-theme");
    const fontSizes = document.querySelectorAll(".choose-size span");
    const colorPolette = document.querySelectorAll(".choose-color span");
    var root = document.querySelector(":root");

    //open modal
    const openThemeModal = () => {
        themeModal.style.display = "grid";
    }
    const closeThemeModal = (e) => {
        if(e.target.classList.contains("customize-theme"))
        {
            themeModal.style.display = "none";
        }
    }
    themeModal.addEventListener("click", closeThemeModal);
    theme.addEventListener("click", openThemeModal);

    
    /*===== FONTS =====*/
    fontCustomize(fontSizes);

    /*===== PRIMARY COLORS =====*/
    primaryColorCustomize(colorPolette, root);

}

function fontCustomize(fontSizes){
    
    //remove active class fron spans or font size selectors
    const removeSizeSelector = () => {
        fontSizes.forEach(size => {
            size.classList.remove("active");
        })
    }
    fontSizes.forEach(size => {
        size.addEventListener("click", () => {
            removeSizeSelector();
            let fontSize;
            size.classList.toggle("active");
            if(size.classList.contains("font-size-1"))
            {
                fontSize = "12px";
            }
            else if(size.classList.contains("font-size-2"))
            {
                fontSize = "14px";
            }
            else if(size.classList.contains("font-size-3"))
            {
                fontSize = "16px";
            }
            else if(size.classList.contains("font-size-4"))
            {
                fontSize = "18px";
            }
            //change font size of the root html element
            document.querySelector("html").style.fontSize = fontSize;
        })
    })
}

function primaryColorCustomize(colorPolette, root){
    //remove active class from colors
    const changeActiveColorClass = () => {
        colorPolette.forEach(colorPicker => {
            colorPicker.classList.remove("active");
        })
    }

    colorPolette.forEach(color => {
        color.addEventListener("click", ()=>{
            changeActiveColorClass();
            let primaryHue;

            if(color.classList.contains("color-1"))
            {
                primaryHue = 252
            }
            else  if(color.classList.contains("color-2"))
            {
                primaryHue = 52
            }
            else  if(color.classList.contains("color-3"))
            {
                primaryHue = 352
            }
            else  if(color.classList.contains("color-4"))
            {
                primaryHue = 152
            }
            else  if(color.classList.contains("color-5"))
            {
                primaryHue = 202
            }
            color.classList.toggle("active");
            root.style.setProperty("--primary-color-hue", primaryHue);
        })
    })
}