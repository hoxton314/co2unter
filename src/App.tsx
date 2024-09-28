import { createContext, FC, useContext, useEffect } from 'react'
import { AppContainer } from './styles/App.styles'
import { GlobalStyles } from './styles/Global.styles'
import { Helmet } from './components/Helmet'
import { axiosInstance } from './methods/axiosConfig'
import { lightTheme } from './theme/light'
import { darkTheme } from './theme/dark'
import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react'
import { rootStore } from './store/Root.store'
import { Theme } from './theme/theme'
import { ScreenRouter } from './components/ScreenRouter'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'

export const StoreContext = createContext(rootStore)

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const App: FC = observer(() => {
  const store = useContext(StoreContext)
  const { theme } = store.AppState

  useEffect(() => {
    try {
      axiosInstance.get('/').then((res) => {
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }

    const hasWelcomeScreenVisited = localStorage.getItem('hasWelcomeScreenVisited')
    if (!hasWelcomeScreenVisited) {
      store.AppState.setCurrentScreen('welcome')
    } else {
      store.AppState.setCurrentScreen('home')
    }

    //eslint-disable-next-line
  }, [])

  return (
    <ThemeProvider theme={themes[theme] as Theme}>
      <AppContainer className="App">
        <Helmet title="CO2UNTER" description="CO2UNTER" />
        <GlobalStyles />
        <Header />
        <ScreenRouter />
        <Navigation />
      </AppContainer>
    </ThemeProvider>
  )
})

export default App
