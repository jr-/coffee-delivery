import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <ShoppingCartContextProvider>
        <Router />
      </ShoppingCartContextProvider>
          
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
