# cypress-bug
Showcase example for a bug in newer Cypress versions

## What is the Problem? 
testing angularjs code fails after updating cypress from 9.1.1 to 9.3.1, 9.4.1 or 9.5.0.

Inside the app there is a test where changing the route state calls angular-ui-router.min.js, which then calls angular-animate.min.js.
Some components of the application cannot be re-rendered, and it's not possible to interact with them anymore.
Some actions like "chaning of a tab" that would usually close the components did'nt do so, the broken parts stay on screen.

It works when done manually and works with cypress:9.1.1.
It fails regardless of headless mode with Electron and Chrome

## How to try it out?
This setup uses cypress 9.5.0
* Have node installed
* Go to `./project`
* run `npm i`
* run `npm run cypress:open`
* see that the test fails
* downgrade to cypress 9.1.1
* run again
* see that the test succeeds
