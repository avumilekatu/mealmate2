// script.js - Handles meal planner form submission
// Reference: MDN (2024), DOM Manipulation and Events

document.getElementById("mealForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form reload

    const day = document.getElementById("day").value;
    const meal = document.getElementById("meal").value;
    const mealList = document.getElementById("mealList");

    // Append meal entry dynamically to the page
    const entry = document.createElement("p");
    entry.textContent = `${day}: ${meal}`;
    mealList.appendChild(entry);

    document.getElementById("mealForm").reset();
});
