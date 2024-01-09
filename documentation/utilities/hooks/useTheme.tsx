import { Box, createTheme } from '@atom-learning/components'
import * as questTheme from '@atom-learning/theme/lib/theme-quest'
import * as React from 'react'

const createdTheme = createTheme(questTheme)

type Theme = 'atom' | 'quest'

interface ThemeContext {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: 'atom',
  setTheme: () => null
})

export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('atom')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box
        className={theme === 'quest' ? createdTheme : undefined}
        css={{ display: 'contents' }}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}
