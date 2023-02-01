import { Box, ColorScheme } from '@atom-learning/components'
import { Header } from './Header'
import { Meta } from './Meta'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  return (
    <ColorScheme base="slate" accent="blue" interactive="loContrast2" css={{ display: 'flex', width: '100%', background: '$background', color: '$foreground' }}>
      <Meta />
      <Header />
      <Box as="main" css={{ flexGrow: 1, overflow: 'hidden' }}>
        {children}
      </Box>
    </ColorScheme>
  )
}
