describe('Evoke Test', () => {
    beforeEach(() => {
        cy.visit('https://www.central.co.th/th');
        cy.viewport(1280, 800);
    });
    it('Home Test', () => {
        cy.get('#autocomplete-0-input')
        .type("Speaker{enter}")
        cy.get('[data-testid="btn-viewSearchFilterOnFilterBrand"]')
        .click()
        cy.wait(2000)
        //search marshall
        cy.get('[data-testid="lst-viewFilterDropdownButtonOnDropdownBrand"] > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-searchBox > .ais-SearchBox > .ais-SearchBox-form > .ais-SearchBox-input')
        .click().type("Marshall")
        cy.get('[data-testid="lst-viewFilterDropdownButtonOnDropdownBrand"] > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-list > .ais-RefinementList-item > :nth-child(1) > .ais-RefinementList-label > .box')
        .click()
        cy.get('[data-testid="lst-viewFilterDropdownButtonOnDropdownBrand"] > .ais-Panel > .ais-Panel-footer > .panel-actions > .show-results')
        .click()
        //choose color
        cy.get('.FilterDropdownView__StyledContainer-sc-jvuug9-0.color-dropdown > [data-testid="btn-viewSearchFilterOnFilterColor"]')
        .click()
        cy.get('.FilterDropdownView__StyledContainer-sc-jvuug9-0.color-dropdown > [data-testid="btn-viewSearchFilterOnFilterColor"] > [data-testid="lst-viewFilterDropdownButtonOnDropdownColor"] > .ais-Panel > .ais-Panel-body > :nth-child(1) > .ais-RefinementList > .ais-RefinementList-list > :nth-child(1) > :nth-child(1) > .ais-RefinementList-label > .color-preview')
        .click()
        cy.get('.FilterDropdownView__StyledContainer-sc-jvuug9-0.color-dropdown > [data-testid="btn-viewSearchFilterOnFilterColor"] > [data-testid="lst-viewFilterDropdownButtonOnDropdownColor"] > .ais-Panel > .ais-Panel-footer > .panel-actions > .show-results')
        .click()
        // find the product
        cy.contains("Kilburn II").click()
        cy.url({ decode: true }).should('contain', "central.co.th/th/marshall-bluetooth-speaker-black-and-brass-kilburn-ii-mkp1524208")
        // add to cart
        cy.get('.add-to-cart').click()
        cy.wait(2500)
        cy.get('[data-testid="btn-viewCart-bag"] > .icon').click()
        // validate the item added
        cy.get('.spc-product-card').should("contain", "MARSHALL")
        .and("contain", "Black").and("contain", "Kilburn II")
        cy.get('.spc-product-card__card-quantity').should("contain", "1")
    });

});

