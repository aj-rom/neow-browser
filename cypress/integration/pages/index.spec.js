
describe('Page Loads', () => {
    it('should have a valid route', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '/',
            }, []
        ).as('getHomePage')
    })
    it('should load header content', () => {
        cy.visit('http://localhost:3000')

        cy.get('h1').contains('Browser')
    })

    it('should include credits in footer', () => {
        cy.get('footer').contains('SpaceRocks')
        cy.get('footer').contains('A.J. Romaniello')
    })
})


describe('can load feed data.', () => {

})