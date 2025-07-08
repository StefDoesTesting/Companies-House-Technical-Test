
# Companies House Technical Text

## About

A project that uses Playwright along with the Page Object Model and is writtern in TypeScript.

## Tools

### Install Node.js v22.17.0
1. Download from https://nodejs.org/en/download
2. Follow steps to install

### Install VS Code 1.101.2
1. Download from https://code.visualstudio.com/download
2. Move downloaded file from Downloads to Applications (endsure it is closed otherwise you will not be able to move it)

### Install Playwright Test for VSCode 1.1.15
1. In VS Code open extentions
2. Search for Playwright
3. Install Microsoft Playwright extention

## Setup
1. clone repo
        
        git clone https://github.com/StefDoesTesting/Companies-House-Technical-Test
        cd Companies-House-Technical-Test

2. install dependaceys

        npm install

3. run tests

        npx playwright test

4. View report

        npx playwright show-report


## Future Improvments

Use translation keys for strings in locators
- Not currently possible, as the test framework is not part of the codebase for the service under test.

Spike for using Playwright-BDD, so the tests can be writtern in the Gurkin syntax
- Not done at this time, as this was a timeboxed task.

Helper method to wrap .tap and .click together and uses the browser config to know which one to use.