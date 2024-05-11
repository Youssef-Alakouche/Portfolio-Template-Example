
export default function themeFilter(){
    const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;
 
      for(let i = 0; i< totalFilterBtn; i++){
        filterBtns[i].addEventListener("click", function(){
            //those thow statments should be in this range
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
           for(let k=0; k < totalPortfolioItem; k++){
                if(filterValue == portfolioItems[k].getAttribute("data-category"))
                {
                    portfolioItems[k].classList.remove("hide")
                    portfolioItems[k].classList.add("show");
                }else
                {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show")
                }
                if(filterValue == "all"){
                      portfolioItems[k].classList.remove("hide")
                     portfolioItems[k].classList.add("show");
                }
           }
        })
      }
}