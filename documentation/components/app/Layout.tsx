import { Box, ColorScheme } from '@atom-learning/components'
import { ThemeProvider } from '~/utilities/hooks/useTheme'
import { useMediaQuery } from '~/utilities/hooks/useMediaQuery'
import { NavigationDesktop, NavigationMobile } from './Header'
import { Meta } from './Meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  const matches = useMediaQuery('(min-width: 1000px)')
  return (
    <ThemeProvider>
      <ColorScheme
        base="grey1"
        accent="primary1"
        interactive="hiContrast"
        css={{
          display: 'flex',
          width: '100%',
          background: '$base1',
          color: '$foreground'
        }}
      >
        <Meta />
        {matches ? <NavigationDesktop /> : <NavigationMobile />}
        <Box as="main" css={{ flexGrow: 1, overflow: 'hidden' }}>
          {children}
        </Box>
      </ColorScheme>
    </ThemeProvider>
  )
}
