import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';

interface CountButtonProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
}

export function CountButton({ count, onDecrement, onIncrement, min = 0 }: CountButtonProps) {
  return (
    <Container>
      <button type="button" onClick={onDecrement} disabled={count === min}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{count}</span>
      <button type="button" onClick={onIncrement}>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  )
}