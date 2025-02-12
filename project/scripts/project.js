document.addEventListener("DOMContentLoaded", function () {
    // to search the recipes
    const exploreBtn = document.getElementById("explore-btn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            window.location.href = "recipes.html";
        });
    }

    // Search the recipes
    const searchBtn = document.getElementById("search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            const ingredient = document.getElementById("ingredient-input").value.toLowerCase();
            const recipes = document.querySelectorAll(".recipe-card");

            recipes.forEach(recipe => {
                recipe.style.display = recipe.textContent.toLowerCase().includes(ingredient) ? "block" : "none";
            });
        });
    }

    // To save the recipes in the local storage
    const favoriteForm = document.getElementById("favorite-recipe-form");
    if (favoriteForm) {
        favoriteForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const favoriteRecipe = document.getElementById("favorite-recipe").value;
            localStorage.setItem("favoriteRecipe", favoriteRecipe);
            alert("Your favorite recipe has been saved!");
        });
    }

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});

