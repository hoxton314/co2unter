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
          <div>
            <h3> {testEmission} </h3>
          </div>
          <MeSVG />
        </FlexItem>

        <FlexItem onClick={() => store.AppState.setCurrentScreen('sectorsBreakdown')}>
          <div>
            <h3> {sectorsBreakdown} </h3>
          </div>
          <SectorsSVG />
        </FlexItem>

        <FlexItem onClick={() => store.AppState.setCurrentScreen('environmentVsEmission')}>
          <div>
            <h3> {environmentVsEmission} </h3>
          </div>
          <EnviromentSVG />
        </FlexItem>

        <FlexItem onClick={() => store.AppState.setCurrentScreen('heatMap')}>
          <div>
            <h3> {heatMap} </h3>
          </div>
          <MapSVG />
        </FlexItem>
      </FlexContainer>
    </ScreenContainer>
  )
})
