import { FC } from 'react'
import { AppContainer } from './styles/App.styles'
import { GlobalStyles } from './styles/Global.styles'
import { Helmet } from './components/Helmet'

const App: FC = () => {
  return (
    <AppContainer className="App">
      <Helmet title="CO2UNTER" description="CO2UNTER" themeColor="#ffffff" />
      <GlobalStyles />
    </AppContainer>
  )
}

export default App
