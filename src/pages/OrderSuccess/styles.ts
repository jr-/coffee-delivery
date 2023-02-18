import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 1.5rem;

> div {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;
export const Content = styled.div`
  gap: 102px;

`;

export const ContainerInfo = styled.div`
`;
export const Message = styled.div``;
export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${props => props.theme.yellowDark};
`;
export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.baseSubtitle};
  font-stretch: 100;
`;
export const OrderInfosContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#FAFAFA, #FAFAFA), linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  margin-top: 2.5rem;
`;
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  div:first-child {
    svg {
      width: 16px;
      height: 16px;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;
    border-radius: 1000px;
  }

  div:nth-child(2) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme.baseText};
  }

  :nth-child(1) {
    div:first-child {
      svg {
        color: ${props => props.theme.white};
      }
      background: ${props => props.theme.purple};
    }
  }
  
  :nth-child(2) {
    div:first-child {
      svg {
        color: ${props => props.theme.white};
      }
      background: ${props => props.theme.yellow};
    }
  }
  
  :nth-child(3) {
    div:first-child {
      svg {
        color: ${props => props.theme.white};
      }
      background: ${props => props.theme.yellowDark};
    }
  }
`;
