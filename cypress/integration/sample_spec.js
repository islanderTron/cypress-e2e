describe('My First Test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true)
    cy.visit('/')

    cy.contains('Test').dblclick()
    cy.get('p')
    .should(($p) => {
      expect($p).to.contain("2 Time Clicked")
    })
  })
})