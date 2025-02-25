const navbarLinks = document.querySelectorAll(".nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const botonAbrirModal = document.getElementById("abrirModal");
const modalElement = document.getElementById("miModal");
const carruselElement = document.getElementById("miCarrusel")

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth < 992) { 
                navbarToggler.click();
            }
        });
    });
    
    if (carruselElement) {
        var carrusel = new bootstrap.Carousel(carruselElement, {
            interval: 3000,
            wrap: true 
        });
    }
    
    if (botonAbrirModal && modalElement) {
        var modal = new bootstrap.Modal(modalElement);
        botonAbrirModal.addEventListener("click", function() {
            modal.show();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("TopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
