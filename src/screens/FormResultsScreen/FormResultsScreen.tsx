import { observer } from 'mobx-react'
import { FC, useContext, useEffect, useState } from 'react'
import { Container, ErrorMessageBox } from './FormResultsScreen.styles'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { axiosInstance } from '../../methods/axiosConfig'
import { StoreContext } from '../../App'
import { ICalculatedEmission } from '../../types/calculatedEmission'

export const FormResultsScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { calculatedEmission } = store.AppState
  const { parsedForm } = store.FormState

  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState('')

  const fetchResults = async () => {
    try {
      const res = await axiosInstance.post<ICalculatedEmission | { error: string }>('/calculate-emission', parsedForm)

      if (res.status === 200) {
        store.AppState.setCalculatedEmission(res.data as ICalculatedEmission)
        setIsLoading(false)

        console.log(res)
      } else {
        const data = res.data as { error: string }
        setError(data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    void fetchResults()
    //eslint-disable-next-line
  }, [])

  const objectKeys = Object.keys(calculatedEmission)

  useEffect(() => {
    console.log(calculatedEmission)
    console.log(objectKeys)
  }, [calculatedEmission, objectKeys])

  return (
    <Container>
      {isLoading && !error ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>Results</h1>

          {objectKeys.length ? (
            objectKeys.map((key) => (
              <div key={key}>
                <p>{key}</p>
                {calculatedEmission !== undefined && (
                  <p>{calculatedEmission[key as keyof typeof calculatedEmission]}</p>
                )}
              </div>
            ))
          ) : (
            <ErrorMessageBox> {error || 'Something went wrong'} </ErrorMessageBox>
          )}
        </div>
      )}
    </Container>
  )
})
