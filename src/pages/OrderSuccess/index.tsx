import delivery from '../../assets/delivery.svg';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { 
  Container, Content, Message, Title, SubTitle, 
  OrderInfosContainer, OrderInfo, ContainerInfo
} from './styles'

import { useContext } from "react";
import { OrderInfoContext } from '../../contexts/OrderInfoContext';

export function OrderSuccess() {
  const { address, paymentType } = useContext(OrderInfoContext);
  const { street, number, city, district, uf } = address;

  const PAYMENT_TYPE_STRING = {
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    MONEY: "Dinheiro",
  };
  return (
    <Container>
      <Content>
        <ContainerInfo>
          <Message>
            <Title>Uhu! Pedido confirmado</Title>
            <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
          </Message>
          
          <OrderInfosContainer>
            <OrderInfo>
              <div>
                <MapPin weight='fill'/>
              </div>
              <div>
                <p>
                  Entrega em <strong>{`${street}, ${number}`}</strong>
                </p>
                <p>{`${district} - ${city}, ${uf}`}</p>
              </div>
            </OrderInfo>
            <OrderInfo>
              <div>
                <Timer weight='fill'/>
              </div>
              <div>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min</strong></p>
              </div>
            </OrderInfo>
            <OrderInfo>
              <div>
                <CurrencyDollar />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                {paymentType && <p><strong>{PAYMENT_TYPE_STRING[paymentType]}</strong></p>}
              </div>
            </OrderInfo>
          </OrderInfosContainer>
        </ContainerInfo>

        <img src={delivery} alt="" height={293} width={492}/>
        
      </Content>
    </Container>
    )
}