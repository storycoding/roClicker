# RoClicker

Cracking the formula of a popular game through test-driven development

## Install all the necessary devDependencies
```bash
npm install
```

## Running tests on the server
```bash
npm test
```

## Running tests on the browser
```bash
npm run mocha-client
```
## Updating the bundle.js
```bash
npm run browserify
```

## About the testing setup
Browsers do not support require(). In order to use the same test file for server and browser, I required the dependencies with a try/catch in test/test.js

* The server will grab the dependencies from the try/catch in test/test.js

* The browser will grab the dependencies from the test_browser/bundle.js