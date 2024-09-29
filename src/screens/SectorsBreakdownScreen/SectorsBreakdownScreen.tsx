import { observer } from 'mobx-react'
import { FC, useContext, useEffect, useState } from 'react'
import { ScreenContainer, TileContainer } from './SectorsBreakdownScreen.styles'
import { TileSwapper } from '../../components/TileSwapper'
import { SectorData } from '../../types/TileSwapper'
import { axiosInstance } from '../../methods/axiosConfig'
import { ICalculatedEmission } from '../../types/calculatedEmission'
import { StoreContext } from '../../App'
import { ISectors } from '../../types/sectors'

export const SectorsBreakdownScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { transport, user, events, services } = store.TranslationsState.translations.CalculatedEmissions
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchSectorResults = async () => {
    try {
      const res = await axiosInstance.get<ISectors | { error: string }>('/sectors')

      if (res.status === 200) {
        store.AppState.setSectors(res.data as ISectors)
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

  const fetchUserResults = async () => {
    try {
      const res = await axiosInstance.post<ICalculatedEmission | { error: string }>(
        '/calculate-emission',
        store.FormState.parsedForm,
      )

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
    void fetchSectorResults()
    console.log(Object.entries(store.AppState.calculatedEmission).length !== 0)
    if (Object.entries(store.AppState.calculatedEmission).length !== 0) void fetchUserResults()
    //eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   console.log(calculatedEmission)
  // }, [calculatedEmission])

  return (
    <ScreenContainer>
      {!isLoading && !error && (
        <TileContainer>
          <TileSwapper sectorType="transport" sectorName={transport} />
          <TileSwapper sectorType="services" sectorName={services} />
          <TileSwapper sectorType="events" sectorName={events} />
          <TileSwapper sectorType="user" sectorName={user} />
        </TileContainer>
      )}
    </ScreenContainer>
  )
})
