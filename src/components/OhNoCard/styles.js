import styled from 'styled-components'
import space from '../../assets/galaxy.svg'

export const MainContainer = styled.div`
  max-width: 400px;
  flex-grow: 1;
`

export const Container = styled.div`
  position: relative;
  min-height: 548px;
  max-width: 400px;

  padding: 25px 50px 30px;
  border: 1px solid var(--pink);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${space}) no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  box-sizing: border-box;

  flex-grow: 1;

  h1 {
    font-family: 'Bungee Spice', sans-serif;
    margin: 0 auto 50px;
    font-size: 4rem;
  }

  .card-title {
    margin: 14px auto;
    color: var(--silver);
    font-size: 2.1rem;
  }

  @keyframes floating {
    from {
      transform: translateY(0px);
    }
    65% {
      transform: translateY(15px);
    }
    to {
      transform: translateY(-0px);
    }
  }

  .astrounaut {
    height: 200px;
  }

  @media (prefers-reduced-motion: no-preference) {
    .astrounaut {
      animation: floating 3s infinite ease-in-out;
    }
  }
`


