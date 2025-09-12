document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".nav");

    burger.onclick = function() {
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    };
});