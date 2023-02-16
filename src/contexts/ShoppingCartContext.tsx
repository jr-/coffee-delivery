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
  decrementCoffeeInShoppingCart: (coffeeId: string) => void;
  incrementCoffeeInShoppingCart: (coffeeId: string) => void;
  deleteCoffeeInShoppingCartById: (coffeeId: string) => void;
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
      const coffeeIndex = prevState.findIndex(
        ({ id }) => id === coffee.id
      );

      if (coffeeIndex < 0) {
        return prevState.concat({ ...coffee, quantity});
      }

      const newShoppingCartItems: ShoppingCartItemsType[] = [
        ...JSON.parse(JSON.stringify(prevState)),
      ];
      newShoppingCartItems[coffeeIndex].quantity += quantity;

      return newShoppingCartItems;
    });
  }

  function decrementCoffeeInShoppingCart(coffeeId: string) {
    setShoppingCartItems((prevState) => {
      const newCoffees = prevState
        .map((coffee) => {
          if (coffee.id !== coffeeId) return coffee;

          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        })
        .filter((coffee) => coffee.quantity > 0);

      return newCoffees;
    });
  }
  
  function incrementCoffeeInShoppingCart(coffeeId: string) {
    setShoppingCartItems((prevState) => {
      const coffeeIndex = prevState.findIndex(
        ({ id }) => id === coffeeId
      );

      const newShoppingCartItems: ShoppingCartItemsType[] = [
        ...JSON.parse(JSON.stringify(prevState)),
      ];
      newShoppingCartItems[coffeeIndex].quantity += 1;

      return newShoppingCartItems;
      
    });
  }
  
  function deleteCoffeeInShoppingCartById(coffeeId: string) {
    setShoppingCartItems((prevState) =>
      prevState.filter((coffee) => coffee.id !== coffeeId)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        addCoffeeInShoppingCart,
        decrementCoffeeInShoppingCart,
        incrementCoffeeInShoppingCart,
        deleteCoffeeInShoppingCartById

      }}
    >{children}</ShoppingCartContext.Provider>
  )
}