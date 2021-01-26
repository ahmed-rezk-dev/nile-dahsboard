/// <reference types="cypress" />

describe('Login page', () => {
    it('Open login', () => {
        cy.visit('http://localhost:3000/login');
    });

    it('Should have email input', () => {
        cy.get('#email').clear();
        cy.get('#email').type('test@test.com{enter}');
    });
});
