let contactBtn = document.querySelector('.block1 .contact button');
let viewProject = document.querySelector('.experience .view-projects');
let menuIcon = document.querySelectorAll('.menu-bar > li');
let progress = document.querySelectorAll('.progress li span');
let sections = document.querySelectorAll('.app-page section');
let overlays = document.querySelectorAll('.wrap-overlay .overlay');
let overlayIcon = document.querySelectorAll('.overlay > i');

function menuClick() {
    menuIcon.forEach((el,idx)=> {
        menuIcon[idx].addEventListener('click', ()=> {
            activate(idx);
            slideShow(idx)
        });
    });
    activate(0);
    slideShow(0);
};

function slideShow(idx) {
    sections.forEach((j,k)=> {
        sections[k].style.left = "";
        overlays[k].style.right = "";
        sections[k].classList.remove('effect')
        setTimeout(()=> {
            sections[k].style.transform = "scale(.5)";
        },1000)
    });
    overlays[idx].style.right = "0";
    setTimeout(()=> {
        overlayIcon[idx].style.animation = "bounce 300ms ease-in-out infinite";
    },500);
    setTimeout(()=> {
        sections[idx].style.left = "0";
        // sections[idx].classList.add('effect')
        overlays[idx].style.right = "-100%";
    },2000);

    setTimeout(()=> {
        sections[idx].style.transform = "scale(1)"
    },2500);

    setTimeout(()=> {
        sections[idx].classList.add('effect')
    },3500);
}



contactBtn.addEventListener('click', ()=> {
    activate(3);
    slideShow(3);
});

viewProject.addEventListener('click', ()=> {
    activate(2);
    slideShow(2);
});

function activate(idx) {
    menuIcon.forEach((e,i)=> {
        menuIcon[i].style.color = "";
        menuIcon[i].style.animation = "";
    });
    menuIcon[idx].style.color = "#3fda7a";
    menuIcon[idx].style.animation = "300ms headShake";
};

window.onload = function() {
    menuClick();
};