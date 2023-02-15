import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  margin: 2rem auto 0;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
