import { InputHTMLAttributes, ReactNode } from "react";
import { Container, Content } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export function Select({ children, ...rest }: SelectProps) {

  return (
    <Container>
      <input type="radio" {...rest}/>

      <Content>
        {children}
      </Content>
    </Container>
  )
}
