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
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { useContext, Fragment, ChangeEvent } from "react";
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { PaymentType } from '../../@types/Payment';
import { OrderInfoContext } from '../../contexts/OrderInfoContext';

export function Checkout() {

  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { paymentType, selectPayment, address, changeAddressByInput } = useContext(OrderInfoContext);

  function handleSelectPayment(event: ChangeEvent<HTMLInputElement>) {
    selectPayment(event.target.value as PaymentType);
  }

  function handleChangeInput({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) {
    changeAddressByInput(name, value);
  }

  function checkIfAddressHasBeenFilledIn() {
    const hasAddressBeenFilled = Object.entries(address).every(
      ([key, value]) => {
        if (key === "complement") return true;
        return value.length > 0;
      }
    );

    return hasAddressBeenFilled;
  }

  const totalPriceInCents = shoppingCartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.priceInCents,
    0
  );

  const totalPriceInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(totalPriceInCents / 100);

  const deliveryFeeInCents = checkIfAddressHasBeenFilledIn() ? 350 : 0;
  const deliveryFeeInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(deliveryFeeInCents / 100);
  const isDeliveryFeeMustAppear = deliveryFeeInCents > 0;

  const totalOrderInCents = totalPriceInCents + deliveryFeeInCents;
  const totalOrderInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(totalOrderInCents / 100);

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
            <Input
                label="CEP"
                value={address.cep}
                name="cep"
                onChange={handleChangeInput}
                maxLength={9}
                required
              />

              <Input
                label="Rua"
                value={address.street}
                name="street"
                onChange={handleChangeInput}
                required
              />

              <Input
                label="Número"
                value={address.number}
                name="number"
                onChange={handleChangeInput}
                required
              />

              <Input
                label="Complemento"
                value={address.complement}
                name="complement"
                onChange={handleChangeInput}
                isOptional
              />

              <Input
                label="Bairro"
                value={address.district}
                name="district"
                onChange={handleChangeInput}
                required
              />

              <Input
                label="Cidade"
                value={address.city}
                name="city"
                onChange={handleChangeInput}
                required
              />

              <Input
                label="UF"
                value={address.uf}
                name="uf"
                onChange={handleChangeInput}
                maxLength={2}
                required
              />
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
                <p>R$ {totalPriceInReal}</p>
              </div>
              {isDeliveryFeeMustAppear && <div>
                <p>Entrega</p>
                <p>R$ {deliveryFeeInReal}</p>
              </div>}
              <div>
                <p>Total</p>
                <p>R$ {totalOrderInReal}</p>
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
