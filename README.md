
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
1. Clone repo
        
        git clone https://github.com/StefDoesTesting/Companies-House-Technical-Test
        cd Companies-House-Technical-Test

2. Install dependaceys

        npm install

3. Run tests

        npx playwright test

4. View report

        npx playwright show-report


## Future Improvments

Use translation keys for strings in locators
- Once source of truth
- Not currently possible, as the test framework is not part of the codebase for the service under test.

Spike for using Playwright-BDD, so the tests can be writtern in the Gurkin syntax
- Adds extra complexisity but allows tests to be writtern in an understandable way for all stakeholders.
- Not done at this time, as this was a timeboxed task.

Helper method to wrap .tap and .click together and uses the browser config to know which one to use.
- Not sure if this would even work tbh, but from previous experience this would make writing cross platform tests simpler.

## Bugs

500 error when booking a room
- does not happen everytime

Steps:
1. Scroll down to "Our Rooms"
2. Select a room
3. Click on "Reserve Now"
4. Enter Bookign details and click "Reserve Now"
5. Error is thrown

Proposed action if issue on production:
- Check Logs.
- If there is no logs enable/add them
- As this is a production issue effecting booking, this is a tear 1 incident.
Level: Critical

Proposed action if issue only on test env:
- Check logs.
- If there is no logs enable/add them.
- Keep an eye on CI to ensure that it is not cuasing an issue there and making tests fail.
- Consider mocking endpoints.
Level: low/medium