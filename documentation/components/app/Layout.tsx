import { Box } from '@atom-learning/components'
import { ColorScheme } from '@atom-learning/color-scheme'
import { Header } from './Header'
import { Meta } from './Meta'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  return (
    <ColorScheme base="slate" accent="blue" css={{ display: 'flex', width: '100%', background: '$background', color: '$foreground' }}>
      <Meta />
      <Header />
      <Box as="main" css={{ flexGrow: 1, overflow: 'hidden' }}>
        {children}
      </Box>
    </ColorScheme>
  )
}