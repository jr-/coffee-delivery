import coffeeDeliveryHome from '../../assets/coffee-delivery-home.svg'
import { IntroContainer, TextContainer, BenefitsList, Benefit, CoffeeList, CoffeeListHeader, CoffeeListContent, Main } from './styles'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'

import { coffees as coffeesMock } from "../../mocks/coffees";

export function Home() {
  return (
    <Main>
      <IntroContainer>
        <div>
          <TextContainer>
            <h1>Encontre o cafe perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery voce recebe seu cafe onde estiver, a qualquer hora</p>
            <BenefitsList>
              <Benefit>
                <ShoppingCart size={32} weight='fill' />
                <span>Compra simples e segura</span>
              </Benefit>
              <Benefit>
                <Package size={32} weight='fill'/>
                <span>Embalagem mantem o cafe intacto</span>
              </Benefit>
              <Benefit>
                <Timer size={32} weight='fill'/>
                <span>Entrega rapida e rastreada</span>
              </Benefit>
              <Benefit>
                <Coffee size={32} weight='fill'/>
                <span>O cafe chega fresquinho ate voce</span>
              </Benefit>
            </BenefitsList>
          </TextContainer>
          <img src={coffeeDeliveryHome} alt="" />
        </div>
      </IntroContainer>
      <CoffeeList>
        <div>
          <CoffeeListHeader>Nossos cafés</CoffeeListHeader>
          <CoffeeListContent>
            {coffeesMock.map(coffee => 
            <CoffeeCard
              data={coffee}
            />)}
          </CoffeeListContent>
        </div>
      </CoffeeList>
    </Main>
  )
}
