// Get the Menu button and navigation menu from the HTML.
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// Only add the menu functionality if both elements exist.
if (menuButton && navMenu) {
  // Open or close the navigation menu when the Menu button is clicked.
  menuButton.addEventListener("click", () => {
    // Add or remove the "is-open" class.
    navMenu.classList.toggle("is-open");

    // Check whether the menu is currently open.
    const isOpen = navMenu.classList.contains("is-open");

    // Update the accessibility attribute to reflect the menu state.
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}