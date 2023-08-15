describe('spec', () => {
  it('should visit', () => {
    cy.visit('/')
  })
  it('should have a title', () => {
    cy.visit('/')
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="headerTitle"]').should('have.text', 'ARMAGEDDON 2023')
  })
  it('should change distance', () => {
    cy.visit('/')
    cy.get('[data-cy="inKm"]').should('be.visible').click()
    cy.get('[data-cy="distance"]')
      .should('be.visible')
      .should('include.text', 'км')
    cy.get('[data-cy="inLunar"]').should('be.visible').click()
    cy.get('[data-cy="distance"]')
      .should('be.visible')
      .should('include.text', 'лунны')
    cy.get('[data-cy="inKm"]').should('be.visible').click()
    cy.get('[data-cy="distance"]')
      .should('be.visible')
      .should('include.text', 'км')
  })
  it('should have a cart', () => {
    cy.visit('/')
    cy.get('[data-cy="cartText"]')
      .should('be.visible')
      .should('have.text', 'Корзина 0 астероида')
    cy.get('[data-cy="cart"]').should('be.visible')
    cy.get('[data-cy="cartBtn"]').should('have.text', 'Отправить')
  })
  it('should add to the cart', () => {
    cy.visit('/')
    cy.get('[data-cy="addToCartBtn"]').first().should('have.text', 'ЗАКАЗАТЬ')
    cy.get('[data-cy="addToCartBtn"]')
      .first()
      .click()
      .should('have.text', 'В КОРЗИНЕ')
    cy.get('[data-cy="cart"]').should('be.visible')
    cy.get('[data-cy="cartText"]')
      .should('be.visible')
      .should('have.text', 'Корзина 1 астероида')
    cy.get('[data-cy="cartBtn"]').should('have.text', 'Отправить').click()
    cy.get('[data-cy="footer"]')
      .should('be.visible')
      .should('have.text', '© Все права и планета защищены')
  })
  it('should have an asteroid page', () => {
    cy.visit('/')
    cy.get('[data-cy="asteroidLink"]').should('be.visible').first().click()
    cy.get('[data-cy="goBackLink"]')
      .should('be.visible')
      .should('have.text', 'Назад')
    cy.get('[data-cy="asteroidName"]').should('be.visible')
  })
})
