let karty = document.getElementsByClassName('karta');
let linky = document.getElementsByClassName('link');

for (let i = 0; i<karty.length;i++) {
let karta = karty[i];
let link = linky[i];
karta.addEventListener('click', function(){

	link.click()
});

}


/*let karta1 = document.getElementById("karta1");
let link1 = document.getElementById("z1");


	karta1.addEventListener('click', function(){});
	*/



function hamburger(x) {
    x.classList.toggle("change");
    let y = document.getElementById('navigation');
    if (y.style.display === "flex") {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }



};
