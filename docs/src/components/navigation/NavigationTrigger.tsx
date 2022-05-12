import { Flex, Icon } from '@components'
import { Hamburger } from '@atom-learning/icons'
import * as React from 'react'

type NavigationTriggerProps = {
  onClick: () => void
}

export const NavigationTrigger: React.FC<NavigationTriggerProps> = (props) => (
  <Flex
    as="button"
    css={{
      alignItems: 'center',
      background: 'white',
      border: '1px solid $tonal200',
      borderRadius: '$0',
      cursor: 'pointer',
      color: '$tonal500',
      justifyContent: 'center',
      left: '$3',
      p: 'unset',
      position: 'fixed',
      size: '$4',
      top: '$3',
      zIndex: 1,
      '@lg': {
        display: 'none'
      }
    }}
    {...props}
  >
    <Icon is={Hamburger} />
  </Flex>
)
