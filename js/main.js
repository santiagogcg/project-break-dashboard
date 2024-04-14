import { clock } from './TimeDate.js';
import { generarContraseña, imprimirContraseña } from './Password.js';
import { generarLinkDOM, getlocalStorage } from './links.js';
// // import { randonImg } from './images';

const botonLink = document.getElementById("botonLink")
const title = document.getElementById("title").value
const link = document.getElementById("link").value
const lista = document.getElementById("lista")

const linksJSON = localStorage.getItem("links")
const links = linksJSON ? JSON.parse(linksJSON) : [];

botonLink.addEventListener("click", () => {
    window.location.reload()
    generarLinkDOM(links, title, lista, linksJSON)
})

getlocalStorage(links, linksJSON, lista)

// localStorage.clear()
console.log(links)
console.log(title)
console.log(links[0])