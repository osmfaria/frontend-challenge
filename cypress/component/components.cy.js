import MainButton from '../../src/components/Button'
import Header from '../../src/components/Header'
import calculator from '../../src/assets/icon-calculator.svg'
import SwitchInput from '../../src/components/SwitchInput'

describe('<MainButton>', () => {
  it('mounts', () => {
    cy.mount(
      <MainButton src={calculator} alt='teste'>
        teste
      </MainButton>
    )

    cy.contains('teste').should('exist')
  })

  it('supports image prop lo load in the button', () => {
    const imgSelector = "[alt='button icon']"

    cy.mount(<MainButton src={calculator} alt='teste'></MainButton>)
    cy.get(imgSelector).should('exist')
  })
})

describe('<Header>', () => {
  it('mounts', () => {
    cy.mount(<Header />)

    const imgSelector = "[alt='app logo']"

    cy.contains('Simule app').should('exist')
    cy.get(imgSelector).should('be.visible')
  })
})

describe('<SwitchInput>', () => {
  it('mounts', () => {
    cy.mount(
      <SwitchInput type='text' placeholder='teste padrão' register={() => {}} />
    )
    const inputSelector = "[placeholder='teste padrão']"
    cy.get(inputSelector).should('be.visible')
  })

  it('mounts on mode curency', () => {
    cy.mount(
      <SwitchInput
        placeholder='teste currency'
        mode='currency'
      />
    )
    const inputSelector = "[placeholder='teste currency']"
    cy.get(inputSelector).should('be.visible')
  })
})
