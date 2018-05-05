function hamburger(x) {
    x.classList.toggle("change");
    let y = document.getElementById('navigation');
    if (y.style.display === "flex") {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }