/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        .first()
        .click()
        cy.get('.single_add_to_cart_button').should('exist')
        
    });
});