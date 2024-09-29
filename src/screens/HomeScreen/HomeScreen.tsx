import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { Button } from '../../styles/generic.styles'
import { StoreContext } from '../../App'
import { FlexContainer, FlexItem, ScreenContainer } from "./HomeScreen.styles"
import { usePwa } from "../../hooks/usePWA"
import { homeTypeSVGs } from "../../screens/FormScreen/icons"

export const HomeScreen: FC = observer(() => {
  const store = useContext(StoreContext)
  const { welcome, testEmission, sectorsBreakdown, environmentVsEmission, heatMap } =
    store.TranslationsState.translations.HomeScreen
  const { isPwa } = usePwa()

  const MeSVG = homeTypeSVGs.me
  const SectorsSVG = homeTypeSVGs.sectors
  const MapSVG = homeTypeSVGs.map
  const EnviromentSVG = homeTypeSVGs.enviroment

  return (
    <ScreenContainer>
      <FlexContainer>
        <FlexItem onClick={() => store.AppState.setCurrentScreen('form')}>
            <h3> {testEmission} </h3>
          <MeSVG />
        </FlexItem>

        <FlexItem onClick={() => store.AppState.setCurrentScreen('sectorsBreakdown')}>
            <h3> {sectorsBreakdown} </h3>
          <SectorsSVG />
        </FlexItem>

        <FlexItem onClick={() => store.AppState.setCurrentScreen('heatMap')}>
            <h3> {heatMap} </h3>
          <MapSVG />
        </FlexItem>
      </FlexContainer>
    </ScreenContainer>
  )
})
