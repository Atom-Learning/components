import { Close } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../../action-icon'
import { Icon } from '../../icon'
import { Banner } from '../Banner'
import { useBannerContext } from '../BannerContext'

const StyledDismiss = styled(ActionIcon, {
  variants: {
    containerSize: {
      sm: { position: 'absolute', top: '$4', right: '$4' },
      md: {}
    }
  }
})

export const BannerSlimDismiss: React.FC<
  React.ComponentProps<typeof ActionIcon>
> = ({ label = 'dismiss', ...rest }) => {
  const { size, setHasDismiss } = useBannerContext()

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
        {...rest}
      >
        <Icon is={Close} />
      </StyledDismiss>
    </Banner.Dismiss>
  )
}

BannerSlimDismiss.displayName = 'BannerSlimDismiss'
