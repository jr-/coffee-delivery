import {
  createContext,
  ReactNode,
  useState
} from 'react';
import { AddressType } from '../@types/Address';
import { PaymentType } from '../@types/Payment';
import { cepMask, UFMask } from "../utils/inputMasks";

export interface OrderInfoContextType {
  paymentType: PaymentType | null;
  selectPayment: (payment: PaymentType) => void;
  address: AddressType;
  changeAddressByKey: (inputName: string, value: string) => void;
}

export const OrderInfoContext = createContext({} as OrderInfoContextType)

interface OrderInfoContextProviderProps {
  children: ReactNode;
}

export function OrderInfoContextProvider({
  children,
}: OrderInfoContextProviderProps) {
  const [ paymentType, setPaymentType ] = useState<PaymentType | null>(null);
  const [address, setAddress] = useState<AddressType>({
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  function changeAddressByKey(key: string, value: string) {
    setAddress((prevState) => {
      let newValue = value;

      if (key === "cep") {
        newValue = cepMask.applyMask(value);
      }

      if (key === "uf") {
        newValue = UFMask.applyMask(value);
      }

      return {
        ...prevState,
        [key]: newValue,
      };
    });
  }

  function selectPayment(payment: PaymentType) {
    setPaymentType(payment);
  }

  return (
    <OrderInfoContext.Provider
      value={{
        paymentType,
        selectPayment,
        address,
        changeAddressByKey
      }}
    >{children}</OrderInfoContext.Provider>
  )

}