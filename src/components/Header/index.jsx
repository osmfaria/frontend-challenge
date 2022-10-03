import { Container, Item } from "./styles"

const Header = () => {

    return (
      <Container>
        <Item>
          <img src='./calculator.svg' alt='app logo' />
          <h1>Simule app</h1>
        </Item>
      </Container>
    )
}

export default Header