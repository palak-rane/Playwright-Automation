# Playwright-Automation

This project is an end-to-end (E2E) testing suite for the [Automation Exercise](https://automationexercise.com/) website, built using [Playwright](https://playwright.dev/).

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>```

2. Install dependencies:

```sh npm install```

## Configuration
Update the config.js file with the required credentials and test data:

```sh
module.exports = {
  URL: "https://automationexercise.com/",
  EMAIL: "playwrighttesting@gmail.com",
  LOGIN_EMAIL: "playwrighttesting@gmail.com",
  LOGIN_PASSWORD: "Abcd@123",
  PASSWORD: "Abcd@123",
  FIRST_NAME: "Playwright",
  LAST_NAME: "Test",
  MOBILE_NUM: "123456789",
  STREET: "Random Street 58",
  CITY: "London",
  POSTAL_CODE: "411028",
  CARD_NUMBER: "1234-5678-9876-5432",
  EXP_MONTH: "12",
  CVC_NUM: "123",
  EXP_YEAR: "2025",
};
```

## Running Tests
To run the tests, use the following commands:

Run all tests:

```sh
npx playwright test
```

Run tests in headed mode:

```sh
npm run e2e
```

View the test report:
```sh
npx playwright show-report
```

