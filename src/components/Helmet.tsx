import { FC } from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

interface HelmetProps {
  title: string
  description?: string
}

export const Helmet: FC<HelmetProps> = ({ title, description }) => {
  return (
    <ReactHelmet defaultTitle={title}>
      {/* General */}
      <meta charSet="utf-8" />
      <meta name="description" content={description} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      />
    </ReactHelmet>
  )
}
