import { HeaderContainer, Content, RightHeaderDiv, Location, Cart } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { OrderInfoContext } from "../../contexts/OrderInfoContext";
import { useContext } from "react";

import logoCoffee from '../../assets/logo-coffee.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { address } = useContext(OrderInfoContext);
  const addressString = `${address.city}, ${address.uf}`;

  const isAddressMustAppear = address.city !== '' && address.uf !== '';
  return (
    <HeaderContainer>
      <Content>

          <NavLink to="/" title="Home">
            <img src={logoCoffee} alt="" />
          </NavLink>

        <RightHeaderDiv>
          <Location>
            <MapPin weight="fill" size={22} />
            {isAddressMustAppear? <span>{addressString}</span> : null}
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
