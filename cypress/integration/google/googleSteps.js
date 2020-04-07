import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import googlePage from '../../pages/googlePage';

Given("I open Google", () => {
    googlePage.visitGoogle();
})

When("I write Coronavirus in the google field and press enter", () => {
    googlePage.fillTheField('Coronavirus {enter}');
})

Then("Capture all page", () => {
    googlePage.screenshot();
    //cy.get('header').screenshot();
})

When("I scroll to the Next button", () => {
    cy.wait(2000);
    // to scroll down and up
    cy.get('#pnnext').scrollIntoView();
})

When('I create a Json file', () => {
    // I can be newUser.txt as well
    cy.writeFile('newUser.json', {name: 'Mike', age: 33})
    //to read the file
    cy.readFile('newUser.json').its('age').should('eq', 33);
    // It can be .its('contentype').should('eq', 'text/html')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
})