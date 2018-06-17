let karty = document.getElementsByClassName('karta');
let linky = document.getElementsByClassName('link');
let navItems = document.getElementsByClassName('nav-item');
let navLink = document.getElementsByClassName('nav-link');
let navItemsHis = document.getElementsByClassName('nav-item-his');
let navLinkHis = document.getElementsByClassName('link-his');
let ham = document.getElementsByClassName('hamburger')[0];
let nav =document.getElementsByClassName('navigation')[0];


window.addEventListener('resize', function () {
        if(window.innerWidth >= 900) {
           nav.style.display = "flex";
        }

        else {
            if(ham.classList == 'hamburger change') 
                {ham.classList.toggle('change'); nav.style.display = "none"; }
            else {nav.style.display = "none"; }
    }

});



for (let i = 0; i<karty.length;i++) {
let karta = karty[i];
let link = linky[i];
karta.addEventListener('click', function(){

	link.click()
});

}

for (let i = 0; i<navItems.length; i++) {
    let navItem = navItems[i];
let link = navLink[i];
navItem.addEventListener('click', function(){

    link.click()
});

}

for (let i = 0; i<navItemsHis.length; i++) {
    let navItemHis = navItemsHis[i];
let linkHis = navLinkHis[i];
navItemHis.addEventListener('click', function(){

    linkHis.click()
});

}




ham.addEventListener('click', hamburger);

function hamburger() {
    ham.classList.toggle("change");
    let y = document.getElementById('navigation');

    if (y.style.display === "flex") {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }

};


/*
* SLIDESHOW
*/

let slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {


    let i;
    let x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "flex"; 
}


