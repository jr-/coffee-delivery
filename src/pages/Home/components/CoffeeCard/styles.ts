import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.baseCard};
  border-radius: 6px 36px;
  padding: 0 1.25rem;
  img {
    margin-top: -1.25rem;
    width: 120px;
    height: 120px;
  }

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme.baseSubtitle};
    margin-top: .75rem;
  }
`

export const CoffeeImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  margin-top: .5rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    width: 81px;
    height: 21px;

    background: ${props => props.theme.yellowLight};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${props => props.theme.yellowDark};
  }

`

export const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  flex: 1;
  margin-top: 1rem;
  text-align: center;
  color: ${props => props.theme.baseLabel};
`

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 38px;
  height: 38px;

  background: ${props => props.theme.purpleDark};
  border-radius: 6px;

  transition: .3s;

  :hover:not(:disabled) {
    background: ${props => props.theme.purple};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    color: ${props => props.theme.white};
  }

`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const FooterCard = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-left: 0.25rem;
  padding-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;

text-align: right;


color: ${props => props.theme.baseText};

strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    text-align: right;
  }
`
