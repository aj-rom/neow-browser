
describe('Page Loads', () => {
    it('should have a valid route', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '/feed',
            }, []
        ).as('getFeedPage')
    })

    it('should load header content', () => {
        cy.visit('http://localhost:3000/feed')

        cy.get('h1').contains('Feed')
    })
})