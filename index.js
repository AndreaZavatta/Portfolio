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
    addSmoothScrollTransition();
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