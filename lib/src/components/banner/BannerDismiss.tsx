import * as React from 'react'
import { Close } from '@atom-learning/icons'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Dismissible } from '../dismissible'
import { Icon } from '../icon'
import { useBannerContext } from './BannerContext'

const Dismiss = styled(ActionIcon, {
  position: 'absolute',
  top: '12px',
  right: '12px',
  variants: {
    containerSize: {
      sm: {
        '&:not(:disabled)': {
          bg: 'transparent',
          color: '$grey800'
        }
      },
      md: {
        '&:not(:disabled)': {
          bg: 'white',
          color: '$grey800'
        }
      }
    },
    emphasis: {
      highContrast: {
        '&:not(:disabled)': {
          color: 'white'
        }
      },
      midContrast: {},
      lowContrast: {}
    }
  }
})

export const BannerDismiss: React.FC<React.ComponentProps<typeof Dismiss>> = ({
  label = 'dismiss',
  ...props
}) => {
  const { emphasis, size } = useBannerContext()

  return (
    <Dismissible.Trigger asChild>
      <Dismiss
        size={size === 'sm' ? 'md' : 'sm'}
        hasTooltip={false}
        isRounded
        containerSize={size}
        emphasis={emphasis}
        theme="neutral"
        label={label}
        {...props}
      >
        <Icon is={Close} />
      </Dismiss>
    </Dismissible.Trigger>
  )
}

BannerDismiss.displayName = 'BannerDismiss'
