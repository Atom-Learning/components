import { Box, createTheme } from '@atom-learning/components'
import * as questTheme from '@atom-learning/theme/lib/theme-quest'
import * as React from 'react'

const createdTheme = createTheme(questTheme)

type Theme = 'atom' | 'quest'

interface ThemeContext {
  theme: Theme
  updateTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: 'atom',
  updateTheme: (theme: Theme) => null
})

const getInitialTheme = () => {
  return (window?.sessionStorage.getItem('theme') as Theme) || 'atom'
}

export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme())

  const updateTheme = (theme) => {
    setTheme(theme)
    window?.sessionStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Box
        className={theme === 'quest' ? createdTheme : undefined}
        css={{ display: 'contents' }}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}
