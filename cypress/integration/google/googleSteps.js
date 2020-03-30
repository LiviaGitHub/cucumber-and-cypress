import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Google", () => {
    cy.visit('https://www.google.com/');
})

When("I write Coronavirus Quarentena in the google field", () => {
    cy.get('input[name="q"]').type('Coronavirus Quarentena');
})