/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
       cy.visit('minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('Igorkaue7@gmail.com')
        cy.get('#password').type('Igorkaue4578.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, igorkaue7 (não é igorkaue7? Sair)')

    })

    it ('deve exibiruma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('Igorkaue@gmail.com')
        cy.get('#password').type('Igorkaue4578.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir uma mensagem de erro ao exibir uma senha invalida', () => {
        cy.get('#username').type('Igorkaue7@gmail.com')
        cy.get('#password').type('Igorkaue48.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail Igorkaue7@gmail.com está incorreta. ')
    });

    it('deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, igorkaue7 (não é igorkaue7? Sair)')
    });
     
    it('deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture('perfil').then(dados =>{
        cy.get('#username').type(dados.usuario, {log:false})
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, igorkaue7 (não é igorkaue7? Sair)')
        })
    });

    it('deve fazer login com sucesso - usando comandos costumizados', () => {
        cy.login('Igorkaue7@gmail.com', 'Igorkaue4578.')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, igorkaue7 (não é igorkaue7? Sair)')

    });
})