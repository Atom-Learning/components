import * as RadioGroup from '@radix-ui/react-radio-group'
import * as React from 'react'

import { useFieldWrapperContext, InlineFieldWrapper } from '~/components/field-wrapper'
import { styled } from '~/stitches'
import { Override } from '~/utilities/types'
import { focusVisibleStyleBlock } from '~/utilities'

const StyledRadioButton = styled(RadioGroup.Item, {
  display: 'flex',
  appearance: 'none',
  position: 'relative',
  backgroundColor: 'transparent',
  p: 0,
  border: '1px solid $grey800',
  borderRadius: '$round',
  cursor: 'pointer',
  size: '$1',
  '&:not([disabled])': {
    '&:hover': {
      '&[data-state="checked"]': {
        backgroundColor: '$blue900',
      },
      '&:not([data-state="checked"])': {
        borderColor: '$blue900',
      },
    },
    '&:focus-visible': focusVisibleStyleBlock(),
  },
  '&[data-state="checked"]': {
    backgroundColor: '$blue800',
    border: 'none'
  },
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  variants: {
    state: {
      error: {
        '&[data-state="checked"]': {
          backgroundColor: '$danger'
        },
        '&:not([data-state="checked"])': {
          border: '2px solid $danger',
        },
      },
    }
  }
})

const StyledIndicator = styled(RadioGroup.Indicator, {
  size: '$0',
  borderRadius: '$round',
  position: 'absolute',
  inset: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white'
})

type TRadioButtonGroupItemProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledRadioButton>,
  {
    as?: never
  } & {
    'aria-label'?: string
  }
> & React.ComponentProps<typeof InlineFieldWrapper>

export const RadioButtonGroupItem: React.FC<TRadioButtonGroupItemProps> = ({
  name,
  label,
  description,
  hideLabel,
  ...rest
}) => {
  const { state } = useFieldWrapperContext()

  const wrapperProps = {
    name,
    label,
    description,
    hideLabel
  }

  return (
    <InlineFieldWrapper {...wrapperProps}>
      <StyledRadioButton state={state === 'error' ? state : undefined} {...rest}>
        <StyledIndicator />
      </StyledRadioButton>
    </InlineFieldWrapper>

  )
}

RadioButtonGroupItem.displayName = 'RadioButtonGroupItem'
