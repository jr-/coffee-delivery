import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  label: string;
}

export function Input({ isOptional, label, ...props }: InputProps) {

  return (
    <Container>
      <input {...props} />

      <label htmlFor={props.id}>{label}</label>

      {isOptional && <span>Opcional</span>}
    </Container>
  )
}
