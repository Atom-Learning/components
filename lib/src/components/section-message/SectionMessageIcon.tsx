import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'
import React, { useEffect } from 'react'

import { Icon } from '../icon'
import { useSectionMessageContext } from './SectionMessageContext'

const themeIcons = {
  success: OkCircle,
  warning: Danger,
  error: Error,
  neutral: Info,
  info: Info
}

type SectionMessageIconProps = Partial<React.ComponentProps<typeof Icon>>

export const SectionMessageIcon = ({
  css,
  is,
  ...rest
}: SectionMessageIconProps): JSX.Element => {
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
      is={is || themeIcons[theme]}
      size="sm"
      {...rest}
    />
  )
}
