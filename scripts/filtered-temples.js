document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            e.target.classList.add("active");
            filterTemples(e.target.dataset.filter);
        });
    });

    document.getElementById("lastModified").textContent = document.lastModified;
});
