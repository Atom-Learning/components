import * as React from 'react'
import { Close } from '@atom-learning/icons'

import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { styled } from '~/stitches'

import { ActionIcon } from '../../action-icon'
import { Banner } from '../Banner'
import { Icon } from '../../icon'
import { useBannerContext } from '../BannerContext'

const toActionIconSize = {
  sm: 'md',
  md: 'sm'
}

const StyledDismiss = styled(ActionIcon, {
  position: 'absolute',
  top: '$3',
  right: '$3'
})

export const BannerRegularDismiss: React.FC<
  React.ComponentProps<typeof ActionIcon>
> = ({ label = 'dismiss', ...rest }) => {
  const { size } = useBannerContext()

  const actionIconSize = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toActionIconSize[s]),
    [size]
  )

  return (
    <Banner.Dismiss asChild>
      <StyledDismiss
        label={label}
        size={actionIconSize}
        hasTooltip={false}
        isRounded
        theme="neutral"
        appearance="solid"
        {...rest}
      >
        <Icon is={Close} />
      </StyledDismiss>
    </Banner.Dismiss>
  )
}

BannerRegularDismiss.displayName = 'BannerRegularDismiss'
