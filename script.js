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

// Get the theme button from the HTML.
const themeButton = document.getElementById("theme-button");

// Only add the theme functionality if the button exists.
if (themeButton) {
  // Store the original button text from the HTML.
  const lightModeLabel = themeButton.textContent.trim();

  // Switch between light and dark mode when the button is clicked.
  themeButton.addEventListener("click", () => {
    // Add or remove the "dark-mode" class from the body.
    document.body.classList.toggle("dark-mode");

    // Check whether dark mode is currently active.
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Update the button text according to the current theme.
    themeButton.textContent = isDarkMode
      ? "☀ Light Mode"
      : lightModeLabel;

    // Update the accessibility state of the button.
    themeButton.setAttribute("aria-pressed", isDarkMode);
  });
}