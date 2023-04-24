import * as React from 'react'
import { Close } from '@atom-learning/icons'

import { ColorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'
import { ActionIcon } from '../action-icon'
import { Dismissible } from '../dismissible'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { IBannerContextValue } from './Banner.types'
import { BannerActions } from './BannerActions'
import { BannerButton } from './BannerButton'
import { BannerContent } from './BannerContent'
import { BannerContext } from './BannerContext'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'

interface IBannerRegularProps extends IBannerContextValue {
  size: 'sm' | 'md'
  dismissible?: boolean
  dismissibleValue?: React.ComponentProps<typeof Dismissible>['value']
  onDismiss?: React.ComponentProps<typeof Dismissible>['onDismiss']
}
const Container = styled(Flex, {
  borderRadius: '$0',
  overflow: 'hidden',
  '& > :first-child': {
    flex: 2
  },
  '& > :last-child': {
    flex: 'auto'
  },
  variants: {
    size: {
      sm: {
        maxWidth: '736px'
      },
      md: {
        minWidth: '736px'
      }
    }
  }
})

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

export const BannerRegular: React.FC<IBannerRegularProps> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
  Button: typeof BannerButton
} = ({
  children,
  size = 'md',
  colorScheme,
  emphasis,
  dismissible,
  dismissibleValue = 'dismiss-banner-regular',
  onDismiss
}) => {
  const content = findChildByType(children, BannerContent)
  const image = findChildByType(children, BannerImage)
  return (
    <ColorScheme {...colorScheme} css={{ position: 'relative' }} role="banner">
      <Dismissible value={dismissibleValue} asChild onDismiss={onDismiss}>
        <>
          {dismissible && (
            <Dismissible.Trigger asChild>
              <Dismiss
                size={size === 'sm' ? 'md' : 'sm'}
                label="dismiss"
                hasTooltip={false}
                isRounded
                containerSize={size}
                emphasis={emphasis}
                theme="neutral"
              >
                <Icon is={Close} />
              </Dismiss>
            </Dismissible.Trigger>
          )}
          <BannerContext.Provider value={{ colorScheme, size, emphasis }}>
            <Container size={size}>
              {content}
              {image}
            </Container>
          </BannerContext.Provider>
        </>
      </Dismissible>
    </ColorScheme>
  )
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage
BannerRegular.Button = BannerButton

BannerRegular.displayName = 'BannerRegular'
