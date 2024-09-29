import { observer } from 'mobx-react'
import { FC, useContext, useEffect, useState } from 'react'
import { Container } from './FormResultsScreen.styles'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { axiosInstance } from '../../methods/axiosConfig'
import { StoreContext } from '../../App'

export const FormResultsScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { calculatedEmission } = store.AppState
  const { parsedForm } = store.FormState

  const [isLoading, setIsLoading] = useState(true)

  const fetchResults = async () => {
    try {
      const res = await axiosInstance.post('/calculate-emission', parsedForm)

      if (res.status === 200) {
        setIsLoading(false)

        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    void fetchResults()
  }, [])

  return (
    <Container>
      {isLoading || !calculatedEmission?.mediumTreeAbsorption ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>Results</h1>
          {JSON.stringify(calculatedEmission)}
        </div>
      )}
    </Container>
  )
})
