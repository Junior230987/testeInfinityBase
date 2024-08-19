/// <reference types="Cypress"/>


describe('Teste E2E - Adicionar um produto **aleatório** do catalogo de moda masculina no carrinho', () => {
    it('Fluxo de Compra de produtos', () => {
        cy.login_teste('juniorsilva2309@hotmail.com','Jessica0803@@')
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain','Welcome, Francisco Junior!')

        //Ir para Home Page
        cy.get('.logo > img').click()
        // clicar em Men>Tops>Jackets>Size>Collor>Add to Cart 
        cy.get('#ui-id-5 > :nth-child(2)').click()
        cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button > span').click()
        cy.get('.message-success > div').should('contain','You added Proteus Fitness Jackshirt to your shopping cart.')
        cy.get('.showcart').click()
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        cy.get('.base').should('contain','Shopping Cart')

        
    });
});