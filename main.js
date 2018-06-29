var color1, color2, css, body, btn;

css = document.querySelector("h3");
color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");
body = document.getElementById("gradient");
btn = document.querySelector("button");

function showGradient() {
    setGradient();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomHex() {
    var options = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += options[Math.floor(Math.random() * 16)];
    }

    return color;
}

function setRandomColors() {
    var col1, col2, col3;
    col1 = randomHex();
    col2 = randomHex();

    color1.value = col1;
    color2.value = col2;

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

showGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomColors);