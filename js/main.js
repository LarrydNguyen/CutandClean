// enable hidden nav bar
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if (lastScrollY < window.scrollY){
        nav.classList.add("nav--hidden")
    } else {
        nav.classList.remove("nav--hidden")
    }
    lastScrollY = window.scrollY;
});
//  enable mobile click nav bar

const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navbaritem = document.getElementsByClassName('navlist')[0]

togglebtn.addEventListener('click',() => {
    navbaritem.classList.toggle('active')
})
