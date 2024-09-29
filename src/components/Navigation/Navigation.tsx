import { observer } from 'mobx-react'
import { FC, useContext } from "react"
import { ButtonCont, Container } from "./Navigation.styles"
import { usePwa } from '../../hooks/usePWA'
import { StoreContext } from "../../App"
import { navTypeSvgs} from "../../screens/FormScreen/icons"

export const Navigation: FC = observer(() => {
  const { isPwa } = usePwa()
  const store = useContext(StoreContext)
  const {returnText, form, home} = store.TranslationsState.translations.Navigation
  const QuizSVG = navTypeSvgs.quiz
  const BackSVG = navTypeSvgs.goBack
  const HomeSVG = navTypeSvgs.home
  return (
    <Container $isPwa={isPwa}>
      <ButtonCont onClick={() => store.AppState.setCurrentScreen(store.AppState.prevScreen)}>
        <BackSVG />
        <p>{returnText}</p>
      </ButtonCont>
      <ButtonCont onClick={() => store.AppState.setCurrentScreen('form')}>
        <QuizSVG />
        <p>{form}</p>
      </ButtonCont>
      <ButtonCont onClick={() => store.AppState.setCurrentScreen('home')}>
        <HomeSVG />
        <p>{home}</p>
      </ButtonCont>
    </Container>
  )
})
