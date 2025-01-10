# Credit Card Validation Testing Project

A JavaScript module for obscuring credit card numbers with test coverage using Jest.

## 📑 Table of Contents

- Credit Card Validation Testing Project
  - [✨ Features](#-features)
  - [🛠️ Technologies](#️-technologies)
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
