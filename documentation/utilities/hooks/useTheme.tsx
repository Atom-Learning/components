import { Box, createTheme } from '@atom-learning/components'
import * as React from 'react'

const questTheme = createTheme({
  colors: {
    primary100: 'hsl(151, 70%, 96%)',
    primary200: 'hsl(151, 62%, 92%)',
    primary300: 'hsl(151, 53%, 83%)',
    primary400: 'hsl(151, 50%, 75%)',
    primary500: 'hsl(151, 46%, 64%)',
    primary600: 'hsl(151, 42%, 49%)',
    primary700: 'hsl(151, 51%, 35%)',
    primary800: 'hsl(151, 63%, 29%)',
    primary900: 'hsl(151, 55%, 21%)',
    primary1000: 'hsl(151, 47%, 18%)',
    primary1100: 'hsl(151, 34%, 13%)',
    primary1200: 'hsl(151, 24%, 7%)'
  }
})

interface ThemeContext {
  theme: 'atom' | 'quest'
  setTheme: React.Dispatch<React.SetStateAction<'atom' | 'quest'>>
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: 'atom',
  setTheme: () => null
})

export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState()

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box
        className={theme === 'quest' ? questTheme : undefined}
        css={{ display: 'contents' }}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}
