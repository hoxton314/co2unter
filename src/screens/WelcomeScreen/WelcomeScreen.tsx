import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { ActionWrapper, ScreenContainer } from './WelcomeScreen.styles'
import { Button } from '../../styles/generic.styles'
import { StoreContext } from '../../App'

export const WelcomeScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { WelcomeScreen: trans } = store.TranslationsState.translations

  return (
    <ScreenContainer>
      <h1>{trans.title}</h1>
      <h2> {trans.description}</h2>

      <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
      </svg>

      <ActionWrapper>
        <Button type="primary" width="120px" onClick={() => store.AppState.setCurrentScreen('home')}>
          {trans.later}
        </Button>
        <Button type="secondary" width="120px" onClick={() => store.AppState.setCurrentScreen('form')}>
          {trans.yes}
        </Button>
      </ActionWrapper>
    </ScreenContainer>
  )
})
