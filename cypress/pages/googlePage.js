class googlePage {

    static visitGoogle() {
        cy.visit('https://www.google.com/');
    }

    static fillTheField(text) {
        cy.get('input[name="q"]').type(text);
    }

    static screenshot() {
        cy.screenshot({ captures: 'fullPage'});
    }
}

export default googlePage