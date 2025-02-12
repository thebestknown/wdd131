document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.addEventListener("click", function () {
        window.location.href = "recipes.html";
    });
});
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastMod;