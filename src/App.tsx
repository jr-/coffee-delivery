import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { OrderInfoContextProvider } from './contexts/OrderInfoContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <ShoppingCartContextProvider>
        <OrderInfoContextProvider>
          <Router />
        </OrderInfoContextProvider>
      </ShoppingCartContextProvider>
          
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
