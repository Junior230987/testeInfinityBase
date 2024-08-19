/// <reference types="Cypress"/>


describe('Teste E2E - Adicionar comentário em um produto **aleatório** do catálogo de moda masculina no carrinho', () => {
    it('Fluxo Adcionando comentário', () => {
        cy.login_teste('juniorsilva2309@hotmail.com','Jessica0803@@')
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain','Welcome, Francisco Junior!')

        //Ir para Home Page
        cy.get('.logo > img').click()
        // clicar em Men>Tops>Jackets>Reviews 
        cy.get('#ui-id-5 > :nth-child(2)').click()
        cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#tab-label-reviews-title').click()
        cy.get('.legend > strong').should('contain','Proteus Fitness Jackshirt')
        cy.get('legend.label > span').should('contain','Your Rating')
        cy.get('#Rating_rating_label > span').should('contain','Rating')
        cy.contains('button','Rating_1_label').click
        cy.get('#Rating_2_label').click
        cy.get('#Rating_3_label').click
        cy.get('#Rating_4_label').click
        cy.get('#Rating_5_label').click
        cy.get('#nickname_field').type("Francisco")
        cy.get('#summary_field').type("Comentar")
        cy.get('#review_field').type("Aqui faremos um comentário para o teste")
        cy.get('.Submit Review').click
        cy.get('.message-success > div').should('contain','You submitted your review for moderation.')
    });
});