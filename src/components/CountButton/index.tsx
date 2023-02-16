import { Minus, Plus } from 'phosphor-react';
import { Container, SIZES_MAP } from './styles';

interface CountButtonProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  size?: keyof typeof SIZES_MAP;
}

export function CountButton({ count, onDecrement, onIncrement, min = 0, size = "md" }: CountButtonProps) {
  return (
    <Container size={size}>
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