import * as React from 'react'
import { useEffect, useRef } from 'react'

export type IconName = 'check' | 'home'
type SVG = () => React.ReactSVGElement

type IconProps = {
  is: IconName
}

export const Icon: React.FC<IconProps> = ({
  is: iconName
}): JSX.Element | null => {
  const SVGRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = React.useState(false)

  useEffect((): void => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        SVGRef.current = (await import(`./svg/${iconName}.svg`)).ReactComponent
      } catch (err) {
        console.error('cannot find SVG')
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [iconName])

  if (!loading && SVGRef.current) {
    const { current: SVG } = SVGRef
    return <SVG />
  }

  return null
}
