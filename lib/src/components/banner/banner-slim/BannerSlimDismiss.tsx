import { Close } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../../action-icon'
import { Icon } from '../../icon'
import { Banner } from '../Banner'
import { useBannerContext } from '../BannerContext'

const StyledDismiss = styled(ActionIcon, {
  flexShrink: 0,
  variants: {
    emphasis: {
      highContrast: {
        color: 'white !important'
      }
    },
    containerSize: {
      sm: { position: 'absolute', top: '$4', right: '$4' },
      md: { position: 'static' }
    }
  }
})

type TBannerSlimDismissProps = Omit<
  React.ComponentProps<typeof StyledDismiss>,
  'children'
>

export const BannerSlimDismiss = ({
  label = 'dismiss',
  ...rest
}: TBannerSlimDismissProps): JSX.Element => {
  const { size, setHasDismiss, emphasis } = useBannerContext()

  React.useEffect(() => {
    setHasDismiss(true)
    return () => {
      setHasDismiss(false)
    }
  }, [setHasDismiss])

  return (
    <Banner.Dismiss asChild>
      <StyledDismiss
        label={label}
        size="md"
        hasTooltip={false}
        isRounded
        theme="neutral"
        containerSize={size}
        emphasis={emphasis as TBannerSlimDismissProps['emphasis']}
        {...rest}
      >
        <Icon is={Close} />
      </StyledDismiss>
    </Banner.Dismiss>
  )
}

BannerSlimDismiss.displayName = 'BannerSlimDismiss'
