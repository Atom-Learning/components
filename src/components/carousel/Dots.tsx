import { DotGroup } from 'pure-react-carousel'
import * as React from 'react'

import { Flex } from '~/components/flex'

export const Dots: React.FC = () => (
  <Flex
    as={DotGroup}
    css={{
      justifyContent: 'center',
      '& button': {
        bg: '$tonal300',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        mt: '$4',
        mx: '$1',
        p: '$1',
        size: '12px',
        transition: 'all 0.25s ease-in',
        '&[class*="selected"]': {
          bg: '$primary900'
        }
      }
    }}
  />
)
