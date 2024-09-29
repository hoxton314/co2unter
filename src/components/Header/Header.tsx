import { observer } from 'mobx-react'
import { FC, useContext } from 'react'
import { Container } from './Header.styles'
import { MenuButton } from '../../styles/generic.styles'
import { StoreContext } from '../../App'

export const Header: FC = observer(() => {
  const store = useContext(StoreContext)
  const { language } = store.TranslationsState
  const { theme } = store.AppState

  return (
    <Container>
      <MenuButton onClick={() => store.TranslationsState.setLanguage(language === 'pl' ? 'en' : 'pl')}>
        {language === 'pl' ? (
          <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path
              fill="#FFF"
              d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
            />
            <path
              fill="#C8102E"
              d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
            />
            <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
            <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-pl" viewBox="0 0 640 480">
            <g fill-rule="evenodd">
              <path fill="#fff" d="M640 480H0V0h640z" />
              <path fill="#dc143c" d="M640 480H0V240h640z" />
            </g>
          </svg>
        )}
      </MenuButton>
      <MenuButton onClick={() => store.AppState.toggleTheme()}>
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"
            />
          </svg>
        )}
      </MenuButton>
    </Container>
  )
})
