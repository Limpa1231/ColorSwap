const button = document.getElementById("swap_button");
const colorNumber = document.querySelector('.colorNumber')
const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
];

button.addEventListener("click", () => {
    let colorRandom = generateColor();
    document.body.style.backgroundColor = colorRandom;
    colorNumber.textContent  = colorRandom;
});

function generateColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColors()];
    }

    return hexColor;
};

function getRandomColors() {
    return (Math.floor(Math.random() * hex.length))
};

