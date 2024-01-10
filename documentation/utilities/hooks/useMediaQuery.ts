import * as React from 'react'

const getMatches = (query: string) =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : false

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(getMatches(query))

  const handleChange = () => setMatches(getMatches(query))

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
