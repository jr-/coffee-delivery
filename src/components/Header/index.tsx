import { HeaderContainer, RightHeaderDiv } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logoCoffee} alt="" />
        </NavLink>
      </nav>
      <RightHeaderDiv>
        <div>
          <MapPin size={24} />
          <span>Porto Alegre, RS</span>
        </div>
        <nav>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={24} />
          </NavLink>
        </nav>
      </RightHeaderDiv>
    </HeaderContainer>
  )
}
