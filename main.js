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

    //GO TO PAGES
    const pageAccel = document.querySelector("#pageAccel")
    const pageQR = document.querySelector("#pageQR")
    const pagePot = document.querySelector("#pagePot")
    const pageNokia = document.querySelector("#pageNokia")
    const pageRFID = document.querySelector("#pageRFID")

    pageAccel.addEventListener("click", () => {
        window.location = "./pages/accelerometer/"
    })

    pageQR.addEventListener("click", () => {
        window.location = "./pages/qr/"
    })

    pagePot.addEventListener("click", () => {
        window.location = "./pages/potentiometer/"
    })

    pageNokia.addEventListener("click", () => {
        window.location = "./pages/nokia/"
    })

    pageRFID.addEventListener("click", () => {
        window.location = "./pages/rfid/"
    })
})()