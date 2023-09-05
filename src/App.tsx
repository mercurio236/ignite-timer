import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaulTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
