document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active"); // Toggle the 'active' class to show or hide the menu
        
        // Ensure the transition happens smoothly
        if (navList.classList.contains("active")) {
            navList.style.transition = "transform 0.3s ease, opacity 0.3s ease"; // Apply transition when the menu is active
        } else {
            navList.style.transition = "none"; // Remove transition when the menu is inactive (resetting it)
        }
    });
});