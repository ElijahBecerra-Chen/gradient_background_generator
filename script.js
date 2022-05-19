var css = document.querySelector("h3");
var color_left = document.querySelector(".color_left");
var color_right = document.querySelector(".color_right");
var body_background = document.getElementById("background_gradient");


const background_generator = () => {
    body_background.style.background =
    "linear-gradient(to right, " +
    color_left.value +
    "," +
    color_right.value +
    ")";

    css.textContent = body_background.style.background + ";"
}

color_left.addEventListener("input", background_generator);
color_right.addEventListener("input", background_generator);
