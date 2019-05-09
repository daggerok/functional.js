describe('hello', () => { // mocha: describe
  it('should say hello and test that true is true', () => { // mocha: it
    console.log('hello!');
    expect(true).to.equal(true); // chai: expect
  });

  it('should test google search', () => {
    // given:
    cy.visit('https://google.com');
    // when:
    cy.contains('Google');
    // and
    cy.get('input[name="q"]')
      .type('cypress is awesome!')
      .type('{enter}');
    // then
    cy.get('div#search div.srg div.g')
      .should('be.visible')
      //.should(have.length', 9)
      .should($divs => {
        expect($divs, 'at least 9 items').to.have.length.gte(9)
      });
  });
});
