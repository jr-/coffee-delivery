import styled from 'styled-components'

export const Container = styled.div`` 
export const Content = styled.div``
export const OrderInfos = styled.div``
export const OrderAddressContainer = styled.div``
export const OrderAddressHeader = styled.div``
export const InputsContainer = styled.div``
export const OrderPaymentContainer = styled.div``
export const OrderPaymentHeader = styled.div``
export const PaymentOptions = styled.div``
export const OrderSummaryContent = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${props => props.theme.baseSubtitle};
  }

`
export const OrderSummary = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme.baseCard};
  border-radius: 6px 44px;
  display: grid;
  gap: 1.5rem;
`;
export const OrderTotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    :not(:last-child) {
      p:first-child {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;

        display: flex;
        align-items: center;
        text-align: right;

        color: ${props => props.theme.baseText};
      }
    }

    :last-child {
      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;

        display: flex;
        align-items: center;
        text-align: right;

        color: ${props => props.theme.baseSubtitle};
      }
    }
  }
`
export const ConfirmOrderButton = styled.div`
  background: ${props => props.theme.yellow};
  display: grid;
  place-items: center;
  padding: 0 .5rem;
  height: 2.875rem;
  width: 100%;
  border-radius: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;

  color:${props => props.theme.white};
  font-stretch: 100;
  transition: 0.3s;

  :hover:not(:disabled) {
    background: ${props => props.theme.yellowDark};
  }
  
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`

export const Separator = styled.hr`
  border: 1px solid ${props => props.theme.baseButton};
`;