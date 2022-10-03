describe('calculate', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept('POST', '', {
      statusCode: 200,
      body: {
        1: 1714560,
        15: 1767200,
        30: 1823600,
        90: 1880000,
      },
    })
  })

  it('Should enter the landing page and get calculation results', () => {
    cy.get("input[placeholder='digite o valor']").type('20000')
    cy.get("input[placeholder='digite número de parcelas']").type('2')
    cy.get("input[placeholder='digite o percentual']").type('6')

    cy.contains('Calcular').click()

    cy.get('.card-title').should('contain.text', 'Resultados')
    cy.contains('R$ 17.145,60').should('exist')
    cy.contains('R$ 17.672,00').should('exist')
    cy.contains('R$ 18.236,00').should('exist')
    cy.contains('R$ 18.800,00').should('exist')
  })

  it('Should be able to return to the main form', () => {
    cy.get("input[placeholder='digite o valor']").type('20000')
    cy.get("input[placeholder='digite número de parcelas']").type('2')
    cy.get("input[placeholder='digite o percentual']").type('6')

    cy.contains('Calcular').click()

    cy.get('.icon-right').click()

    cy.contains('Simule sua Antecipação').should('exist')
  })

  it('Should be able to return results for custom list of days', () => {
    cy.intercept('POST', '', {
      statusCode: 200,
      body: {
        30: 1823600,
        60: 1880000,
        90: 1880000,
        120: 1880000,
        150: 1880000,
        180: 1880000,
        210: 1880000,
      },
    })

    cy.get("input[placeholder='digite o valor']").type('20000')
    cy.get("input[placeholder='digite número de parcelas']").type('2')
    cy.get("input[placeholder='digite o percentual']").type('6')

    cy.contains('Calcular').click()

    cy.contains('Em 30 dias').should('exist')
    cy.contains('Em 60 dias').should('exist')
    cy.contains('Em 90 dias').should('exist')
    cy.contains('Em 120 dias').should('exist')
    cy.contains('Em 150 dias').should('exist')
    cy.contains('Em 180 dias').should('exist')
    cy.contains('Em 210 dias').should('exist')
  })

  it('Should show error for invalid input', () => {
    cy.get("input[placeholder='digite o valor']").type('100')
    cy.get("input[placeholder='digite número de parcelas']").type('13')
    cy.get("input[placeholder='digite o percentual']").type('101')

    cy.contains('Calcular').click()

    cy.contains('*o menor valor aceito é R$1000,00').should('exist')
    cy.contains('*não deve ser maior do que 12').should('exist')
    cy.contains('*deve ser menor ou igual a 100').should('exist')
  })

  it('Should not load resutls with invalid input', () => {
    cy.get("input[placeholder='digite o valor']").type('100')
    cy.get("input[placeholder='digite número de parcelas']").type('13')
    cy.get("input[placeholder='digite o percentual']").type('101')

    cy.contains('Calcular').click()

    cy.contains('Resultados').should('not.exist') 
  })
})
