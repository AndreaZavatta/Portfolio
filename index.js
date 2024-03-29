let mode = 0
let isClick = false

window.onload = function () {
    addEventListener("resize", (event) => {
        if(window.matchMedia("(min-width: 768px)").matches) {
            document.querySelector(".categories").classList.add("is-active")
            document.querySelectorAll(".category").forEach(function (el) {
                el.style.textAlign = "center"
            })
        }else{
            document.querySelector(".categories").classList.remove("is-active")
            document.querySelectorAll(".category").forEach(function (el) {
                el.style.textAlign = "left"
            })
        }
    });
    window.dispatchEvent(new Event('resize'));
    const modButton = document.querySelector(".mod")
    toggleActiveMenu()
    modButton.addEventListener("click", () => mouseclickEvent())
    modButton.addEventListener("mouseover", () => mouseoverEvent())
    modButton.addEventListener("mouseout", () => mouseoutEvent())
    addSmoothScrollTransition()
    document.querySelector(".chatbot").addEventListener("click", function (){
        document.querySelector(".chatbot").classList.toggle("is-active")
        document.querySelector(".chatbot-program").classList.toggle("is-active")
    });
    document.querySelector(".close").addEventListener("click", function (){
        document.querySelector(".chatbot").classList.toggle("is-active")
        document.querySelector(".chatbot-program").classList.toggle("is-active")
    })


}



function mouseclickEvent() {
    isClick = true
}
function mouseoverEvent() {
    changeMode()
}
function mouseoutEvent() {
    if (!isClick) changeMode()
    isClick = false
}

function changeMode() {
    if (mode == 0) {
        // light mode
        document.querySelectorAll(".flex-cards img").forEach(function (el) {
            el.style.filter = "invert(90%)"
        })
        document.querySelector("iframe").style.filter = "none"
        document.querySelector(".mod img").style.filter = "invert(90%)"
        document.querySelector(".close").style.filter = "invert(70%)"
        document.documentElement.style.setProperty("--back-color", "lightgray")
        document.documentElement.style.setProperty("--nav-color", "white")
        document.documentElement.style.setProperty("--text-color", "black")
        document.documentElement.style.setProperty("--hamburger-color", "black")
        document
            .querySelectorAll(".skills .card-body-item-body img")
            .forEach(function (el) {
                el.style.filter = "none"
            })
        mode = 1
    } else {
        // dark mode
        document.querySelector(".mod img").style.filter = "none"
        document.querySelectorAll(".flex-cards img").forEach(function (el) {
            el.style.filter = "none"
        })
        document.querySelector("iframe").style.filter = "invert(90%)"
        document.documentElement.style.setProperty("--back-color", "#0A0C10")
        document.documentElement.style.setProperty("--nav-color", "#272B33")
        document.documentElement.style.setProperty("--text-color", "white")
        document.documentElement.style.setProperty("--hamburger-color", "white")
        document
            .querySelectorAll(".skills .card-body-item-body img")
            .forEach(function (el) {
                el.style.filter = "invert(90%)"
            })
        mode = 0
    }
}

function addSmoothScrollTransition() {
    const links = document.querySelectorAll('a[href^="#"]')
    for (let i=0; i<links.length; i++) {
        links[i].addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            target.scrollIntoView({
                behavior: "smooth",
            })
        })
    }
}

function toggleActiveMenu() {
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelector(".hamburger").classList.toggle("is-active")
        document.querySelector(".categories").classList.toggle("is-active")
    })
    document.querySelectorAll(".categories a").forEach(function (el) {
        el.addEventListener("click", function () {
            if(window.matchMedia("(max-width: 768px)").matches){
                document.querySelector(".hamburger").classList.toggle("is-active")
                document.querySelector(".categories").classList.toggle("is-active")
            }
        })
    })
}
