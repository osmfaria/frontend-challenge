import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 400px;
  flex-grow: 1;
`

export const Container = styled.div`
  position: relative;
  min-height: 548px;
  padding: 25px 50px 30px;
  border: 1px solid var(--pink);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  box-sizing: border-box;

  z-index: 1000;

  .icon-box {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 15px;
    border-radius: 50%;
    padding: 2px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: var(--grey);
    }
  }
  .icon-box__nextpage {
    position: absolute;
    right: 40%;
    bottom: 40px;

    background-color: var(--grey);
    border-radius: 50%;
    height: 60px;
    width: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 630px) {
      display: none;
    }
  }

  @keyframes scroll {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
    to {
      transform: translateY(-0px);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .icon-box__nextpage {
      animation: scroll 1s infinite ease-in-out;
      animation-iteration-count: 2;
    }
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 40px;

  .card-title {
    margin: none;
    color: var(--silver);
    font-size: 1.2rem;
    margin-left: 6px;
  }

  .card-img {
    height: 26px;
  }
`
