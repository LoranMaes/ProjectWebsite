(function(){
    "use strict"

    const toIntro = document.querySelector("#toIntro")
    const toPuzzle = document.querySelector("#toPuzzle")
    const toFlowchart = document.querySelector("#toFlowchart")
    const toEndresult = document.querySelector("#toEndresult")

    const intro = document.querySelector("#intro").getBoundingClientRect().top + window.scrollY
    const puzzles = document.querySelector("#puzzles").getBoundingClientRect().top + window.scrollY
    const flowchart = document.querySelector("#flowchart").getBoundingClientRect().bottom + window.scrollY
    const endresult = document.querySelector("#endresult").getBoundingClientRect().bottom + window.scrollY
    
    toIntro.addEventListener("click", () => {
        window.scrollTo(0, intro)
    })
    toPuzzle.addEventListener("click", () => {
        window.scrollTo(0, puzzles)
    })
    toFlowchart.addEventListener("click", () => {
        window.scrollTo(0, flowchart)
    })
    toEndresult.addEventListener("click", () => {
        window.scrollTo(0, endresult)
    })
})()