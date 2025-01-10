# Credit Card Validation Testing Project

A JavaScript module for obscuring credit card numbers with test coverage using Jest.

## 📑 Table of Contents

- Credit Card Validation Testing Project
  - [✨ Features](#-features)
  - [🛠️ Technologies](#️-technologies)
  - [📦 Project Configuration](#-project-configuration)
  - [🚀 Getting Started](#-getting-started)
  - [🔍 Testing](#-testing)
  - [💻 Usage](#-usage)
    - [obscureCard(str)](#obscurecardstr)
  - [📂 Project Structure](#-project-structure)
  - [📝 License](#-license)

## ✨ Features

- Obscures all but last 4 digits of credit card numbers
- Validates credit card number length (12-16 digits)
- Validates numeric-only input
- Full test coverage with both positive and negative test cases

## 🛠️ Technologies

- Jest for testing
- ES Modules

I'll update the configuration section based on your actual files:

## 📦 Project Configuration

### ES Modules Setup

This project uses ES Modules (ESM) instead of CommonJS. Here are the key configurations:

- **package.json**
  ```json
  {
    "name": "testing_assignment",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "test": "jest --coverage"
    },
    "jest": {
      "transform": {
        "^.+\\.js$": "babel-jest"
      }
    }
  }
  ```

### Dependencies

```json
{
  "dependencies": {
    "jest": "^29.7.0"
  },
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0",
    "babel-jest": "^29.7.0"
  }
}
```

### Configuration Files

- **.babelrc**
  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

### Notes:

- `"type": "module"` in package.json enables ES Modules syntax (import/export)
- Jest and Babel are configured to handle ES Modules in the testing environment
- The project uses Jest's built-in coverage reporting
- Babel is set up to transform modern JavaScript code for compatibility

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JeremichShane-FS/wai-unit-testing-assignment.git
   cd wai-unit-testing-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## 🔍 Testing

The project includes test coverage using Jest. Tests include:

- Positive test cases for valid credit card numbers
- Negative test cases for invalid inputs
- Edge cases for length validation

## 💻 Usage

### obscureCard(str)

Obscures a credit card number, showing only the last 4 digits.

Parameters:

- `str` (string): Credit card number (12-16 digits)

Returns:

- (string): Obscured credit card number or error message

Example:

```javascript
import { obscureCard } from "./creditCard.js";

console.log(obscureCard("1234567890123456")); // "************3456"
```

## 📂 Project Structure

```
└── 📁Testing_Assignment
    └── 📁src
        └── 📁credit-card
            └── creditCard.js
            └── creditCard.test.js
    └── .babelrc
    └── .gitignore
    └── package.json
    └── README.md
```

## 📝 License

[MIT License](https://choosealicense.com/licenses/mit/)

[⬆️ Back to Top](#-table-of-contents)
