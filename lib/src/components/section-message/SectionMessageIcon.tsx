import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'
import React, { useEffect } from 'react'

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
  is,
  ...rest
}: React.ComponentProps<typeof Icon>): JSX.Element => {
  const { theme, setHasIcon } = useSectionMessageContext()

  useEffect(() => {
    setHasIcon(true)
    return () => setHasIcon(false)
  }, [setHasIcon])

  return (
    <Icon
      css={{
        m: 'auto',
        position: 'absolute',
        left: '$4',
        top: '$4',
        color: 'currentColor',
        ...css
      }}
      is={is || toIconSVG[theme]}
      size="sm"
      {...rest}
    />
  )
}
