import { Close } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { ActionIcon } from '../../action-icon'
import { Icon } from '../../icon'
import { Banner } from '../Banner'
import { useBannerContext } from '../BannerContext'

const toActionIconSize = {
  sm: 'md',
  md: 'sm'
}

const StyledDismiss = styled(ActionIcon, {
  zIndex: 1,
  position: 'absolute',
  top: '$3',
  right: '$3'
})

type BannerRegularDismissProps = Omit<
  React.ComponentProps<typeof StyledDismiss>,
  'children' | 'onClick' | 'href'
>

export const BannerRegularDismiss = ({
  label = 'dismiss',
  ...rest
}: BannerRegularDismissProps) => {
  const { size, setHasDismiss } = useBannerContext()

  React.useEffect(() => {
    setHasDismiss(true)
    return () => {
      setHasDismiss(false)
    }
  }, [setHasDismiss])

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
