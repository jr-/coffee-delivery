import { HeaderContainer, Content, RightHeaderDiv, Location, Cart } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";

import logoCoffee from '../../assets/logo-coffee.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingCartContext);

  return (
    <HeaderContainer>
      <Content>

          <NavLink to="/" title="Home">
            <img src={logoCoffee} alt="" />
          </NavLink>

        <RightHeaderDiv>
          <Location>
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </Location>

          <NavLink to="/checkout" title="Checkout">
            <Cart>
              <ShoppingCart weight="fill" size={22} />
              {shoppingCartItems && shoppingCartItems.length > 0 && (
                <span>{shoppingCartItems.length}</span>
              )}
            </Cart>
          </NavLink>
        </RightHeaderDiv>
      </Content>
    </HeaderContainer>
  )
}
