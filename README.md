# Anthony's Portfolio Website

A responsive personal portfolio website built to showcase my frontend development projects, experience, and interests.

## Live Demo

[View the live website](https://anthonycheung1.github.io/portfolio-website)

## Repository

[View the source code](https://github.com/anthonycheung1/portfolio-website)

---

## About the Project

This website is my personal frontend developer portfolio.

It was designed to provide a simple and accessible way for potential employers and recruiters to learn about my background, view my projects, and contact me.

The website was built from scratch using HTML, CSS, and JavaScript without relying on a frontend framework.

The project also serves as a practical demonstration of fundamental frontend development skills, including:

- Semantic HTML
- Responsive CSS
- CSS Grid and Flexbox
- JavaScript DOM manipulation
- Event handling
- Accessibility
- Responsive navigation
- Light/dark theme switching
- Responsive layouts

---

## Features

### Responsive Navigation

The navigation adapts to smaller screens.

On mobile devices, the main navigation links can be opened and closed using a Menu button.

The menu button also updates its `aria-expanded` attribute to communicate the current state to assistive technologies.

### Light/Dark Mode

Users can switch between light and dark colour themes using the theme button.

The theme is implemented using JavaScript by adding or removing a CSS class from the `<body>` element.

The theme button also updates its `aria-pressed` attribute to reflect the current state.

### Responsive Project Grid

The projects section uses CSS Grid to adapt the number of columns according to screen size:

- One column on small screens
- Two columns on tablet-sized screens
- Three columns on larger desktop screens

### Accessible Navigation and Controls

Accessibility was considered throughout the project.

Examples include:

- Semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`
- Descriptive navigation structure
- `aria-expanded` for the mobile navigation button
- `aria-pressed` for the theme button
- Keyboard-visible focus styles
- Proper button elements for interactive controls
- Responsive layouts
- Reduced-motion support using `prefers-reduced-motion`

### Responsive Design

The website is designed to work across:

- Mobile phones
- Tablets
- Laptops
- Desktop computers

CSS media queries are used to adjust the navigation and project layout at different viewport widths.

---

## Technologies Used

### HTML

Used for:

- Semantic page structure
- Navigation
- Project content
- Contact information
- Accessible interactive elements

### CSS

Used for:

- Page layout
- CSS Grid
- Flexbox
- Responsive design
- Typography
- Colours
- Dark mode
- Hover and focus states
- Transitions

### JavaScript

Used for:

- Mobile navigation
- DOM manipulation
- Event handling
- Dark mode
- Updating accessibility attributes

---

## Project Structure

```text
portfolio-website/
│
├── index.html
├── style.css
├── script.js
└── README.md