import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme.baseTitle};
  }

  button {
    border: 0;
    background: ${(props) => props.theme.baseButton};
    svg {
      display: grid;
      place-items: center;
      background: transparent;
      color: ${(props) => props.theme.purple};
      
    }
  }
`