describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays welcome title', () => {
    cy.get('h1')
    .contains('Hello there!');
  })
  it('renders LinkedIn link', () => {
    cy.get('.linkedin')
    .contains('LinkedIn')
  })
})
