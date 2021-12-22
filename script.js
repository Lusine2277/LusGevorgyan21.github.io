// menu-btn-click-function
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = ()=> {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}

// theme-click-function
let themeToogler = document.querySelector('#theme-toogler');
themeToogler.onclick = ()=>{
    themeToogler.classList.toggle('fa-sun');
    if(themeToogler.classList.contains('fa-sun')){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

var typed = new Typed( ".typing", {
    strings: ["...", "Lusine", "Enginer", "Accountant", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})