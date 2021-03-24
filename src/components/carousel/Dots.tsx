import { DotGroup } from 'pure-react-carousel'
import * as React from 'react'

import { Flex } from '~/components/flex'

export const Dots: React.FC = () => (
  <Flex
    as={DotGroup}
    css={{
      justifyContent: 'center',
      '& button': {
        size: '12px',
        borderRadius: '50%',
        bg: '$tonal300',
        m: '0 6px',
        p: '$1',
        border: 'none',
        '&[class*="selected"]': {
          bg: '$primary900'
        }
      }
    }}
  />
)
