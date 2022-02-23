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

let btnNavs = document.querySelectorAll('.icon')
let nav = document.querySelector('.decepir')
let navChild = nav.children
let navfond = document.querySelector('.navfond')

btnNavs.forEach(btnNav => {
    btnNav.addEventListener('click',()=>{
        console.log("efef");
        nav.classList.toggle('nav')
        navfond.classList.toggle('nav')
    })    
});
console.log(navChild);
for (let i = 0; i < navChild.length; i++) {
    const element = navChild[i];
    element.addEventListener('click',()=>{
        nav.classList.remove('nav')
        navfond.classList.remove('nav')
    })
}
navfond.addEventListener('click',()=>{
    nav.classList.toggle('nav')
    navfond.classList.toggle('nav')
})