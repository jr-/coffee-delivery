import { 
  Container, 
  Content,
  OrderInfos,
  OrderAddressContainer,
  OrderAddressHeader,
  InputsContainer,
  OrderPaymentContainer,
  OrderPaymentHeader,
  PaymentOptions,
  OrderSummaryContent,
  OrderSummary,
  OrderTotalPriceContainer,
  ConfirmOrderButton,
  Separator,
} from './styles'
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { CoffeeOrderCard } from './components/CoffeeOrderCard';
// import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { useContext, Fragment, ChangeEvent } from "react";
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { PaymentType } from '../../@types/Payment';
import { OrderInfoContext } from '../../contexts/OrderInfoContext';

export function Checkout() {

  function handleSelectPayment(event: ChangeEvent<HTMLInputElement>) {
    selectPayment(event.target.value as PaymentType);
  }

  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { paymentType, selectPayment } = useContext(OrderInfoContext);
  return (
    <Container>
      <Content>
        <OrderInfos>
          <h2>Complete seu pedido</h2>
          <OrderAddressContainer>
            <OrderAddressHeader>
              <MapPinLine />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>

            </OrderAddressHeader>
            <InputsContainer>
              {/* <Input/>
              <Input/>
              <Input/>
              <Input/>
              <Input/>
              <Input/>
              <Input/> */}
            </InputsContainer>

          </OrderAddressContainer>
          <OrderPaymentContainer>
            <OrderPaymentHeader>
              <CurrencyDollar />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </OrderPaymentHeader>

            <PaymentOptions>
              <Select
                checked={paymentType === "CREDIT_CARD"}
                name="paymentType"
                value="CREDIT_CARD"
                onChange={handleSelectPayment}
                required
              >
                <CreditCard />
                <p>Cartão de crédito</p>
              </Select>
              <Select
                checked={paymentType === "DEBIT_CARD"}
                name="paymentType"
                value="DEBIT_CARD"
                onChange={handleSelectPayment}
                required
              >
                <Bank />
                <p>cartão de débito</p>
              </Select>
              <Select
                checked={paymentType === "MONEY"}
                name="paymentType"
                value="MONEY"
                onChange={handleSelectPayment}
                required
              >
                <Money />
                <p>dinheiro</p>
              </Select>
            </PaymentOptions>

          </OrderPaymentContainer>
        </OrderInfos>
        <OrderSummaryContent>
          <h2>Cafés selecionados</h2>
          <OrderSummary>
            {shoppingCartItems.map((item) => (
              <Fragment key={item.id}>
                <CoffeeOrderCard data={item} />
                <Separator />
              </Fragment>
            ))}

            <OrderTotalPriceContainer>
              <div>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div>
                <p>Total</p>
                <p>R$ 33,20</p>
              </div>
            </OrderTotalPriceContainer>

            <ConfirmOrderButton>
              confirmar pedido
            </ConfirmOrderButton>
          </OrderSummary>
        </OrderSummaryContent>
        
      </Content>
      
    </Container>
  )
}
