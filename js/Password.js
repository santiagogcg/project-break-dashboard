
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
const NoCaracteres = document.getElementById("boxCaracteres").value
const contraseñaGenerada = document.getElementById("contraseñaGenerada")
const prueba = document.getElementById("prueba")






export function generarContraseña(NoCarac) {


    for (let i = 0; i < NoCarac / 4; i++) {
        lowLetter3[i] = lowLetter[Math.floor(Math.random() * lowLetter.length)];


        upLetter3[i] = upLetter[Math.floor(Math.random() * upLetter.length)];

        numbers3[i] = numbers[Math.floor(Math.random() * numbers.length)];

        symbols3[i] = symbols[Math.floor(Math.random() * symbols.length)];

    }

    let passwordJoined = upLetter3.concat(lowLetter3, symbols3, numbers3);

    let passwordAcot = passwordJoined.slice(0, NoCarac);



    let password = passwordAcot.join("");


    contraseñaGenerada.innerHTML = password


}


export function imprimirContraseña() {

    botonPassword.addEventListener("click", function () {

        if (NoCaracteres >= 12 && NoCaracteres <= 50) {
            generarContraseña(NoCaracteres)
        } else {
            contraseñaGenerada.innerHTML = "Escriba caracteres entre 12 y 50"
        }

    });
}


imprimirContraseña()
console.log(lowLetter3.length)