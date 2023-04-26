import React from 'react'

import { Box } from '../box'
import { Icon } from '../icon'
import { THEMES } from './SectionMessage'
import { useSectionMessageContext } from './SectionMessageContext'

export const SectionMessageIcon = ({
  css,
  ...rest
}: React.ComponentProps<typeof Box>): JSX.Element => {
  const { theme } = useSectionMessageContext()

  return (
    <Box
      css={{ mr: '$2', mt: '-1px', color: THEMES[theme].color, ...css }}
      {...rest}
    >
      <Icon is={THEMES[theme].icon} size="sm" />
    </Box>
  )
}
