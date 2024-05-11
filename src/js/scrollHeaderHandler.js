
export default function scrollHeaderHandler(){
    let scrollHeader = function(){
        const header = document.getElementById("header");
        //add scroll-header to header if the scroll greater then 80
        if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
    }
    
    window.addEventListener("scroll", scrollHeader);
}