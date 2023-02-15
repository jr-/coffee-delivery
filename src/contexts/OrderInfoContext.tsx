import {
  createContext,
  ReactNode,
  useState
} from 'react';
import { PaymentType } from '../@types/Payment';

export interface OrderInfoContextType {
  paymentType: PaymentType | null;
  selectPayment: (payment: PaymentType) => void;
}

export const OrderInfoContext = createContext({} as OrderInfoContextType)

interface OrderInfoContextProviderProps {
  children: ReactNode;
}

export function OrderInfoContextProvider({
  children,
}: OrderInfoContextProviderProps) {
  const [ paymentType, setPaymentType ] = useState<PaymentType | null>(null);

  function selectPayment(payment: PaymentType) {
    setPaymentType(payment);
  }

  return (
    <OrderInfoContext.Provider
      value={{
        paymentType,
        selectPayment,
      }}
    >{children}</OrderInfoContext.Provider>
  )

}