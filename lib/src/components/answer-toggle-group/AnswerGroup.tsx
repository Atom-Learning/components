import * as React from 'react'

import { Flex } from '~/components/flex'

type AnswerToggleGroupRootProps = React.ComponentProps<typeof Flex>

export const AnswerGroup: React.ForwardRefExoticComponent<AnswerToggleGroupRootProps> =
  React.forwardRef((props, ref) => {
    return (
      <Flex
        ref={ref}
        direction="row"
        wrap="wrap"
        gap={3}
        align="center"
        {...props}
      />
    )
  })
