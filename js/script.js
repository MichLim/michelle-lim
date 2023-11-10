// This script handles the active link in the navigation menu.

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links with the class "nav-link"
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Remove the "active" class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            event.target.classList.add("active");
        });
    });
});
