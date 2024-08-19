/// <reference types="Cypress"/>

describe('TesteFuncional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('juniorsilva2309@hotmail.com','Jessica0803@@')
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain','Welcome, Francisco Junior!')
        cy.get('.block-dashboard-info > .block-title > strong').should('contain','Account Information')
    });

        it('Validando Login Incorreto', () => {
            cy.login_teste('juniorsilva2309@teste','Jessica0803@@')
            cy.get('#email-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')

        });

        it('Validando Senha Incorreta', () => {
            cy.login_teste('juniorsilva2309@hotmail.com','Teste123')
            cy.get('.message-error > div').should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')

        });
});