

const botonLink = document.getElementById("botonLink")
const title = document.getElementById("title").value
const link = document.getElementById("link").value
const lista = document.getElementById("lista")


const linksJSON = localStorage.getItem("links")
const links = linksJSON ? JSON.parse(linksJSON) : []

// export function getlocalStorage() {

//     links.forEach(link => {
//         const li2 = document.createElement('li');
//         li2.innerText = link;
//         lista.appendChild(li2);
//     });


botonLink.addEventListener("click", generarLinkDOM)


export function generarLinkDOM() {


    const li = document.createElement("li");


    // links.push(title);
    lista.appendChild(li)
    li.innerHTML = title
    links.push(title)




    // const linksJSON = JSON.stringify(links)
    localStorage.setItem('links', links)

}






console.log(title)
generarLinkDOM()


