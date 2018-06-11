let karty = document.getElementsByClassName('karta');
let linky = document.getElementsByClassName('link');

for (let i = 0; i<karty.length;i++) {
let karta = karty[i];
let link = linky[i];
karta.addEventListener('click', function(){

	link.click()
});

}



function hamburger(x) {
    x.classList.toggle("change");
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
