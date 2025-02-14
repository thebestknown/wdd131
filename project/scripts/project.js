document.addEventListener("DOMContentLoaded", function () {
    // 🔎 SEARCH FUNCTIONALITY
    const searchInput = document.getElementById("search-recipes");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            const recipes = document.querySelectorAll(".recipe-card");

            recipes.forEach(recipe => {
                recipe.style.display = recipe.textContent.toLowerCase().includes(query) ? "block" : "none";
            });
        });
    }

    // 📌 SAVE RECIPE FROM INPUT FORM (Manual Input with Type & Ingredients)
    const favoriteForm = document.getElementById("favorite-recipe-form");
    if (favoriteForm) {
        favoriteForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const recipeName = document.getElementById("favorite-recipe").value.trim();
            if (recipeName === "") {
                alert("Please enter a recipe name.");
                return;
            }

            const foodType = prompt("What type of food is this? (Vegan, Vegetarian, Gluten-Free, etc.)");
            const ingredients = prompt("Enter the ingredients (comma-separated):");

            if (!foodType || !ingredients) {
                alert("Please provide both the type of food and ingredients.");
                return;
            }

            saveRecipe({
                name: recipeName,
                type: foodType,
                ingredients: ingredients.split(",").map(i => i.trim())
            });

            document.getElementById("favorite-recipe").value = ""; // Clear input
        });
    }

    // 📌 SAVE RECIPE FROM RECIPE CARDS
    function saveRecipe(recipeData) {
        let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

        if (!savedRecipes.some(r => r.name === recipeData.name)) {
            savedRecipes.push(recipeData);
            localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
            alert(`${recipeData.name} has been saved!`);
            displaySavedRecipes();
        } else {
            alert("This recipe is already saved!");
        }
    }

    // 📌 ATTACH EVENT LISTENERS TO "SAVE RECIPE" BUTTONS
    document.querySelectorAll(".save-recipe-btn").forEach(button => {
        button.addEventListener("click", function () {
            const recipeCard = this.closest(".recipe-card");
            const recipeName = recipeCard.querySelector("h3").textContent;
            const foodType = recipeCard.getAttribute("data-diet") || "Unknown";
            const ingredients = [...recipeCard.querySelectorAll(".recipe-ingredients li")].map(li => li.textContent);

            saveRecipe({ name: recipeName, type: foodType, ingredients });
        });
    });

    // 📂 DISPLAY SAVED RECIPES
    function displaySavedRecipes() {
        const savedRecipesList = document.getElementById("saved-recipes");
        if (savedRecipesList) {
            savedRecipesList.innerHTML = "";
            const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

            savedRecipes.forEach(recipe => {
                const listItem = document.createElement("li");
                
                listItem.innerHTML = `
                    <strong>${recipe.name}</strong> (${recipe.type})
                    <br>
                    <em>Ingredients:</em> ${recipe.ingredients.join(", ")}
                `;

                // ❌ DELETE BUTTON
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "❌";
                deleteButton.style.marginLeft = "10px";
                deleteButton.addEventListener("click", function () {
                    removeSavedRecipe(recipe.name);
                });

                listItem.appendChild(deleteButton);
                savedRecipesList.appendChild(listItem);
            });
        }
    }

    // ❌ REMOVE A SAVED RECIPE
    function removeSavedRecipe(recipeName) {
        let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        savedRecipes = savedRecipes.filter(recipe => recipe.name !== recipeName);
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        displaySavedRecipes();
    }

    // 📌 FILTER RECIPES BY DIET
    const dietFilter = document.getElementById("diet-filter");
    if (dietFilter) {
        dietFilter.addEventListener("change", function () {
            const selectedDiet = dietFilter.value;
            const recipes = document.querySelectorAll(".recipe-card");

            recipes.forEach(recipe => {
                const dietType = recipe.getAttribute("data-diet");
                recipe.style.display = (selectedDiet === "all" || dietType === selectedDiet) ? "block" : "none";
            });
        });
    }

    displaySavedRecipes();

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
