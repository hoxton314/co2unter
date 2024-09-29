import { observer } from 'mobx-react'
import { FC, useContext, useEffect, useState } from 'react'
import { Container, ErrorMessageBox } from './FormResultsScreen.styles'
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
    //eslint-disable-next-line
  }, [])

  const isValid =
    calculatedEmission?.oldTreesAbsorption &&
    calculatedEmission?.mediumTreeAbsorption &&
    calculatedEmission?.smallTreeAbsorption &&
    calculatedEmission?.totalEmissions

  const objectKeys = isValid ? Object.keys(calculatedEmission) : []

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>Results</h1>

          {objectKeys.length && isValid ? (
            objectKeys.map((key) => (
              <div key={key}>
                <p>{key}</p>
                {calculatedEmission !== undefined && (
                  <p>{calculatedEmission[key as keyof typeof calculatedEmission]}</p>
                )}
              </div>
            ))
          ) : (
            <ErrorMessageBox>Something went wrong</ErrorMessageBox>
          )}
        </div>
      )}
    </Container>
  )
})
