import { Play } from 'phosphor-react'
import {
  CountdownConainer,
  FormConainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormConainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormConainer>
        <CountdownConainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownConainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
