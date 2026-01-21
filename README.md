# Cypress-Web-Automation-SA2509016

# 📑 Cypress Training – Table of Content123

* **[Part 1: Introduction & Setup](#-cypress-training--part-1)**
  * [Learning Objectives](#-learning-objectives)
  * [Agenda](#-agenda)
  * [Introduction to Cypress](#-1--introduction-to-cypress)
  * [Benefits & Features](#-2--benefits--features-of-cypress)
  * [Cypress vs Selenium](#-3--cypress-vs-selenium)
  * [System Requirements & Installation](#-4--system-requirements--installation)
  * [Cypress Test Runner Overview](#-5--cypress-test-runner-overview)
  * [Hands-on Demo: Running First Test](#-6-️-hands-on-demo-running-first-test)
  * [Assignment](#-7--assignment)

* **[Part 2: Cypress Architecture & Folder Structure](#-cypress-training--part-2)**
  * [Learning Objectives](#-learning-objectives-1)
  * [Agenda](#-agenda-1)
  * [Cypress Architecture](#-1--cypress-architecture)
  * [Cypress Components Explained](#-2--cypress-architecture-diagram)
  * [Cypress vs Selenium (Architecture View)](#-3--cypress-vs-selenium-architecture-view)
  * [Cypress Folder Structure](#-4--cypress-folder-structure)
  * [Configuration Files](#-5--configuration-files)
  * [Hands-on Demo: Customizing Configuration](#-6-️-hands-on-demo-customizing-configuration)
  * [Assignment](#-7--assignment-1)

* **[Part 3: Writing Tests with Mocha & Chai](#-cypress-training--part-3)**
  * [Learning Objectives](#-learning-objectives-2)
  * [Agenda](#-agenda-2)
  * [Introduction to Mocha in Cypress](#-1--introduction-to-mocha-in-cypress)
  * [Test Structure: describe() and it()](#-2--test-structure-describe-and-it)
  * [Mocha Hooks](#-3--mocha-hooks)
  * [Selective Test Execution](#-4--selective-test-execution)
  * [Introduction to Chai Assertions](#-5--introduction-to-chai-assertions)
  * [Implicit vs Explicit Assertions](#-6--implicit-vs-explicit-assertions)
  * [Hands-on Demo: Writing Tests with Assertions](#-7-️-hands-on-demo-writing-tests-with-assertions)
  * [Assignment](#-8--assignment)

* **[Part 4: Locators & Web Element Interactions](#-cypress-training--part-4)**
  * [Learning Objectives](#-learning-objectives-3)
  * [Agenda](#-agenda-3)
  * [Locators in Cypress](#-1--locators-in-cypress)
  * [cy.get() vs cy.find()](#-2--cyget-vs-cyfind)
  * [Web Element Interactions](#-3--web-element-interactions)
  * [Navigation Commands](#-4--navigation-commands)
  * [Hands-on Demos](#-5-️-hands-on-demos)
  * [Assignment](#-6--assignment)

* **[Part 5: Screenshots, Videos & Reporting](#-cypress-training--part-5)**
  * [Learning Objectives](#-learning-objectives-4)
  * [Agenda](#-agenda-4)
  * [Capturing Screenshots](#-1--capturing-screenshots)
  * [Video Recording in Cypress](#-2--video-recording-in-cypress)
  * [Configuring Screenshots & Videos](#-3--configuring-screenshots--videos)
  * [Reporting with Mochawesome](#-4--reporting-with-mochawesome)
  * [Real-Time Use Cases](#-5--real-time-use-cases)
  * [Hands-on Demos](#-6-️-hands-on-demos)
  * [Assignment](#-7--assignment-2)

---

# 📘 Cypress Training - Part 1

**Topic:** Introduction & Setup

---

## 🎯 Learning Objectives

By the end of this session, learners will be able to:

* Understand what Cypress is and why it is used in web automation.
* Identify Cypress features and compare it with Selenium.
* Install and configure Cypress on their machine.
* Run their first Cypress test using the Test Runner.

---

## 📝 Agenda

1. Introduction to Cypress
2. Benefits & Features of Cypress
3. Cypress vs Selenium
4. System Requirements & Installation
5. Cypress Test Runner Overview
6. Hands-on Demo: Running First Test
7. Assignment

---

## 1. 🔹 Introduction to Cypress

* Cypress is a **next-generation front-end testing tool** for modern web applications.
* Built on **Node.js** and distributed as an **npm package**.
* Supports:

  * Unit Testing
  * Integration Testing
  * End-to-End (E2E) Testing

---

## 2. 🔹 Benefits & Features of Cypress

* **Automatic Waiting** → No need for explicit waits/sleeps.
* **Architecture** → Runs inside the browser, unlike Selenium which runs outside via WebDriver.
* **Snapshots** → Takes screenshots of test execution steps.
* **Debugging** → Directly debug from browser DevTools.
* **Screenshots & Videos** → Captures on failure or manually.
* **Cross Browser Testing** → Chrome, Edge, Electron, Firefox.

---

## 3. 🔹 Cypress vs Selenium

| Feature            | Selenium                      | Cypress                   |
| ------------------ | ----------------------------- | ------------------------- |
| Language Support   | Java, Python, C#, Ruby, etc.  | JavaScript (only)         |
| Execution Model    | Outside browser via WebDriver | Inside browser event loop |
| Setup Complexity   | High (drivers, libs)          | Low (npm install)         |
| Debugging          | Limited                       | Easy with DevTools        |
| Automatic Waits    | No (manual waits needed)      | Yes (built-in waiting)    |
| Screenshots/Videos | Requires setup                | Built-in                  |

---

## 4. 🔹 System Requirements & Installation

### ✅ Prerequisites

* **Node.js** (LTS recommended) → [Download Node.js](https://nodejs.org/)
* **VS Code** (IDE) → [Download VS Code](https://code.visualstudio.com/)

### ✅ Steps to Install Cypress

1. Install Node.js

   ```bash
   node -v
   npm -v
   ```

   (Verify Node.js and npm are installed)

2. Create a project folder and initialize npm

   ```bash
   mkdir cypress-training
   cd cypress-training
   npm init -y
   ```

3. Install Cypress as a dev dependency

   ```bash
   npm install cypress --save-dev
   ```

4. Open Cypress Test Runner

   ```bash
   npx cypress open
   ```

---

## 5. 🔹 Cypress Test Runner Overview

* Opens an **interactive GUI** for running tests.
* Sample project with test examples is provided.
* Features of Test Runner:

  * Real-time test execution.
  * Step-by-step command log.
  * Snapshots before/after execution.
  * Easy debugging from browser.

---

## 6. 🖥️ Hands-on Demo: Running First Test

### ✅ Steps

1. Run the following command:

   ```bash
   npx cypress open
   ```
2. Cypress Test Runner launches → Select **E2E Testing**.
3. Choose a browser (e.g., Chrome).
4. Run the sample test `spec.cy.js`.

### ✅ Example Test (visit page & check title)

```javascript
describe('My First Cypress Test', () => {
  it('Visits the Example Page and checks title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})
```

### ✅ Execution Result

* Cypress opens browser.
* Runs test in real time.
* Displays step logs & snapshots in Test Runner.

---

## 7. 📚 Assignment

👉 Perform the following tasks on your machine:

1. Install Cypress in a new project folder.
2. Open Cypress Test Runner (`npx cypress open`).
3. Write and execute a test that:

   * Visits [https://example.cypress.io](https://example.cypress.io).
   * Verifies the page title contains `"Cypress"`.
   * Takes a screenshot of the executed test.

✅ **Deliverable:** Push your Cypress project to GitHub with the new test file in the `cypress/e2e` folder.


# 📘 Cypress Training – Part 2

**Topic:** Cypress Architecture & Folder Structure

---

## 🎯 Learning Objectives

By the end of this session, learners will be able to:

* Understand the Cypress architecture and how it differs from Selenium.
* Learn the internal components of Cypress (Node.js server, Test Runner, Browser, Proxy, File System, Plugins).
* Understand the Cypress folder structure and configuration files.
* Customize configuration for test execution.

---

## 📝 Agenda

1. Cypress Architecture
2. Cypress Components Explained
3. Cypress vs Selenium (Architecture View)
4. Cypress Folder Structure
5. Configuration Files (`cypress.config.js`)
6. Hands-on Demo: Customizing Configuration
7. Assignment

---

## 1. 🔹 Cypress Architecture

Unlike Selenium, Cypress **runs directly in the browser** and shares the same event loop as the application under test.

### Key Components:

1. **Node.js Server Process**

   * Acts as the backbone of Cypress.
   * Handles OS-level tasks: reading/writing files, network operations, plugins.

2. **Test Runner (GUI)**

   * Visual interface where tests execute.
   * Provides real-time results, command log, snapshots, debugging tools.

3. **Browser**

   * Tests run **inside the browser** (not outside like Selenium WebDriver).
   * Direct execution gives faster and more reliable results.

4. **Network Proxy**

   * Intercepts and modifies network requests/responses.
   * Allows stubbing, mocking, simulating network failures.

5. **File System Access**

   * Directly reads/writes files.
   * Used for fixtures (test data), screenshots, videos, reports.

6. **API & Plugins**

   * Cypress provides a rich API (`cy.*` commands).
   * Plugins extend Cypress (e.g., XPath support, reporting).

---

## 2. 🔹 Cypress Architecture Diagram

```
 ┌─────────────────────────────┐
 │        Node.js Server       │
 │ (OS tasks, File, Network)   │
 └───────────────┬─────────────┘
                 │
                 ▼
 ┌─────────────────────────────┐
 │       Cypress Test Runner   │
 │ (Executes Tests, Debugging) │
 └───────────────┬─────────────┘
                 │
                 ▼
 ┌─────────────────────────────┐
 │         Browser (AUT)       │
 │  Cypress runs inside browser │
 └───────────────┬─────────────┘
                 │
                 ▼
 ┌─────────────────────────────┐
 │        Network Proxy        │
 │   Intercept & Stub Calls    │
 └─────────────────────────────┘
```

---

## 3. 🔹 Cypress vs Selenium (Architecture View)

| Aspect             | Selenium                          | Cypress                                    |
| ------------------ | --------------------------------- | ------------------------------------------ |
| Execution Model    | WebDriver → Commands → Browser    | Directly inside the browser event loop     |
| Speed              | Slower (extra layer of WebDriver) | Faster (no external driver needed)         |
| Network Stubbing   | Requires third-party libraries    | Built-in network stubbing/proxy            |
| File System Access | Limited (via language bindings)   | Direct file system access (fixtures, logs) |

---

## 4. 🔹 Cypress Folder Structure

When Cypress is installed, project structure looks like:

```
cypress/
 ├── fixtures/        # Test data (JSON, key-value pairs)
 ├── integration/     # Test cases (spec files)
 ├── plugins/         # Event handlers & plugins
 ├── support/         # Custom commands & reusable functions
 ├── videos/          # Auto-recorded test run videos
 ├── screenshots/     # Test failure/screenshot captures
node_modules/         # Project dependencies
cypress.config.js     # Cypress configuration
package.json          # npm dependencies & scripts
```

---

## 5. 🔹 Configuration Files

### `cypress.config.js` (Cypress v10+)

* Central place to manage Cypress test configuration.
* Example configuration:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    retries: 1
  }
});
```

### Common Config Options:

* **baseUrl** → Default URL for `cy.visit()`.
* **viewportWidth/Height** → Browser size during test.
* **video/screenshots** → Enable or disable recordings.
* **retries** → Retry failed tests.

---

## 6. 🖥️ Hands-on Demo: Customizing Configuration

### ✅ Step 1: Open Cypress Config File

```bash
code cypress.config.js
```

### ✅ Step 2: Add Custom Config

```javascript
e2e: {
  baseUrl: "https://example.cypress.io",
  viewportWidth: 1024,
  viewportHeight: 768,
  video: false
}
```

### ✅ Step 3: Run Test with Config

```javascript
describe('Config Demo', () => {
  it('should use baseUrl from config', () => {
    cy.visit('/') // no need to write full URL
    cy.title().should('include', 'Cypress')
  })
})
```

👉 Notice that `cy.visit('/')` works because `baseUrl` is set.

---

## 7. 📚 Assignment

1. Open your Cypress project.
2. Update `cypress.config.js` with:

   * `baseUrl: "https://example.cypress.io"`
   * `viewportWidth: 1200`, `viewportHeight: 800`
   * `video: false`
3. Write a test that:

   * Visits the base URL using `cy.visit('/')`.
   * Verifies that the page title includes `"Cypress"`.
4. Add a fixture file `user.json` in `fixtures/` with sample login data.

   ```json
   {
     "username": "testUser",
     "password": "testPass"
   }
   ```
5. Print the fixture data inside your test using:

   ```javascript
   cy.fixture('user').then((user) => {
     cy.log(user.username)
   })
   ```

✅ **Deliverable:** Push updated project with modified config & new fixture to GitHub.

---


# 📘 Cypress Training – Part 3

**Topic:** Writing Tests with Mocha & Chai

*Doc Link* - https://docs.cypress.io/app/references/bundled-libraries

---

## 🎯 Learning Objectives

By the end of this session, learners will be able to:

* Understand the **Mocha test framework** used in Cypress.
* Use Mocha hooks (`before`, `after`, `beforeEach`, `afterEach`).
* Write test suites and test cases with `describe()` and `it()`.
* Apply **Chai assertions** (`should`, `expect`, `assert`).
* Understand implicit vs explicit assertions.
* Write Cypress tests combining Mocha + Chai.

---

## 📝 Agenda

1. Introduction to Mocha in Cypress
2. Test Structure: `describe()`, `it()`
3. Mocha Hooks (`before`, `after`, `beforeEach`, `afterEach`)
4. Selective Test Execution (`.only`, `.skip`)
5. Introduction to Chai Assertions
6. Implicit vs Explicit Assertions
7. Hands-on Demo: Writing Tests with Assertions
8. Assignment

---

## 1. 🔹 Introduction to Mocha in Cypress

* Cypress uses **Mocha** as its default testing framework.
* Mocha provides a clean structure for writing test suites and test cases.
* Supports synchronous and asynchronous testing.
* Provides hooks for pre- and post-test actions.

---

## 2. 🔹 Test Structure: `describe()` and `it()`

### `describe()` – Test Suite

* Groups related test cases together.
* Takes 2 arguments:

  1. Test suite name (string).
  2. Callback function containing tests.

### `it()` – Test Case

* Represents a single test.
* Takes 2 arguments:

  1. Test case name (string).
  2. Callback function with test logic.

### ✅ Example

```javascript
describe('Login Page Tests', () => {
  it('should load the login page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Commands').should('be.visible')
  })

  it('should have a valid title', () => {
    cy.title().should('include', 'Cypress')
  })
})
```

---

## 3. 🔹 Mocha Hooks

Hooks help run setup or cleanup code around test execution.

* `before()` → Runs once before all tests in a suite.
* `after()` → Runs once after all tests in a suite.
* `beforeEach()` → Runs before each test case.
* `afterEach()` → Runs after each test case.

### ✅ Example

```javascript
describe('Mocha Hooks Example', () => {
  before(() => {
    cy.log('Run once before all tests')
  })

  after(() => {
    cy.log('Run once after all tests')
  })

  beforeEach(() => {
    cy.log('Run before each test')
  })

  afterEach(() => {
    cy.log('Run after each test')
  })

  it('Test 1', () => {
    cy.log('Executing Test 1')
  })

  it('Test 2', () => {
    cy.log('Executing Test 2')
  })
})
```

---

## 4. 🔹 Selective Test Execution

* Run only specific tests using `.only`.
* Skip tests using `.skip`.

### ✅ Example

```javascript
describe('Selective Test Execution', () => {
  it.only('This test will run', () => {
    cy.log('Running only this test')
  })

  it.skip('This test will be skipped', () => {
    cy.log('This will not run')
  })
})
```

---

## 5. 🔹 Introduction to Chai Assertions

Cypress includes the **Chai assertion library** by default.

Assertion styles:

* **Should (BDD)** → natural language style.
* **Expect (BDD)** → flexible, chainable style.
* **Assert (TDD)** → classic assertion style.

### ✅ Examples

```javascript
// Should
cy.get('#username').should('be.visible')

// Expect
expect([1, 2, 3]).to.have.length(3)

// Assert
assert.equal(4, 2+2, 'Values are equal')
```

---

## 6. 🔹 Implicit vs Explicit Assertions

### Implicit Assertion

* Uses `.should()` and `.and()`.
* Automatically applies to the subject of the previous command.

url - https://docs.cypress.io/app/references/assertions#__docusaurus_skipToContent_fallback

```javascript
cy.get('h1')
  .should('be.visible')
  .and('contain', 'Welcome')
```

### Explicit Assertion

* Uses `expect()` or `assert()`.
* Requires explicitly passing the subject.

```javascript
const user = { name: 'John', age: 25 }
expect(user).to.deep.equal({ name: 'John', age: 25 })
assert.isObject(user, 'User is an object')
```

---

## 7. 🖥️ Hands-on Demo: Writing Tests with Assertions

### Test Case 1 – Title Verification

```javascript
describe('Title Test', () => {
  it('should verify the page title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')  // implicit assertion
  })
})
```

### Test Case 2 – Explicit Assertion Example

```javascript
describe('Explicit Assertion Example', () => {
  it('should validate user object', () => {
    const user = { username: 'testUser', role: 'admin' }
    expect(user).to.have.property('role').to.equal('admin')
  })
})
```

### Test Case 3 – Using Hooks + Assertions

```javascript
describe('Login Form Test', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('should type into an input field', () => {
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })
})
```

---

## 8. 📚 Assignment

1. Create a test suite **"Form Tests"**.
2. Inside the suite, write 2 test cases:

   * Test 1: Visit a page and check if the title contains `"Cypress"`.
   * Test 2: Use `cy.get()` to type text in an input box and validate its value.
3. Use `beforeEach()` hook to visit the page before each test.
4. Add **one implicit assertion** and **one explicit assertion** in your tests.
5. Use `.only` to run one test at a time, then remove it to run the full suite.

✅ **Deliverable:** Push your Cypress project with the new test suite `formTests.cy.js` inside `cypress/e2e` folder.

---


# 📘 Cypress Training – Part 4

**Topic:** Locators & Web Element Interactions

---

## 🎯 Learning Objectives

By the end of this session, learners will be able to:

* Use different locator strategies to find elements in Cypress.
* Understand the difference between `cy.get()` and `cy.find()`.
* Interact with web elements like text fields, buttons, checkboxes, radio buttons, and dropdowns.
* Perform navigation actions in Cypress.
* Combine locators and interactions to build functional test cases.

---

## 📝 Agenda

1. Locators in Cypress
2. `cy.get()` vs `cy.find()`
3. Web Element Interactions (input, click, checkbox, dropdown)
4. Navigation Commands (`cy.go()`, `cy.reload()`)
5. Hands-on Demos
6. Assignment

---

## 1. 🔹 Locators in Cypress

### Common Locator Strategies

| Locator Type       | Example Usage                   | Syntax                              |
| ------------------ | ------------------------------- | ----------------------------------- |
| **CSS Selector**   | Select by class, id, or element | `cy.get('.class')`, `cy.get('#id')` |
| **Data Attribute** | Preferred for test automation   | `cy.get('[data-cy="login-btn"]')`   |
| **Text Content**   | Select by visible text          | `cy.contains('Submit')`             |
| **Tag Name**       | Select by HTML tag              | `cy.get('button')`                  |
| **Chaining**       | Narrow selection                | `cy.get('.form').find('input')`     |
| **Positioning**    | Select by index                 | `cy.get('li').eq(0)`                |
| **Filtering**      | Apply filters                   | `cy.get('div').filter('.active')`   |

👉 Cypress doesn’t support XPath by default. To use it, install the plugin:

```bash
npm install -D cypress-xpath
```

Then in `cypress/support/e2e.js`:

```javascript
require('cypress-xpath');
```

Usage:

```javascript
cy.xpath('//button[@id="submit"]')
```

---

## 2. 🔹 `cy.get()` vs `cy.find()`

* `cy.get()` → Finds elements globally in the DOM.
* `cy.find()` → Finds elements **within a specific parent element**.

### ✅ Example

```javascript
// Using cy.get() - finds input globally
cy.get('input[type="text"]').type('Hello')

// Using cy.find() - finds input only inside the form
cy.get('form').find('input[type="text"]').type('Hello')
```

---

## 3. 🔹 Web Element Interactions

### a) Typing in Input Boxes

```javascript
cy.get('#username').type('testUser')
```

### b) Clicking Buttons

```javascript
cy.get('#loginBtn').click()
```

### c) Checking & Unchecking Checkboxes

```javascript
// Check a checkbox
cy.get('#agree').check()

// Uncheck a checkbox
cy.get('#agree').uncheck()
```

### d) Selecting Radio Buttons

```javascript
cy.get('input[type="radio"][value="male"]').check()
```

### e) Handling Dropdowns (Static `<select>`)

```javascript
// Select by visible text
cy.get('select#country').select('India')

// Select by value
cy.get('select#country').select('IN')

// Select by index
cy.get('select#country').select(1)
```

---

## 4. 🔹 Navigation Commands

* Go back in browser history

```javascript
cy.go('back')
```

* Go forward in browser history

```javascript
cy.go('forward')
```

* Reload current page

```javascript
cy.reload()
```

---

## 5. 🖥️ Hands-on Demos

### Demo 1 – Automate a Login Form

```javascript
describe('Login Form Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    // Type into input fields
    cy.get('.action-email').type('test@example.com')
    cy.get('.action-password').type('Password123')

    // Click login button
    cy.contains('Submit').click()
  })
})
```

---

### Demo 2 – Dropdown Selection

```javascript
describe('Dropdown Test', () => {
  it('should select an option from dropdown', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('select#dropdown')
      .select('Option 2')
      .should('have.value', 'option2')
  })
})
```

---

### Demo 3 – Checkboxes & Radio Buttons

```javascript
describe('Checkbox and Radio Test', () => {
  it('should check and uncheck checkboxes', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    // Check a box
    cy.get('#checkbox1').check().should('be.checked')

    // Uncheck it
    cy.get('#checkbox1').uncheck().should('not.be.checked')
  })

  it('should select a radio button', () => {
    cy.get('input[type="radio"][value="female"]').check().should('be.checked')
  })
})
```

---

### Demo 4 – Navigation

```javascript
describe('Navigation Test', () => {
  it('should navigate back and forward', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Commands').click()
    cy.go('back')
    cy.go('forward')
    cy.reload()
  })
})
```

---

## 6. 📚 Assignment

1. Visit [https://example.cypress.io/commands/actions](https://example.cypress.io/commands/actions).
2. Automate the following steps:

   * Enter text in an input field.
   * Select an option from a dropdown.
   * Check a checkbox and validate it.
   * Select a radio button and validate it.
3. Use `.find()` to select an input inside a specific form.
4. Use `cy.reload()` after form submission.

✅ **Deliverable:** Push your Cypress test suite `formInteractions.cy.js` to your GitHub repo.

---


# 📘 Cypress Training – Part 5

**Topic:** Screenshots, Videos & Reporting

---

## 🎯 Learning Objectives

By the end of this session, learners will be able to:

* Capture screenshots (full page and element-specific) in Cypress.
* Understand Cypress’ built-in video recording feature.
* Configure Cypress to enable/disable screenshots and videos.
* Generate test execution reports using **Mochawesome**.
* Apply these features in real-time use cases (e.g., debugging failed tests, reporting to stakeholders).

---

## 📝 Agenda

1. Capturing Screenshots
2. Video Recording in Cypress
3. Configuring Screenshots & Videos
4. Reporting with Mochawesome
5. Real-Time Use Case Scenarios
6. Hands-on Demos
7. Assignment

---

## 1. 🔹 Capturing Screenshots

Cypress allows two types of screenshots:

* **Manual screenshots** (using `cy.screenshot()`).
* **Automatic screenshots** (captured on failure by default).

### ✅ Example 1 – Full Page Screenshot

```javascript
describe('Screenshot Example', () => {
  it('should capture full page screenshot', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot('homepage-full')  // stored under /cypress/screenshots/
  })
})
```

### ✅ Example 2 – Element Screenshot

```javascript
describe('Element Screenshot Example', () => {
  it('should capture screenshot of a button', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-btn').screenshot('action-button')
  })
})
```

📌 **Output Location:** `cypress/screenshots/`

---

## 2. 🔹 Video Recording in Cypress

* Cypress **records videos automatically** when tests run via CLI (`cypress run`).
* Videos are saved in `cypress/videos/`.
* By default, Cypress **compresses videos** and only saves them when there is at least one failing test.

### ✅ Running Tests with Video Recording

```bash
npx cypress run
```

📌 Cypress will:

* Execute all tests in headless mode (Electron by default).
* Record video of the test execution.
* Save video to `cypress/videos/`.

---

## 3. 🔹 Configuring Screenshots & Videos

Modify `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,   // capture screenshot on test failure
    video: true,                    // enable video recording
    videoCompression: 32            // compress videos (default 32)
  }
});
```

👉 To disable video capture:

```javascript
video: false
```

---

## 4. 🔹 Reporting with Mochawesome

Cypress uses **Mocha under the hood**, so we can use Mocha reporters like **Mochawesome**.

### ✅ Step 1: Install Mochawesome

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### ✅ Step 2: Update `package.json` test script

```json
"scripts": {
  "test": "cypress run --reporter mochawesome"
}
```

### ✅ Step 3: Merge JSON Reports

```bash
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
```

### ✅ Step 4: Generate HTML Report

```bash
npx marge mochawesome.json
```

📌 Report saved in `/mochawesome-report/` → open `index.html`.

---

## 5. 🔹 Real-Time Use Cases

### Use Case 1 – Debugging Failed Tests

* A login test fails due to wrong selector.
* Cypress automatically captures **screenshot + video**.
* QA reviews logs and visuals → quickly identifies broken selector.

### Use Case 2 – Sharing Test Evidence with Stakeholders

* After regression suite execution, Cypress generates **Mochawesome HTML report**.
* Attach report in CI/CD pipeline or email to stakeholders.
* Screenshots & videos provide clear evidence of failures.

### Use Case 3 – CI/CD Integration (e.g., Jenkins, GitHub Actions)

* Run Cypress in **headless mode** in CI.
* Collect **screenshots, videos, and Mochawesome reports**.
* Publish results as part of build artifacts → ensures transparency.

---

## 6. 🖥️ Hands-on Demos

### Demo 1 – Capture Screenshot on Failure

```javascript
describe('Failure Screenshot Demo', () => {
  it('should fail and capture screenshot', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#non-existing-element').should('be.visible') // this will fail
  })
})
```

📌 Result: Cypress captures screenshot automatically in `/screenshots/`.

---

### Demo 2 – Video Recording of Test Execution

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

📌 Result: Cypress saves a video recording in `/videos/`.

---

### Demo 3 – Generate Mochawesome Report

```bash
npm run test
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx marge mochawesome.json
```

📌 Open `mochawesome-report/index.html` in browser.

---

## 7. 📚 Assignment

1. Modify `cypress.config.js` to:

   * Enable video recording.
   * Enable screenshot on failure.
2. Write a test suite:

   * Test 1: Visit [https://example.cypress.io](https://example.cypress.io) and take a full-page screenshot.
   * Test 2: Automate a form → fail it intentionally (e.g., wrong locator) to trigger screenshot + video.
3. Install and configure **Mochawesome**.
4. Run tests, generate **Mochawesome HTML report**.

✅ **Deliverable:** Push your project with:

* Cypress config changes.
* New test suite (`reportingTests.cy.js`).
* Generated Mochawesome report (`/mochawesome-report/`).

---

