import { Box, ColorScheme } from '@atom-learning/components'
import { Header } from './Header'
import { Meta } from './Meta'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  return (
    <ColorScheme base="grey1" accent="blue1" interactive="loContrast" css={{ display: 'flex', width: '100%', background: '$base1', color: '$foreground' }}>
      <Meta />
      <Header />
      <Box as="main" css={{ flexGrow: 1, overflow: 'hidden' }}>
        {children}
      </Box>
    </ColorScheme>
  )
}
