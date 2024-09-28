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

export const StoreContext = createContext(rootStore)

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const App: FC = observer(() => {
  const store = useContext(StoreContext)
  const { theme } = store.AppState

  useEffect(() => {
    axiosInstance.get('/').then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer className="App">
        <Helmet title="CO2UNTER" description="CO2UNTER" themeColor="#ffffff" />
        <GlobalStyles />
        App.tsx
      </AppContainer>
    </ThemeProvider>
  )
})

export default App
