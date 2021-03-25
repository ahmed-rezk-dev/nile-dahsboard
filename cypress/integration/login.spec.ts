/// <reference types="cypress" />

describe('Login page', () => {
    it('Open login', () => {
        cy.visit('http://localhost:3000/login');
    });
});

describe('Password incorrect', () => {

    it('Email input validation error', () => {
        cy.get('#email').clear();
        cy.get('#email').type('test@test.com');
    });

    it('Should have password input', () => {
        cy.get('#password').clear();
        cy.get('#password').type('123456');
    });

    it('Should have Login button', () => {
        cy.get('[data-test-id="login-button"]').click();
    });

    it('Login button be disabled', () => {
        cy.get('[data-test-id="login-button"]').should("be.disabled");
    });

    it('Should have loading spinner', () => {
        cy.get('.ant-btn-loading-icon').should('be.visible');
    });

    it('Should show alert message', () => {
       cy.get('.ant-message').contains("Password not correct!").should('be.visible')
    })
})

describe('User should be not exist', () => {

    it('Email input validation error', () => {
        cy.get('#email').clear();
        cy.get('#email').type('ahmed@test.com');
    });

    it('Should have password input', () => {
        cy.get('#password').clear();
        cy.get('#password').type('password');
    });

    it('Should have Login button', () => {
        cy.get('[data-test-id="login-button"]').click();
    });

    it('Login button be disabled', () => {
        cy.get('[data-test-id="login-button"]').should("be.disabled");
    });

    it('Should have loading spinner', () => {
        cy.get('.ant-btn-loading-icon').should('be.visible');
    });

    it('Should show alert message', () => {
       cy.get('.ant-message').contains("User is not exist!").should('be.visible')
    })
})

describe('Login Successes', () => {
    it('Email input validation error', () => {
        cy.get('#email').clear();
        cy.get('#email').type('test.test.com');
    });
    
    it('Should have email input', () => {
        cy.get('#email').clear();
        cy.get('#email').type('test@test.com');
    });

    it('Should have password input', () => {
        cy.get('#password').clear();
        cy.get('#password').type('password');
    });

    it('Should have Login button', () => {
        cy.get('[data-test-id="login-button"]').click();
    });

    it('Login button be disabled', () => {
        cy.get('[data-test-id="login-button"]').should("be.disabled");
    });

    it('Should have loading spinner', () => {
        cy.get('.ant-btn-loading-icon').should('be.visible');
    });
});