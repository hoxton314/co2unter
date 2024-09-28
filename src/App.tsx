import { FC, useEffect } from 'react'
import { AppContainer } from './styles/App.styles'
import { GlobalStyles } from './styles/Global.styles'
import { Helmet } from './components/Helmet'
import { axiosInstance } from './methods/axiosConfig'

const App: FC = () => {
  useEffect(() => {
    axiosInstance.get('/').then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <AppContainer className="App">
      <Helmet title="CO2UNTER" description="CO2UNTER" themeColor="#ffffff" />
      <GlobalStyles />
      App.tsx
    </AppContainer>
  )
}

export default App
