let karty = document.getElementsByClassName('klik');
let linky = document.getElementsByClassName('link');

let navItems = document.getElementsByClassName('nav-item');
let navLink = document.getElementsByClassName('nav-link');
let navItemsHis = document.getElementsByClassName('nav-item-his');
let navLinkHis = document.getElementsByClassName('link-his');
let navHis = document.getElementById('navh');

let ham = document.getElementsByClassName('hamburger')[0];
let nav = document.getElementsByClassName('navigation')[0];
let head = document.getElementsByClassName('header')[0];
let menu = document.getElementById('Menu');

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
    
let newDate = new Date;
let newYear = newDate.getFullYear();
let year = document.getElementById("year");

year.innerHTML = "2018 - "+newYear;


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
	let stickyHis= menu.offsetTop;
    if (window.pageYOffset >= stickyHis) {
    menu.classList.add('sticky-his');
  } else {
    menu.classList.remove('sticky-his');
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
//for (let i = 0; i<navItemsHis.length; i++) {
//    let navItemHis = navItemsHis[i];
//let linkHis = navLinkHis[i];
//navItemHis.addEventListener('click', function(){
//    linkHis.click()
//});
//}



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
	
    let height = document.getElementsByTagName('img')[slideIndex-1].offsetHeight;
    plus.style.height = height+"px";
    minus.style.height = height+"px";


  function changeHeight () {
  plus.style.height = height+"px";
minus.style.height = height+"px";}
}

//Eventlisterners pro tlačítka na slideshow
plus.addEventListener('click', function() {plusDivs(1)});
minus.addEventListener('click', function() {plusDivs(-1)});

//zmeni vysku tlacitek pri zmene velikosti obrazku
function changeHeight () {
 let height = document.getElementsByClassName('slideshow')[0].offsetHeight;
    plus.style.height = height+"px";
    minus.style.height = height+"px";
    let img = document.getElementsByTagName('img');
    if (img.length != 0) {
       height = img[slideIndex-1].offsetHeight;
       plus.style.height = height+"px";
       minus.style.height = height+"px";
    }
 }
window.addEventListener('load', changeHeight);
window.addEventListener('resize', changeHeight);




var B1 = document.getElementById("B1");
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");
var B6 = document.getElementById("B6");
var B7 = document.getElementById("B7");
var B8 = document.getElementById("B8");
var B9 = document.getElementById("B9");

var DIV1 = document.getElementById("DIV1");
var DIV2 = document.getElementById("DIV2");
var DIV3 = document.getElementById("DIV3");
var DIV4 = document.getElementById("DIV4");
var DIV5 = document.getElementById("DIV5");
var DIV6 = document.getElementById("DIV6");
var DIV7 = document.getElementById("DIV7");
var DIV8 = document.getElementById("DIV8");


B1.addEventListener("click", Show.bind(null, DIV1, DIV2, DIV3, DIV4, DIV5, DIV6, DIV7, DIV8));
B2.addEventListener("click", Show.bind(null, DIV2, DIV1, DIV3, DIV4, DIV5, DIV6, DIV7, DIV8));
B3.addEventListener("click", Show.bind(null, DIV3, DIV1, DIV2, DIV4, DIV5, DIV6, DIV7, DIV8));
B4.addEventListener("click", Show.bind(null, DIV4, DIV1, DIV2, DIV3, DIV5, DIV6, DIV7, DIV8));
B5.addEventListener("click", Show.bind(null, DIV5, DIV1, DIV2, DIV3, DIV4, DIV6, DIV7, DIV8));
B6.addEventListener("click", Show.bind(null, DIV6, DIV1, DIV2, DIV3, DIV4, DIV5, DIV7, DIV8));
B7.addEventListener("click", Show.bind(null, DIV7, DIV1, DIV2, DIV3, DIV4, DIV5, DIV6, DIV8));
B8.addEventListener("click", Show.bind(null, DIV8, DIV1, DIV2, DIV3, DIV4, DIV5, DIV6, DIV7));
B9.addEventListener("click", ShowAll);


function Show (A, B, C, D, E, F, G, H) {
   A.style.setProperty("display", "flex");
   B.style.setProperty("display", "none");
   C.style.setProperty("display", "none");
   D.style.setProperty("display", "none");
   E.style.setProperty("display", "none");
   F.style.setProperty("display", "none");
   G.style.setProperty("display", "none");
   H.style.setProperty("display", "none");
                                                      
   B9.innerHTML = "Zobrazit vše";   

}

function ShowAll () {
  if (B9.innerHTML == "Zobrazit vše") {
  DIV1.style.setProperty("display", "flex");
  DIV2.style.setProperty("display", "flex");
  DIV3.style.setProperty("display", "flex");
  DIV4.style.setProperty("display", "flex");
  DIV5.style.setProperty("display", "flex");
  DIV6.style.setProperty("display", "flex");
  DIV7.style.setProperty("display", "flex");
  DIV8.style.setProperty("display", "flex");
    
  B9.innerHTML = "Skrýt vše";}
  
  else {
    DIV1.style.setProperty("display", "none");
    DIV2.style.setProperty("display", "none");
    DIV3.style.setProperty("display", "none");
    DIV4.style.setProperty("display", "none");
    DIV5.style.setProperty("display", "none");
    DIV6.style.setProperty("display", "none");
    DIV7.style.setProperty("display", "none");
    DIV8.style.setProperty("display", "none");

    B9.innerHTML = "Zobrazit vše";
}
}
