const { createElement } = require("react");

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

function selecionado() {
    let select = window.document.getElementById('car_color')
    let div_color = window.document.getElementById('div_color')

    if (select.value === 'cor_determinada') {
        div_color.style.display = 'flex'
        div_color.name = 'color_the_car'
    } else if (select.value === 'cor_nao_determinada') {
        div_color.style.display = 'none'
        div_color.name = 'null'
    } else {
        alert('Deu algum erro ' + select)
    }
}