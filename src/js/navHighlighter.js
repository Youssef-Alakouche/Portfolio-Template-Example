function navHighlighter(){
    const sections = document.querySelectorAll("section[id]");
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (window.innerHeight > 710) ? current.offsetTop - 300 : current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        //console.log(sectionTop)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
        }
        else
        {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}

export default navHighlighter;