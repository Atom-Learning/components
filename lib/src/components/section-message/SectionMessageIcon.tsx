import React from 'react'

import { Box } from '../box'
import { Icon } from '../icon'
import { THEMES } from './SectionMessage'
import { useSectionMessageContext } from './SectionMessageContext'

export const SectionMessageIcon = ({
  css,
  ...rest
}: React.ComponentProps<typeof Icon>): JSX.Element => {
  const { theme } = useSectionMessageContext()

  return (
    <Icon
      {...rest}
      css={{
        m: 'auto',
        position: 'absolute',
        left: '$4',
        top: '$4',
        color: THEMES[theme].color,
        ...css
      }}
      is={THEMES[theme].icon}
      size="sm"
    />
  )
}
