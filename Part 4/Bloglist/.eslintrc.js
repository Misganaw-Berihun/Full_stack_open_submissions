// .eslintrc.js

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018, // You can adjust this based on your target Node.js version
  },
  rules: {
    // Possible Errors
    // Stylistic Issues
    'indent': ['error', 2], // Use 2-space indentation
    'quotes': ['error', 'single'], // Use single quotes for strings
    'semi': ['error', 'always'], // Require semicolons at the end of statements
    'no-trailing-spaces': 'error', // Disallow trailing spaces
    'eol-last': 'error', // Require a newline at the end of the file

    // Variables
    'no-var': 'error', // Use let or const instead of var
    'prefer-const': 'error', // Prefer const for variables that don't reassign values

    // ES6 Features
    'arrow-parens': ['error', 'always'], // Require parentheses around arrow function parameters

    // Node.js/CommonJS
    'global-require': 'error', // Enforce require() at the top-level module scope
    'no-path-concat': 'error', // Disallow string concatenation when using __dirname and __filename

    // Best Practices
    'eqeqeq': 'error', // Require strict equality (=== and !==)
    'no-else-return': 'error', // Disallow unnecessary else blocks
    'no-multi-spaces': 'error', // Disallow multiple consecutive spaces

    // Comments
    'multiline-comment-style': ['error', 'starred-block'], // Use starred block comments for multiline comments

    /*
     * Additional Plugins (if needed)
     * You can add additional ESLint plugins and rules here
     */

    // Customize rules based on your project needs
  },
};

