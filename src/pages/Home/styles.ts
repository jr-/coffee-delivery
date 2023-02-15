import styled from 'styled-components';
import introBackground from '../../assets/intro-background.svg';

export const Main = styled.div`
`

export const IntroContainer = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  max-height: 476px;
  padding-top: 94px;
  padding-bottom: 94px;
  background: url(${introBackground}) no-repeat center;
  background-size: cover;

  > div {
    width: min(1120px, 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  h1 {
    font-family: 'Baloo 2';
    font-size: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${props => props.theme.baseTitle};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    font-stretch: 100;
    color: ${props => props.theme.baseTitle};
  }
`

export const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0.4rem;
  margin-top: 4rem;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: ${props => props.theme.baseText};
  }

  svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 1000px;
  }

  &:nth-child(1) {
    svg {
      background: ${props => props.theme.yellowDark};
    }

  }

  &:nth-child(2) {
    svg {
      background: ${props => props.theme.baseText};
    }

  }

  &:nth-child(3) {
    svg {
      background: ${props => props.theme.yellow};
    }

  }

  &:nth-child(4) {
    svg {
      background: ${props => props.theme.purple};
    }

  }
`

export const CoffeeList = styled.section`
  & > div {
    width: min(1120px, 100%);
    margin: 0 auto;
  }
`

export const CoffeeListHeader = styled.h2`
  margin-top: 3.375rem;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  display: flex;
  align-items: center;
  color: ${props => props.theme.baseSubtitle};
`

export const CoffeeListContent = styled.ul`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.25rem, 1fr));
  gap: 2.5rem 2rem;
`

