(function(){
    "use strict"
    const hamburger = document.querySelector("#hamburger")

    hamburger.addEventListener("click", () => {
        const state = hamburger.ariaExpanded
        if(state === "true"){
            hamburger.ariaExpanded = false
        }
        else{
            hamburger.ariaExpanded = true
        }
    })

    window.addEventListener("scroll", () => {
        let y = Math.round(window.pageYOffset)
        if(y > 0){
            hamburger.ariaExpanded = false
        }
    })
})()