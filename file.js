//count clicks
let clicks = 0;
let current_colour = 0;

const colours = ["blue", "purple", "green"];

function Button_click() {
    clicks++;
    let count = document.getElementById("clickCount"); // corrected the id here
    let button = document.getElementById("Count");
    button.style.background = colours[current_colour];
    current_colour = (current_colour + 1) % colours.length;
    count.innerText = clicks;
}

document.getElementById("Count").addEventListener("click", Button_click);
