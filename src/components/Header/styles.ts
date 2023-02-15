import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 6.5rem;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.baseBackground};
  z-index: 99;
`

export const Content = styled.header`
  width: min(1120px, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  a {
      display: flex;
      gap: 0.5rem;
      a {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme['gray-100']};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        &:hover {
          border-bottom: 3px solid ${(props) => props.theme['green-500']};
        }
        &.active {
          color: ${(props) => props.theme['green-500']};
        }
      }
    }

`

export const Location = styled.div`
  background: ${(props) => props.theme.purpleLight};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;
  svg {
    color: ${(props) => props.theme.purple};
    
  }

  span {
    color: ${(props) => props.theme.purple};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    width: 101px;
    height: 18px;
  }
`

export const RightHeaderDiv = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 193px;
  height: 38px;
`

export const Cart = styled.div`
  display: grid;
  place-items: center;
  padding: .5rem;
  padding: 8px;

  background: ${(props) => props.theme.yellowLight};
  border-radius: 6px;
  position: relative;
  svg {
    color: ${(props) => props.theme.yellow};
  }

  span {
    position: absolute;
    top: -.5625rem;
    right: -.5625rem;

    display: grid;
    place-items: center;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${(props) => props.theme.yellowDark};
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 700;
  }

`