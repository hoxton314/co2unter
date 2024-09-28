import { createContext, FC, useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react'

import { AppContainer, GlobalStyle } from '@styles/App.styles'
import { Helmet } from './Helmet'
import { ContentRouter } from './ContentRouter'

import { rootStore } from '@store/Root.store'
import { themes } from '@/themes/themes'
import { axiosInstance } from '@/methods/axiosConfig'

export const StoreContext = createContext(rootStore)

export const App: FC = observer(() => {
  const store = useContext(StoreContext)
  const { theme } = store.AppState

  const checkApi = async () => {
    try {
      const res = await axiosInstance.get('/')

      console.log('API status:', res.status)
      console.log('API response:', res)
    } catch (error) {
      console.log('API error:', error)
    }
  }

  useEffect(() => {
    void checkApi()

    console.log('PUBLIC_URL:', process.env.PUBLIC_URL)
  }, [])
  return (
    <StoreContext.Provider value={rootStore}>
      <Helmet title="React TS boilerplate" description="React boilerplate" themeColor="#320822" />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <AppContainer className="app-container">
          <ContentRouter />
        </AppContainer>
      </ThemeProvider>
    </StoreContext.Provider>
  )
})
