import React from 'react'

import { Text } from '../text'
import { THEMES } from './SectionMessage'
import { useSectionMessageContext } from './SectionMessageContext'

export const SectionMessageTitle = ({
  css,
  ...rest
}: React.ComponentProps<typeof Text>): JSX.Element => {
  const { theme } = useSectionMessageContext()

  return (
    <Text
      css={{
        fontWeight: 600,
        mb: '$2',
        pt: '1px',
        color: THEMES[theme].color,
        ...css
      }}
      size="md"
      {...rest}
    />
  )
}
