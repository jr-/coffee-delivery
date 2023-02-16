import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;

    :hover + div {
      background: ${props => props.theme.baseHover};
      color: ${props => props.theme.baseSubtitle};
    }

    :checked + div {
      background: ${props => props.theme.purpleLight};
      border-color: ${props => props.theme.purple};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem;
  background: ${props => props.theme.baseButton};
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: .3s;
    
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
  }
`;