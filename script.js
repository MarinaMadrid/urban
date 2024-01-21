/*Navbar que cambia al hacer scroll*/
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var headerHeight = document.querySelector("header").offsetHeight;

    var maxHeight = 10;
    var minHeight = 3;

    window.addEventListener("scroll", function() {
        if (window.scrollY >= headerHeight) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.backgroundColor = "rgba(0,0,0,0.7)";
            navbar.style.width = "100%";
            navbar.style.maxHeight = "0.5em";
            navbar.style.height = Math.max(minHeight, Math.min(maxHeight, maxHeight - window.scrollY + headerHeight)) + "em";
            navbar.style.padding = "1em";
        } else {
            navbar.style.position = "static"; 
            navbar.style.backgroundColor = "transparent";
            navbar.style.width = "auto";
            navbar.style.maxHeight = "none";
            navbar.style.height = "auto";
            navbar.style.padding = "2em";
        }
    });
});

/*Menú hamburguesa*/
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu"); 
    const menu2 = document.querySelector(".menu2"); 
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");

    abrir.addEventListener("click", () => { 
        menu.classList.toggle("invisible");
        menu2.classList.toggle("invisible");
    });

    cerrar.addEventListener("click", () => { 
        menu.classList.toggle("invisible"); 
        menu2.classList.toggle("invisible"); 
    });
});

