const loader = document.querySelector(".loader")
const photoProjets = document.querySelectorAll(".photoProjet")
const listTech = document.querySelector(".techlist")
const technos = document.querySelector(".tech")
const root = document.querySelector(":root")

let annimText = document.querySelector('.textPresentation')

if (screen.width < 314) {
    let h1 = document.querySelector(".titre")
    let h2 = document.createElement('h2');
    h2.classList=  "titre"
    h2.innerHTML = h1.innerHTML;
    h1.parentNode.replaceChild(h2, h1)
}
