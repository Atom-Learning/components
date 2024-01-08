import { Box, createTheme } from '@atom-learning/components'
import * as questTheme from '@atom-learning/theme/lib/theme-quest'
import * as React from 'react'

const createdTheme = createTheme(questTheme)

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
        className={theme === 'quest' ? createdTheme : undefined}
        css={{ display: 'contents' }}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}
