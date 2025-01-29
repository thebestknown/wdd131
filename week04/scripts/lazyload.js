document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-image");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Reemplaza el placeholder con la imagen real
                img.classList.add("loaded"); // Agrega la animación de opacidad
                observer.unobserve(img); // Deja de observar una vez cargada
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
