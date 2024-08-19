/// <reference types="Cypress"/>

describe('Buscar por `shirt` no menu superior e clicar no último resultado sugerido', () => {
    it('Último resultado da página', () => {
        cy.login_teste('juniorsilva2309@hotmail.com','Jessica0803@@')
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain','Welcome, Francisco Junior!')

        //Ir para Home Page
        cy.get('.logo > img').click()
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('#ui-id-3 > span').click()
        cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(':nth-child(12) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.base').should('contain','Mona Pullover Hoodlie')
    });
});