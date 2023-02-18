import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  height: 2.625rem;
  background: ${props => props.theme.baseInput};
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  position: relative;
  transform: .3s;
  
  :focus-within {
    border-color: ${props => props.theme.yellowDark};
  }
  
  input {
    width: 100%;
    font-size: 1.25rem;
    background: transparent;
    border: 0;
    padding: 0 .75rem;

    :placeholder {
      color: ${props => props.theme.baseLabel};
    }
  }

  input:focus-visible, input:not([value=""]) {
    + label {
      font-size: .75rem;
      transform: translate(-1px, calc(-100% - .25rem));
      border-radius: 4px 4px 0 0;
      border: 1px solid transparent;
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }
  }

  input:not([value=""]) {
    + label {
      border-left-color: #e6e5e5;
      background-image: 
        linear-gradient(${props => props.theme.baseInput}, ${props => props.theme.baseInput}),
        linear-gradient(#e6e5e5 50%, transparent 50%);
    }
  }

  input:focus-visible {
    + label {
      border-left-color: ${props => props.theme.yellowDark};
      background-image: 
        linear-gradient(${props => props.theme.baseInput}, ${props => props.theme.baseInput}),
        linear-gradient(${props => props.theme.yellow} 50%, transparent 50%);
    }
  }

  label {
    position: absolute;
    left: 0;
    padding: 0 .75rem;
    transition: .3s;
    pointer-events: none;
  }
  
  span {
    color: ${props => props.theme.baseLabel};
    font-size: .75rem;
    font-style: italic;
    padding-right: .75rem;
  }
`;