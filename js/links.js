
export function getlocalStorage(links, linksJSON, lista) {

    links.forEach((link) => {

        const li = document.createElement('li');

        lista.appendChild(li);
        li.innerText = link;



    })
}


export async function generarLinkDOM(links, title, lista, linksJSON) {

    const reload = await window.location.reload()

    const li = document.createElement("li");


    links.push(title);

    linksJSON = JSON.stringify(links)

    localStorage.setItem('links', linksJSON)

    lista.appendChild(li)
    li.innerHTML = title



}








