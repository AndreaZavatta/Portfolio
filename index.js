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
}