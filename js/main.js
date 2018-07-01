let karty = document.getElementsByClassName('klik');
let linky = document.getElementsByClassName('link');

let navItems = document.getElementsByClassName('nav-item');
let navLink = document.getElementsByClassName('nav-link');
let navItemsHis = document.getElementsByClassName('nav-item-his');
let navLinkHis = document.getElementsByClassName('link-his');
let navHis = document.getElementById('navh');

let ham = document.getElementsByClassName('hamburger')[0];
let nav =document.getElementsByClassName('navigation')[0];
let head = document.getElementsByClassName('header')[0];

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
    




//pri zmene velikosti se resetuje sticky menu (u navigace i historie)
window.addEventListener('resize', resize) 
function resize () {
        if(window.innerWidth >= 900) {
           nav.style.display = 'flex';
           if (head.classList == 'box header sticky') {
           head.classList.remove('sticky');
           nav.classList.remove('sticky');}
        }

        else {
                nav.style.display = 'none'; 
                ham.classList.remove('change');
                if (navHis.length != 0) {
                navHis.classList.remove('sticky-his');}
    }

}


// sticky menu - pri scroll zustava videtelná navigace
window.addEventListener('scroll', sticky);

    function sticky (){
    let sticky = head.offsetTop;
    let height = head.offsetHeight;
// Pridava/odebira sticky class pro header a navigaci pri dosazeni pozice (sirka <900)
 if(window.innerWidth < 900) {
    if (window.pageYOffset >= sticky+1) {
    head.classList.add('sticky');
    nav.classList.add('sticky');
    nav.style.top = height+"px";
  } else {
    head.classList.remove('sticky');
    nav.classList.remove('sticky');
    nav.style.top = "";
  }
 }

//Pridava a odebira sticky class v bocni navigaci u historie
if(window.innerWidth >= 900) {
	let stickyHis= navHis.offsetTop;
    if (window.pageYOffset >= stickyHis) {
    navHis.classList.add('sticky-his');
  } else {
    navHis.classList.remove('sticky-his');
  }
}


}


//prirazeni linku k mape a kartam
for (let i = 0; i<karty.length;i++) {
let karta = karty[i];
let link = linky[i];
karta.addEventListener('click', function(){

	link.click()
});

}

//linky u tlacitek v navigaci
for (let i = 0; i<navItems.length; i++) {
    let navItem = navItems[i];
let link = navLink[i];
navItem.addEventListener('click', function(){

    link.click()
});

}

//linky u tlacitek v historii - bocni navigace
for (let i = 0; i<navItemsHis.length; i++) {
    let navItemHis = navItemsHis[i];
let linkHis = navLinkHis[i];
navItemHis.addEventListener('click', function(){

    linkHis.click()
});

}



// hamburger menu - pri kliknuti se rozbali/sbali
ham.addEventListener('click', hamburger);

function hamburger() {
    ham.classList.toggle('change');
    let y = document.getElementById('navigation');

    if (y.style.display === 'flex') {
        y.style.display = 'none';
    } else {
        y.style.display = 'flex';
    }

};


//SLIDESHOW - posouvani obrazku u zastavenich

let slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {

    let x = document.getElementsByClassName('slide');
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none'; 
    }
    x[slideIndex-1].style.display = 'flex'; 
let height = x[slideIndex-1].offsetHeight;
    plus.style.height = height+"px";
    minus.style.height = height+"px";
}

//Eventlisterners pro tlačítka na slideshow
plus.addEventListener('click', function() {plusDivs(1)});
minus.addEventListener('click', function() {plusDivs(-1)});

//zmeni vysku tlacitek pri zmene velikosti obrazku
function changeHeight () {
    let height = document.getElementsByClassName('slideshow')[0].offsetHeight;
    plus.style.height = height+"px";
    minus.style.height = height+"px";
    let img = document.getElementsByClassName('foto-his');
    if (img.length != 0) {
        height = img[0].offsetHeight;
        plus.style.height = height+"px";
    minus.style.height = height+"px";
    }
}
window.addEventListener('load', changeHeight);
window.addEventListener('resize', changeHeight);