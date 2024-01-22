/*Navbar que cambia al hacer scroll*/
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var headerHeight = document.querySelector("header").offsetHeight;

    var maxHeight = 10;
    var minHeight = 3;

    navbar.style.padding = "2em";
    navbar.style.maxHeight = "0.5em";

    window.addEventListener("scroll", function() {
        if (window.scrollY >= headerHeight) { /*Cambios cuando se hace scroll hacia abajo y supera la altura de header*/
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.backgroundColor = "rgba(0,0,0,0.7)";
            navbar.style.width = "100%";
            navbar.style.height = Math.max(minHeight, Math.min(maxHeight, maxHeight - window.scrollY + headerHeight)) + "em";
        } else { /*Cambios cuando se hace scroll hacia arriba por la altura del header*/
            navbar.style.position = "static"; 
            navbar.style.backgroundColor = "transparent";
            navbar.style.width = "auto";
            navbar.style.height = "auto";
        }
    });
});

/*Menú hamburguesa*/
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu"); 
    const menuMain = document.querySelector(".menu-main"); 
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");

    abrir.addEventListener("click", () => { 
        menu.classList.toggle("invisible");
        menuMain.classList.toggle("invisible");
    });

    cerrar.addEventListener("click", () => { 
        menu.classList.toggle("invisible"); 
        menuMain.classList.toggle("invisible"); 
    });
});

