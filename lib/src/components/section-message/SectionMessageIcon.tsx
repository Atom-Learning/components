import React, { useEffect } from 'react'
import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'
import { Icon } from '../icon'
import { useSectionMessageContext } from './SectionMessageContext'

const toIconSVG = {
  success: OkCircle,
  warning: Danger,
  error: Error,
  neutral: Info,
  info: Info
}
export const SectionMessageIcon = ({
  css,
  ...rest
}: React.ComponentProps<typeof Icon>): JSX.Element => {
  const { theme, setHasIcon } = useSectionMessageContext()
  useEffect(() => {
    setHasIcon(true)
    return () => setHasIcon(false)
  }, [setHasIcon])

  return (
    <Icon
      {...rest}
      css={{
        m: 'auto',
        position: 'absolute',
        left: '$4',
        top: '$4',
        color: 'currentColor',
        ...css
      }}
      is={toIconSVG[theme]}
      size="sm"
    />
  )
}
