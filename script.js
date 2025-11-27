// Eventos para el manejo de carrusel 
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselNoticias");

    if (carousel) {
        carousel.addEventListener("slid.bs.carousel", (event) => {
            console.log("Slide cambiado a: " + event.to);
        });
    }
});
