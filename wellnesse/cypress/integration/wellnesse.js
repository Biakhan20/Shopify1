/// < reference types = "cypress" />


it('wellnesse ORAL CARE' , function(){

    cy.visit('https://wellnesse.com')
    cy.wait(10000)
    cy.get('.klaviyo-close-form').click()
    cy.get('#Slide-template--15569957519413__cf92db04-9fec-42e1-ab9e-d70cbd404869-1 > div > div > div > div > a').eq(0).click({force:true})
    cy.get('#bundler--product-card-- > div.bundler--product-card-bottom > div:nth-child(2) > div:nth-child(2) > a').eq(0).click({force:true})
    cy.contains('Buy Once').click({force:true})
    cy.get('.product-form__buttons .button--primary').eq(0).click({force:true})
    cy.wait(5000)
    cy.get('.ocu-decline').click({force:true})
    cy.wait(5000)
    cy.get('.insurance-type').click({force:true})
    cy.get('.ajax-cart-checkout').click({force:true})
    cy.get('.n8k95w1').should('contain', 'Delivery')
})
