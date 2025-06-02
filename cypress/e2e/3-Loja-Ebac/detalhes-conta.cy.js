/// <reference types="cypress" />

describe('funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
        cy.login(login.usuario, login.senha)
        })
        
    });

it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('igor', 'Kauê', 'Igorkaue7')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});
});