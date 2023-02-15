import { CoffeeCardContainer, LabelsContainer, Description, CoffeeImage, CartButton, Actions, FooterCard, Price } from './styles';
import { ShoppingCart } from "phosphor-react";
import { CountButton } from "../../../../components/CountButton";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCartContext";
import { useState, useContext } from 'react';
import { CoffeeType } from '../../../../@types/Coffee';

interface CoffeeProps {
  data: CoffeeType;
}

export function CoffeeCard({ data }: CoffeeProps) {
  const { description, image, priceInCents, labels, title } = data;
  const { addCoffeeInShoppingCart } = useContext(ShoppingCartContext);
  const [ quantity, setQuantity ] = useState(0);

  function handleIncrementQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrementQuantity() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleAddToShoppingCart() {
    addCoffeeInShoppingCart(data, quantity);
    setQuantity(0);
  }

  const priceInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(priceInCents / 100);

  return (
    <CoffeeCardContainer>
      <CoffeeImage><img src={image} /></CoffeeImage>
      <LabelsContainer>{labels.map(label => <span>{label}</span>)}</LabelsContainer>
      <h3>{title}</h3>
      <Description>{description}</Description>
      <FooterCard>
        <Price>
        R$ <strong>{priceInReal}</strong>
        </Price>
        <Actions>
          <CountButton 
            count={quantity}
            onDecrement={handleDecrementQuantity}
            onIncrement={handleIncrementQuantity}
          />
          <CartButton
            type="button"
            onClick={handleAddToShoppingCart}
            disabled={quantity < 1}
          >
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </FooterCard>
    </CoffeeCardContainer>
  )
}