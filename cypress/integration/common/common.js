import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep ('I want to wait for {int} seconds', time => {
    cy.wait(time);
})