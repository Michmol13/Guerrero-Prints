const navbarLinks = document.querySelectorAll(".nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const botonAbrirModal = document.getElementById("abrirModal");
const modalElement = document.getElementById("miModal");
const carruselElement = document.getElementById("miCarrusel");

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    
    if (botonAbrirModal && modalElement) {
        var modal = new bootstrap.Modal(modalElement);
        botonAbrirModal.addEventListener("click", function() {
            modal.show();
        });
    }

    if (carruselElement) {
        var carrusel = new bootstrap.Carousel(carruselElement, {
            interval: 3000,  // Cambia cada 3 segundos
            wrap: true       // Vuelve a la primera imagen al final
        });
    }

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth < 992) { 
                navbarToggler.click();
            }
        });
    });

});
