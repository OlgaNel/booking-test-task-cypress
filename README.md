# Project Name

This project is a testing setup using Cypress for end-to-end testing of booking website.

## Scripts

### Running Tests

- **Run tests in browser**: Executes end-to-end tests with a visible browser, allowing you to see interactions in real-time.
  ```bash
  npm run test:e2e
  ```
- **Run tests in headless mode**:
  ```bash
  npm run test:e2e:headless
  ```
## Project structure
```bash
cypress/
├── e2e/
│   ├── registration/
│   │   ├── *.cy.js                       # Files containing test scenarios
│   └── pages/                            
│   │   ├──  *.js                         # Page Object files describing elements and actions for different pages
├── support/                              # Includes constants and Cypress commands for the project
```