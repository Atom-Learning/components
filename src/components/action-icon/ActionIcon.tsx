import invariant from 'invariant'
import * as React from 'react'

import { styled } from '~/stitches'

import { Icon } from '../icon/Icon'

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'unset',
  borderRadius: '$0',
  cursor: 'pointer',
  p: 'unset',
  transition: 'all 125ms ease-out',
  variants: {
    appearance: {
      none: {
        bg: 'transparent',
        color: '$tonal800',
        '&:hover,&:focus': {
          bg: '$alpha250'
        }
      },
      outline: {
        border: '1px solid $tonal500',
        bg: 'transparent',
        color: '$tonal600',
        '&:hover, &:focus': {
          borderColor: '$primary900',
          color: '$primary900'
        }
      },
      solid: {
        bg: '$tonal200',
        color: '$tonal800',
        '&:hover,&:focus': {
          bg: '$primary900',
          color: 'white'
        }
      }
    },
    size: {
      md: {
        size: '$3'
      },
      lg: {
        size: '$4'
      }
    }
  }
})

type ActionIconProps = React.ComponentProps<typeof StyledButton> & {
  label: string
}

export const ActionIcon: React.FC<ActionIconProps> = React.forwardRef(
  (
    { children, appearance = 'none', size = 'md', label, ...remainingProps },
    ref
  ) => {
    const INVALID_CHILDREN_MESSAGE = `A single ${Icon.displayName} component is permitted as a child of ${ActionIcon.displayName}`

    invariant(React.Children.count(children) === 1, INVALID_CHILDREN_MESSAGE)

    return (
      <StyledButton
        type="button"
        {...remainingProps}
        aria-label={label}
        appearance={appearance}
        size={size}
        ref={ref}
      >
        {React.Children.map(children, (child) => {
          // TS needs this check for any following code to access child.type
          // even with optional chaining
          if (!React.isValidElement(child)) {
            throw new Error(INVALID_CHILDREN_MESSAGE)
          }

          invariant(
            child.type === Icon,
            `Children of type ${child?.type} aren't permitted. Only an ${Icon.displayName} component is allowed in ${ActionIcon.displayName}`
          )

          return child
        })}
      </StyledButton>
    )
  }
)

ActionIcon.displayName = 'ActionIcon'
