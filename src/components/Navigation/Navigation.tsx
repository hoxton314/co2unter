import { observer } from 'mobx-react'
import { FC } from 'react'
import { Container } from './Navigation.styles'
import { usePwa } from '../../hooks/usePWA'

export const Navigation: FC = observer(() => {
  const { isPwa } = usePwa()

  return <Container $isPwa={isPwa}>navigation</Container>
})
