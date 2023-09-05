import { ThemeProvider } from 'styled-components'
import { defaulTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
