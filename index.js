window.onload = function() {
    document.querySelector(".hamburger").addEventListener("click", function() {
        document.querySelector(".hamburger").classList.toggle("is-active");
        if(document.querySelector(".hamburger").classList.contains("is-active")) {
            document.querySelector(".categories").classList.add("is-active");
        } else {
            document.querySelector(".categories").classList.remove("is-active");
        }
    });
}