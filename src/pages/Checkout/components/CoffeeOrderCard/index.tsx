import { Trash } from "phosphor-react";
import { CoffeeOrderCardContainer, CoffeeImage, Actions, RemoveButton, Price  } from './styles';
import { CountButton } from "../../../../components/CountButton";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCartContext";
import { useContext } from 'react';
import { ShoppingCartItemsType } from '../../../../@types/ShoppingCartItems';

interface CoffeeOrderCardType {
  data: ShoppingCartItemsType;
}


export function CoffeeOrderCard({ data }: CoffeeOrderCardType) {
  const { image, priceInCents, title, quantity, id } = data;
  const { decrementCoffeeInShoppingCart, incrementCoffeeInShoppingCart, deleteCoffeeInShoppingCartById } = useContext(ShoppingCartContext);

  const priceInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(priceInCents / 100);

  return (
    <CoffeeOrderCardContainer>
      <CoffeeImage><img src={image} /></CoffeeImage>
      <div>
        <p>{title}</p>
        <Actions>
          <CountButton
            count={quantity}
            onDecrement={() => decrementCoffeeInShoppingCart(id)}
            onIncrement={() => incrementCoffeeInShoppingCart(id)} />
          <RemoveButton
            type="button"
            onClick={() => deleteCoffeeInShoppingCartById(id)}
          >
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </Actions>
      </div>
      <Price>
        R$ <strong>{priceInReal}</strong>
      </Price>
    </CoffeeOrderCardContainer>
  )
}