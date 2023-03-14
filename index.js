let mode = 0;
window.onload = function() {
    document.querySelector(".hamburger").addEventListener("click", function() {
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector(".categories").classList.toggle("is-active");
    });
    document.querySelectorAll(".categories a").forEach(function(el) {
        el.addEventListener("click", function() {
            document.querySelector(".hamburger").classList.toggle("is-active");
            document.querySelector(".categories").classList.toggle("is-active");
        });
    });

    document.querySelector(".mod").addEventListener("click", () => changeMode());
    document.querySelector(".mod").addEventListener("mouseover", () => changeMode());
    document.querySelector(".mod").addEventListener("mouseout", () => changeMode());

    addSmoothScrollTransition();
}

function changeMode(){
    if(mode == 0){
        // light mode
        document.querySelectorAll(".flex-cards img").forEach(function(el) {
            el.style.filter = "invert(90%)";
        });
        document.querySelector("iframe").style.filter = "none";
        document.querySelector(".mod img").style.filter = "invert(90%)";
        document.documentElement.style.setProperty("--back-color", "lightgray");
        document.documentElement.style.setProperty("--nav-color", "white");
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--hamburger-color", "black");
        mode = 1;
    }else{
        // dark mode
        document.querySelector(".mod img").style.filter = "none";
        document.querySelectorAll(".flex-cards img").forEach(function(el) {
            el.style.filter = "none";
        });
        document.querySelector("iframe").style.filter = "invert(90%)";
        document.documentElement.style.setProperty("--back-color", "#0A0C10");
        document.documentElement.style.setProperty("--nav-color", "#272B33");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--hamburger-color", "white");
        mode = 0;
    }
}

function addSmoothScrollTransition(){
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}