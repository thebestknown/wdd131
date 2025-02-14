document.addEventListener("DOMContentLoaded", function () {
    const recipeCards = document.querySelectorAll(".recipe-card");
    const searchInput = document.getElementById("search-recipes");
    const saveButton = document.getElementById("save-recipe");
    const savedRecipesContainer = document.getElementById("saved-recipes");
    const dietFilter = document.getElementById("diet-filter");

    // to search recipes by ingredients
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            recipeCards.forEach(card => {
                const recipeName = card.querySelector("h3").textContent.toLowerCase();
                card.style.display = recipeName.includes(query) ? "block" : "none";
            });
        });
    }

    // to save tecipes to local storage
    if (saveButton) {
        saveButton.addEventListener("click", function () {
            const recipeName = searchInput.value;
            if (recipeName) {
                let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
                if (!savedRecipes.includes(recipeName)) {
                    savedRecipes.push(recipeName);
                    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
                    displaySavedRecipes();
                }
            }
        });
    }

    function displaySavedRecipes() {
        savedRecipesContainer.innerHTML = "";
        let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        savedRecipes.forEach(recipe => {
            let listItem = document.createElement("li");
            listItem.textContent = recipe;
            savedRecipesContainer.appendChild(listItem);
        });
    }
    displaySavedRecipes();

    // to filter recipes by diet
    if (dietFilter) {
        dietFilter.addEventListener("change", function () {
            const selectedDiet = dietFilter.value;
            recipeCards.forEach(card => {
                const dietType = card.getAttribute("data-diet");
                card.style.display = selectedDiet === "all" || dietType === selectedDiet ? "block" : "none";
            });
        });
    }
});

const lastModified = document.getElementById("lastModified");
 if (lastModified) {
    lastModified.textContent = document.lastModified;
}


