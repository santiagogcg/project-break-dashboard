
let lowLetter = "abcdefghijklmnopqrstuvwxyz";
let upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()-_=+";

lowLetter = lowLetter.split("");
upLetter = upLetter.split("");
numbers = numbers.split("");
symbols = symbols.split("");

let lowLetter3 = [];
let upLetter3 = [];
let numbers3 = [];
let symbols3 = [];


const botonPassword = document.getElementById("botonPassword");
const prueba = document.getElementById("prueba");

prueba.innerHTML = "ajdhajhd"


for (let i = 0; i < 3; i++) {
    lowLetter3[i] = lowLetter[Math.floor(Math.random() * lowLetter.length)];

    upLetter3[i] = upLetter[Math.floor(Math.random() * upLetter.length)];

    numbers3[i] = numbers[Math.floor(Math.random() * numbers.length)];

    symbols3[i] = symbols[Math.floor(Math.random() * symbols.length)];

}

let passwordJoined = upLetter3.concat(lowLetter3, symbols3, numbers3)


const password = passwordJoined.join("")



botonPassword.addEventListener("click", () => {
    prueba.innerHTML = "prueba click"
})

console.log(prueba)