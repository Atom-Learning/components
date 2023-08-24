import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { styled } from '~/stitches'
import { useCallbackRefState } from '~/utilities/hooks/useCallbackRef'
import { OptionalTooltipWrapper } from '~/utilities/optional-tooltip-wrapper'

import { BadgeContext, BadgeProvider } from './Badge.context'
import { BadgeIcon } from './BadgeIcon'
import { BadgeText } from './BadgeText'
import { colorSchemes as badgeColorSchemes } from './stitches.badge.colorscheme.config'

const StyledBadge = styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$0',
  minWidth: 0,
  border: '1px solid #FFFFFF',
  fontFamily: '$body',
  '& > *:not(:last-child)': {
    mr: '$1'
  },
  variants: {
    emphasis: {
      subtle: {
        color: '$textSubtle',
        background: '$backgroundSubtle'
      },
      bold: {
        color: '$textBold',
        background: '$backgroundBold'
      }
    },
    size: {
      xs: {
        px: '$1'
      },
      sm: {
        px: '$1',
        py: '$0'
      },
      md: {
        px: '$2',
        py: '$1'
      }
    }
  }
})

export type TBadgeProps = React.ComponentProps<typeof StyledBadge> & {
  theme?: keyof typeof badgeColorSchemes
  overflow?: React.ComponentProps<typeof BadgeText>['overflow']
}

type TBadge = React.ForwardRefExoticComponent<TBadgeProps> & {
  Icon: typeof BadgeIcon
  Text: typeof BadgeText
}

type TBadgeInnerProps = Omit<Omit<TBadgeProps, 'size'>, 'overflow'>

const BadgeInner = React.forwardRef<HTMLDivElement, TBadgeInnerProps>(
  ({ theme = 'info', emphasis = 'subtle', children, ...rest }, ref) => {
    const { size, overflow, isOverflowing } = React.useContext(BadgeContext)
    const [badgeElRef, setBadgeElRef] = useCallbackRefState()
    React.useImperativeHandle(ref, () => badgeElRef as HTMLDivElement)

    const label = badgeElRef?.textContent

    return (
      <OptionalTooltipWrapper
        hasTooltip={overflow === 'ellipsis' && isOverflowing}
        label={label}
      >
        <StyledBadge
          role="status"
          emphasis={emphasis}
          size={size}
          {...rest}
          className={badgeColorSchemes[theme]}
          ref={setBadgeElRef}
        >
          {React.Children.map(children, (child) => {
            if (typeof child === 'string' || typeof child === 'number') {
              return <BadgeText>{child}</BadgeText>
            }
            if (React.isValidElement(child) && child.type === Icon) {
              return <BadgeIcon {...child.props} />
            }
            return child
          })}
        </StyledBadge>
      </OptionalTooltipWrapper>
    )
  }
)

export const Badge = React.forwardRef<HTMLDivElement, TBadgeProps>(
  ({ size = 'sm', overflow = 'wrap', ...rest }, ref) => {
    return (
      <BadgeProvider size={size} overflow={overflow}>
        <BadgeInner {...rest} ref={ref} />
      </BadgeProvider>
    )
  }
) as TBadge

Badge.displayName = 'Badge'
Badge.Icon = BadgeIcon
Badge.Text = BadgeText
