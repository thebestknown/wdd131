const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open'); // Alterna la clase "open"
    nav.style.display = isOpen ? 'block' : 'none'; // Muestra u oculta el menú
});


document.getElementById("lastModified").textContent = document.lastModified;
