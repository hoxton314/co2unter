import { observer } from 'mobx-react'
import { usePwa } from '../hooks/usePWA'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const Prompt = styled.div<{ $shouldShow: boolean }>`
  display: ${({ $shouldShow }) => ($shouldShow ? 'block' : 'none')};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: #f1f1f1;
  text-align: center;
  border-top: 1px solid #ccc;

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`

export const PWAInstallPrompt: FC = observer(() => {
  const { appinstalled, canInstallprompt, enabledPwa, showInstallPrompt, isPwa, userChoice } = usePwa()

  const [canInstall, setCanInstall] = useState(false)

  // pwaInstallHandler.addListener((canInstall) => {
  //   setCanInstall(canInstall)
  // })

  // const installPWA = () => {
  //   pwaInstallHandler.install()
  // }

  useEffect(() => {
    console.log('PWAInstallPrompt', { appinstalled, canInstallprompt, enabledPwa, isPwa, userChoice })
  }, [appinstalled, canInstallprompt, enabledPwa, isPwa, userChoice])

  return (
    <Prompt $shouldShow={!isPwa}>
      <button onClick={showInstallPrompt}>Install PWA</button>
    </Prompt>
  )
})
