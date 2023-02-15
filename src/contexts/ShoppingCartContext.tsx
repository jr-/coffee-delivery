import {
  createContext,
  ReactNode,
  useState
} from 'react';
import { CoffeeType } from '../@types/Coffee';
import { ShoppingCartItemsType } from "../@types/ShoppingCartItems";

export interface ShoppingCartContextType {
  shoppingCartItems: ShoppingCartItemsType[];
  addCoffeeInShoppingCart: (coffee: CoffeeType, quantity: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [ shoppingCartItems, setShoppingCartItems ] = useState<ShoppingCartItemsType[]>([]);

  function addCoffeeInShoppingCart(coffee: CoffeeType, quantity: number) {
    setShoppingCartItems((prevState) => {
      const currentCoffeeIndex = prevState.findIndex(
        ({ id }) => id === coffee.id
      );

      if (currentCoffeeIndex < 0) {
        return prevState.concat({ ...coffee, quantity});
      }

      const newShoppingCartItems = JSON.parse(JSON.stringify(prevState));
      newShoppingCartItems[currentCoffeeIndex].quantity += quantity;

      return newShoppingCartItems;
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        addCoffeeInShoppingCart,
      }}
    >{children}</ShoppingCartContext.Provider>
  )
}