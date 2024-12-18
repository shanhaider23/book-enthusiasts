# Book Enthusiasts Web Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Testing](#testing)
- [Development Practices](#development-practices)
- [GitHub Actions](#github-actions)

---

## Overview

The **Book Enthusiasts Web Application** is a fully functional web app, an interesting experience for book lovers. Users are able to browse through the available collection of books, read detailed information about each, and enjoy a user-friendly interface with responsive design. The project shows my professionalism in modern web development using React, TypeScript, and the best practices of BEM methodology, context management, and end-to-end testing.

---

## Features

### Core Features

1. **Landing Page**

   - A visually appealing home page introducing the application.

2. **Book Listing Page**

   - Displays a list of books fetched dynamically.
   - Supports navigation to individual book details.

3. **Book Details Page**

   - Displays detailed information about a selected book.

4. **Dark Mode Support**

   - Users can toggle between light and dark themes for an improved user experience.

5. **Error Handling**
   - A "Page Not Found" component to handle invalid routes.

### Additional Features

- **Routing**: Implemented using `react-router-dom` for seamless navigation between pages.
- **Responsive Design**: Ensures the app works across devices, including desktops, tablets, and smartphones.
- **State Management**: Utilized React Context API for managing global states like dark mode.

---

## Technologies Used

- **Frontend:** React (with TypeScript)
- **Styling:** BEM methodology with SCSS
- **Routing:** React Router
- **State Management:** Context API
- **Testing:** Cypress for end-to-end testing
- **Automation:** GitHub Actions for CI/CD

---

## Project Structure

```plaintext
src/
src/
├── components/
│   ├── Card/
│   │   ├── BookCard.tsx
│   │   └── book-card.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── footer.scss
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── header.scss
│   ├── Search/
│   │   ├── SearchBar.tsx
│   │   └── search.scss
├── context/
│   └── DarkModeContext.tsx
├── hooks/
│   └── useLocalStorage.ts
├── pages/
│   ├── landing/
│   │   ├── LandingPage.tsx
│   │   ├── landing-page.scss
│   ├── books/
│   │   ├── Books.tsx
│   │   ├── books.scss
│   ├── details/
│   │   ├── BookDetails.tsx
│   │   ├── book-details.scss
│   ├── notFound/
│   │   ├── PageNotFound.tsx
│   │
├── styles/
│   ├── _variables.scss
│   ├
├── types/
│   └── BookTypes.ts
├── ui/
│   ├── AppLayout.tsx
│   ├── DarkModeToggle.tsx
├── App.tsx
├── index.tsx
├── cypress/
│   ├── e2e/
│   │   ├── book.cy.ts
│   │   ├── landing.cy.ts
│   │   ├── notFound.cy.ts
│   │   └── search.cy.ts
│   └── cypress.config.ts

```

---

## Setup and Installation

### Prerequisites

- Node.js (version 18 or above)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone
   cd book-enthusiasts
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5174`.

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `build/` directory.

---

## Testing

This project includes **end-to-end (E2E) tests** using Cypress.

### Running Tests

1. Install Cypress:
   ```bash
   npx cypress install
   ```
2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```
3. To open the interactive Cypress UI:
   ```bash
   npx cypress open
   ```

### Test Coverage

- **Landing Page Tests:** Verify UI rendering and navigation.
- **Books Page Tests:** Ensure books are displayed correctly and can navigate to details.
- **Book Details Page Tests:** Confirm accurate data loading for selected books.

---

## Development Practices

### BEM Methodology

The app uses **Block, Element, Modifier (BEM)** naming conventions for consistent and maintainable SCSS styling.

### TypeScript

All components and files are written in TypeScript to ensure type safety and better developer experience.

### Best Practices

- Modular structure for components and pages.
- Reusable SCSS variables .
- Context API for global state management.

---

## GitHub Actions

A CI/CD pipeline is configured to run tests automatically on every push or pull request to the `main` branch.

### Workflow File

## Notes for Examiner

This project demonstrates:

- Proficiency in **React**, **TypeScript**, and **SCSS**.
- Usage of **BEM methodology** for scalable and maintainable styling.
- Integration of **Cypress** for E2E testing.
- Automation with **GitHub Actions**.
- A focus on user experience and responsive design.

Feel free to explore the codebase and contact me for any questions or clarifications. Thank you for reviewing my project!
