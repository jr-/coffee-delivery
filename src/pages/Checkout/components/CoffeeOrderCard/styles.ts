import styled from 'styled-components'

export const CoffeeOrderCardContainer = styled.div`
  padding: .5rem .25rem;
  display: flex;
  order: row;
  align-items: flex-start;
  justify-content: space-between;
  background: ${props => props.theme.baseCard};
`;

export const Info = styled.div`
  display: flex;
  order: row;
  gap: 1.25rem;
`;

export const Actions = styled.div`
  display: flex;
  order: row;
  align-items: center;
  gap: .5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: 0 .5rem;
  background: ${props => props.theme.baseButton};
  border-radius: 6px;
  height: 2rem;
  text-transform: uppercase;
  font-size: .75rem;
  color: ${props => props.theme.purple};
  transition: .3s;
  border: none;
  
  span {
    color: ${props => props.theme.baseText};
    transition: .3s;
  }

  :hover {
    background: ${props => props.theme.baseHover};
    
    span {
      color: ${props => props.theme.baseSubtitle};
    }
  }
`;

export const Price = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;

display: flex;
align-items: center;

color: ${props => props.theme.baseSubtitle};
`;