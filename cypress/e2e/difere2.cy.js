/// <reference types="Cypress"/>


describe('Teste E2E - Criar uma conta na tela de Login/Cadastro', () => {
    it('Fluxo para criar uma conta', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > :nth-child(3) > a').click()
        //cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.base').should('contain','Create New Customer Account')
        cy.get('#firstname').type("Augusto")
        cy.get('#lastname').type("Teste")
        //Temos que inserir um e-mail diferente para criar uma conta
        cy.get('#email_address').type("direitojessica2014@gmail.com")
        cy.get('#password').type("Teste@@123")
        cy.get('#password-confirmation').type("Teste@@123")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div').should('contain','Thank you for registering with Main Website Store.')
        
    });

    it('Fluxo para criar uma conta com e-mail existente', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > :nth-child(3) > a').click()
        //cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.base').should('contain','Create New Customer Account')
        cy.get('#firstname').type("Augusto")
        cy.get('#lastname').type("Teste")
        cy.get('#email_address').type("juniorsilva2309@hotmail.com")
        cy.get('#password').type("Teste@@123")
        cy.get('#password-confirmation').type("Teste@@123")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-error > div').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    });
});