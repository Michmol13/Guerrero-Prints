document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    // Activar el Modal de Bootstrap manualmente
    var botonAbrirModal = document.getElementById("abrirModal");
    var modalElement = document.getElementById("miModal");

    if (botonAbrirModal && modalElement) {
        var modal = new bootstrap.Modal(modalElement);
        botonAbrirModal.addEventListener("click", function() {
            modal.show();
        });
    }

    // Controlar el Carrusel de Bootstrap
    var carruselElement = document.getElementById("miCarrusel");

    if (carruselElement) {
        var carrusel = new bootstrap.Carousel(carruselElement, {
            interval: 3000,  // Cambia cada 3 segundos
            wrap: true       // Vuelve a la primera imagen al final
        });
    }

    // Cerrar el menú de navegación al hacer clic en un enlace (para móviles)
    var navbarLinks = document.querySelectorAll(".nav-link");
    var navbarToggler = document.querySelector(".navbar-toggler");

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth < 992) { // Solo en pantallas pequeñas
                navbarToggler.click(); // Cierra el menú
            }
        });
    });

});
