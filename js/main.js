let karty = document.getElementsByClassName('klik');
let linky = document.getElementsByClassName('link');
let navItems = document.getElementsByClassName('nav-item');
let navLink = document.getElementsByClassName('nav-link');
let navItemsHis = document.getElementsByClassName('nav-item-his');
let navLinkHis = document.getElementsByClassName('link-his');
let ham = document.getElementsByClassName('hamburger')[0];
let nav =document.getElementsByClassName('navigation')[0];
let head = document.getElementsByClassName('header')[0];


window.addEventListener('resize', function () {
        if(window.innerWidth >= 900) {
           nav.style.display = "flex";
           if (head.classList == 'box header sticky') {
           head.classList.remove("sticky");
           nav.classList.remove("sticky");}
        }

        else {
            if(ham.classList == 'hamburger change') 
                {ham.classList.toggle('change'); nav.style.display = "none"; }
            else {nav.style.display = "none"; }
    }

});


// When the user scrolls the page, execute myFunction 
window.addEventListener('scroll', function (){
    var sticky = head.offsetTop;
    let height = head.offsetHeight;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 if(window.innerWidth < 900) {
    if (window.pageYOffset >= sticky+1) {
    head.classList.add("sticky");
    nav.classList.add("sticky");
    nav.style.top = height+"px";
  } else {
    head.classList.remove("sticky");
    nav.classList.remove("sticky");
    nav.style.top = "";
  }
 }

let navHis = document.getElementById('navh');
if(window.innerWidth >= 900) {
    if (window.pageYOffset >= stickyHis) {
    navHis.classList.add("sticky-his");
  } else {
    navHis.classList.remove("sticky-his");
  }
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

    let x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "flex"; 
}

