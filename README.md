# cypress-bug
Showcase example for a bug in newer Cypress versions

## What is the Problem? 
testing angularjs code fails after updating cypress from 9.1.1 to 9.3.1, 9.4.1 or 9.5.0.

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
