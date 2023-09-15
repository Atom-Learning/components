import * as React from 'react'

import { Flex } from '../../flex'

export const BannerSlimActions: React.FC<React.ComponentProps<typeof Flex>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Flex gap="4" css={{ p: '$4', width: '100%', ...css }} {...props}>
      {children}
    </Flex>
  )
}

BannerSlimActions.displayName = 'BannerSlimActions'
