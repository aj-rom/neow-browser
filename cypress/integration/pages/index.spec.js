
describe('Page Loads', () => {
    it('should load header content', () => {
        cy.visit('http://localhost:3000')

        cy.get('h1').contains('NeoW Browser')
    })

    it('should should have today\'s NEO as the starter', () =>  {
        cy.contains(Date.now())
    })

    it('should include credits in footer', () => {
        cy.get('footer').contains('SpaceRocks')
        cy.get('footer').contains('A.J. Romaniello')
        cy.get('footer').contains('Vercel')
    })
})