import * as React from 'react'

import { styled } from '../../stitches'
import { Flex } from '../flex'
import { Tabs } from '../tabs'
import { useSegmentedControl } from './SegmentedControlContext'

const StyledItem = styled(Tabs.Trigger, {
  bg: 'transparent',
  borderRadius: '$2',
  p: 0,
  variants: {
    theme: {
      primary: {
        '&[data-state=inactive]:hover': {
          bg: '$primary300'
        },
        '&:focus': {
          borderColor: '$primary800'
        }
      },
      marsh: {
        '&[data-state=inactive]:hover': {
          bg: '$marsh300'
        },
        '&:focus': {
          borderColor: '$marsh800'
        }
      }
    },
    size: {
      sm: {
        flex: 'unset'
      },
      md: {
        flex: 1
      },
      lg: {
        flex: 1
      }
    }
  },
  '& > div': { display: 'none' },
  '&[data-state=active]': {
    bg: 'white',
    boxShadow: 'none',
    border: '2px solid transparent',
    '& :is(h1,h2,h3,h4,h5,h6)': {
      fontWeight: 600,
      color: '$textBold'
    },
    '&:hover': {
      bg: 'white'
    },
    '&:focus-visible': {
      boxShadow: 'none'
    }
  },
  '&[data-state=inactive]': {
    '& :is(h1,h2,h3,h4,h5,h6)': {
      fontWeight: 400,
      color: '$grey900'
    }
  },
  '&[disabled]': {
    opacity: 0.3
  }
})

const StyledContainer = styled(Flex, {
  variants: {
    size: {
      sm: {
        p: '$4 $24',
        gap: '$3'
      },
      md: {
        p: '$24 $5',
        gap: '$4'
      },
      lg: {
        p: '$24 $5',
        gap: '$4'
      }
    }
  }
})

export const SegmentedControlItem = ({
  children,
  ...props
}: Omit<React.ComponentProps<typeof StyledItem>, 'size'>): JSX.Element => {
  const { size, theme } = useSegmentedControl()

  return (
    <StyledItem {...props} theme={theme} size={size}>
      <StyledContainer
        size={size}
        direction="column"
        align="center"
        justify="center"
      >
        {children}
      </StyledContainer>
    </StyledItem>
  )
}
