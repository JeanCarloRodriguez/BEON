describe('Beon', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('https://beon.studio/')
    })

    it('Verify Business been filtered by "Computer Software"', () => {
        cy.get('.join-us').click()
        cy.get('.form-select').eq(1).select('Computer Software')
        cy.get('.job-offer.row .job-offer__details').each($element => {
            cy.wrap($element).find('span').eq(0).should('have.text', 'Computer Software')
        })
    })
})
