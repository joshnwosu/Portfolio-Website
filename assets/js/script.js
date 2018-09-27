let navIcon = document.querySelectorAll('.nav ul li');

navIcon.forEach((el, idx)=> {
    navIcon[idx].addEventListener('click', ()=> {
        activate(idx)
    });
});

function activate(idx) {
    for (let i = 0; i < navIcon.length; i++) {
        navIcon[i].style.color = "";
        navIcon[i].style.animation = "";
    }
    navIcon[idx].style.color = " rgb(63, 218, 122)";
    navIcon[idx].style.animation = "300ms headShake"
}
activate(0);