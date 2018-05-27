# RoClicker

Cracking the formula of a popular game through test-driven development

## Getting started
```bash
npm install
```

## Running tests on the server
```bash
npm test
```

## Running tests on the browser
* open test_browser/test.html

## About the testing setup
Browsers do not support require(). In order to use the same test file for server and browser, I required the dependencies with a try/catch in test/test.js

* The server will grab the dependencies from the try/catch in test/test.js

* The browser will grab the dependencies from the test_browser/bundle.js

* In order to update the bundle, I run the command npm run browserify, which updates the dependencies from the test/test.js